<?php
// Receives contact form submissions from the site and creates a Lead in
// EspoCRM. Lives in public/ so Astro copies it to dist/ and it deploys to
// public_html/contact-handler.php alongside the static site.
//
// The EspoCRM API key is read from a file one level above public_html, so it
// never reaches the browser and survives `rsync --delete` on deploy. That file
// is created by hand on the server and contains: <?php return '<api key>';

const ESPO_LEAD_URL = 'https://crm.zthedev.com/api/v1/Lead';
const API_KEY_FILE = '/home/u634839907/domains/zthedev.com/espo-lead-api-key.php';
const ALLOWED_ORIGINS = ['https://zthedev.com', 'https://www.zthedev.com'];
const MIN_ELAPSED_MS = 3000;
// EspoCRM user that new Leads are assigned to (the API user's role needs
// Assignment Permission = all for this to be accepted).
const ASSIGNED_USER_ID = '6ab6e104435fd17e2';

header('Content-Type: application/json');
header('Cache-Control: no-store');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method not allowed']);
}

// Browsers always send Origin on a fetch POST, so a foreign one means another
// site is trying to submit through this endpoint.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && !in_array($origin, ALLOWED_ORIGINS, true)) {
    respond(403, ['ok' => false, 'error' => 'Forbidden']);
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    respond(400, ['ok' => false, 'error' => 'Invalid request']);
}

$field = fn(string $key): string => trim((string) ($input[$key] ?? ''));
$name = $field('name');
$email = $field('email');
$subject = $field('subject');
$message = $field('message');

// Filled honeypot or an implausibly fast submit means a bot. Report success
// so it learns nothing, but don't create a Lead.
$elapsedMs = (int) ($input['elapsedMs'] ?? 0);
if ($field('website') !== '' || $elapsedMs < MIN_ELAPSED_MS) {
    respond(200, ['ok' => true]);
}

if (
    $name === '' || $message === ''
    || !filter_var($email, FILTER_VALIDATE_EMAIL)
    || mb_strlen($name) > 200 || mb_strlen($subject) > 200 || mb_strlen($message) > 10000
) {
    respond(422, ['ok' => false, 'error' => 'Please fill in every field with a valid email address.']);
}

if (!is_readable(API_KEY_FILE)) {
    error_log('contact-handler: API key file missing or unreadable at ' . API_KEY_FILE);
    respond(500, ['ok' => false, 'error' => 'Server misconfigured']);
}
$apiKey = require API_KEY_FILE;

// EspoCRM requires lastName on a Lead; put everything before the final word
// into firstName so single-word names still land in lastName.
$parts = preg_split('/\s+/', $name);
$lastName = array_pop($parts);
$firstName = implode(' ', $parts);

$lead = [
    'firstName' => $firstName,
    'lastName' => $lastName,
    'emailAddress' => $email,
    'source' => 'Web Site',
    'assignedUserId' => ASSIGNED_USER_ID,
    'description' => ($subject !== '' ? "Subject: $subject\n\n" : '') . $message,
];

$ch = curl_init(ESPO_LEAD_URL);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($lead),
    CURLOPT_HTTPHEADER => [
        'Content-Type: application/json',
        'X-Api-Key: ' . $apiKey,
        // Repeat enquiries from the same person should still come through
        // rather than being rejected as duplicate Leads.
        'X-Skip-Duplicate-Check: true',
    ],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 15,
]);
$responseBody = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($responseBody === false || $status < 200 || $status >= 300) {
    error_log("contact-handler: EspoCRM returned $status $curlError " . substr((string) $responseBody, 0, 500));
    respond(502, ['ok' => false, 'error' => 'Could not save your message']);
}

respond(200, ['ok' => true]);
