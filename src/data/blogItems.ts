// src/data/blogItems.ts
export interface BlogItem {
  id: string;
  slug: string;
  image: string;
  alt: string;
  tag: string;
  date: string;
  title: string;
  description: string;
  href: string;
  color: 'neon-purple' | 'neon-cyan';
  readTime: string;
  content: string; // HTML content for blog detail
  author: {
    name: string;
    role: string;
    bio: string;
    image: string;
    alt: string;
  };
  relatedArticles: { id: string }[]; // References to other blog items by id
}

export const blogItems: BlogItem[] = [
  {
    id: "devops-mindset",
    slug: "why-developers-should-think-like-operators",
    image: "/img/blog1.jpg",
    alt: "Z Sullivan",
    tag: "DevOps",
    date: "Oct 10, 2025",
    title: "Why Developers Should Think Like Operators",
    description:
      "Bridging the gap between development and operations isn't just about tools — it's about mindset. Here's why every developer benefits from thinking like an operator.",
    href: "/blogs/why-developers-should-think-like-operators",
    color: "neon-cyan",
    readTime: "6 min read",
    content: `
      <p>We talk a lot about DevOps as a culture or a pipeline, but what it really comes down to is empathy. Developers who understand how their code behaves in production write better, more maintainable software. The same applies the other way around — operators who think like developers automate smarter and troubleshoot faster.</p>

      <h2>Bridging Development and Operations</h2>
      <p>The wall between dev and ops used to be massive — code got “thrown over” after a release, and sysadmins were left holding the bag when it broke at 3 a.m. Modern DevOps culture tears that wall down. Developers who deploy, monitor, and observe their own code naturally become more thoughtful engineers.</p>

      <ul>
        <li><strong>Build with Production in Mind</strong>: Logging, metrics, and observability should never be afterthoughts.</li>
        <li><strong>Automate Everything You Can</strong>: Consistency is reliability — CI/CD isn't optional anymore.</li>
        <li><strong>Respect the Ops</strong>: Understanding infrastructure makes you a better problem-solver, not just a better coder.</li>
      </ul>

      <h3>Learning from the Command Line</h3>
      <p>When you touch servers directly, when you break something and fix it yourself, you learn faster than any tutorial can teach you. That's where real growth happens. Tools like Docker, Caddy, and Tailscale have made local DevOps accessible for indie developers and small teams — no corporate cloud needed.</p>

      <blockquote>"DevOps isn't a role — it's a conversation between the people who build and the people who keep things running." — Z Sullivan</blockquote>

      <h2>The Human Element</h2>
      <p>DevOps is less about YAML files and more about how teams communicate. We build trust by sharing context, documenting clearly, and assuming good intent. The goal isn't just uptime — it's sustainability.</p>

      <h3>Looking Ahead</h3>
      <p>The future of DevOps belongs to generalists who understand both systems and people. As automation grows, empathy and clarity will be the true force multipliers. Build, observe, iterate — and always leave your systems cleaner than you found them.</p>

      <p>Want to talk open-source infrastructure or static-site workflows? <a href="/#contact">Reach out</a> — I love swapping notes about real-world DevOps setups and helping small teams level up their stack.</p>
    `,
    author: {
      name: "Z Sullivan",
      role: "DevOps-shaped Full Stack Web Developer",
      bio: "Z is a full stack web developer and open-source advocate based in the Pacific Northwest. They specialize in building secure, lightweight systems with Docker and static-first frameworks. When not working, Z loves helping small teams bring DevOps principles into their workflows.",
      image: "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760917163/signal-pofile_haxwrf.webp",
      alt: "Z Sullivan",
    },
    relatedArticles: [{ id: "docker" }, { id: "self-hosting" }],
  },
  {
    id: "ai",
    slug: "ai-revolution",
    image: "/img/blog2.jpg",
    alt: "Z Sullivan",
    tag: "Open Source",
    date: "Apr 10, 2025",
    title: "Running Open-Source AI on Your Own Terms",
    description:
      "How I ship AI features without surrendering control&mdash;transparent tooling, local-first workflows, and communities that care about user autonomy.",
    href: "/blogs/ai-revolution",
    color: "neon-purple",
    readTime: "7 min read",
    content: `
      <p>Open-source AI isn't just a vibe&mdash;it's how we keep agency over the systems we depend on. Running models on hardware we control lets us audit, adapt, and share improvements across the community.</p>

      <h2>Build a Transparent AI Stack</h2>
      <p>I prefer container images I can actually read. Start with reproducible Dockerfiles, wire in GPU support only if you need it, and pin models from open hubs so upgrades are deliberate instead of accidental.</p>

      <ul>
        <li><strong>Self-host inference</strong>: Projects like Ollama, vLLM, and LM Studio make on-prem orchestration approachable.</li>
        <li><strong>Track experiments openly</strong>: Use Git-driven MLOps to keep results portable and remixable.</li>
        <li><strong>Expose APIs carefully</strong>: Sidecar reverse proxies and mTLS keep internal tools from bleeding onto the public web.</li>
      </ul>

      <h3>Shipping Features Without Surrendering Data</h3>
      <p>Most "AI integrations" ask us to ship user data to proprietary endpoints. Instead, I wrap inference endpoints with FastAPI, log only what we truly need, and federate signals back into ActivityPub services when it benefits the network.</p>

      <blockquote>"Information freedom means we can inspect the stack, remix it, and invite others to run it with us&mdash;not just consume it." — Z Sullivan</blockquote>

      <h2>Operational Habits That Stick</h2>
      <p>Nightly smoke tests, Infrastructure as Code, and upstream contribution checklists keep my AI services from becoming an island. When we publish what broke and how we fixed it, the broader open-source ecosystem levels up with us.</p>

      <p>If you're curious about running open AI that aligns with your values, <a href="/#contact">reach out</a>. I love helping indie teams prove that privacy, resilience, and intelligence can coexist.</p>
  `,
    author: {
      name: "Z Sullivan",
      role: "DevOps-shaped Full Stack Web Developer",
      bio: "Z is a full stack web developer and open-source advocate based in the Pacific Northwest. They specialize in building secure, lightweight systems with Docker and static-first frameworks. When not working, Z loves helping small teams bring DevOps principles into their workflows.",
      image: "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760917163/signal-pofile_haxwrf.webp",
      alt: "Z Sullivan",
    },
    relatedArticles: [{ id: "serverless" }, { id: "microservices" }],
  },
  {
    id: "3d",
    slug: "3d-web-experiences",
    image: "/img/blog3.jpg",
    alt: "Infrastructure dashboards",
    tag: "DevOps",
    date: "Apr 5, 2025",
    title: "Designing Developer Dashboards for Distributed Systems",
    description:
      "Why I build immersive observability views with open tooling so operators and contributors share the same truth.",
    href: "/blogs/3d-web-experiences",
    color: "neon-cyan",
    readTime: "8 min read",
    content: `
      <p>The best dashboards feel immersive: layered context, healthy contrast, and just enough motion to keep anomalies from hiding. "3D" now means Distributed, Decentralized, and Documented&mdash;the pillars I use to design operational views for the teams I work with.</p>

      <h2>Make the Invisible Obvious</h2>
      <p>When you fuse OpenTelemetry traces, Loki logs, and Prometheus metrics into a single pane, contributors and operators stop arguing about whose data is "more real." I lean on Grafana, Apache Superset, and a sprinkle of Three.js to create depth that highlights impact without overwhelming.</p>

      <ul>
        <li><strong>Distributed</strong>: Mirror your monitoring stack across regions so an outage doesn't blind you.</li>
        <li><strong>Decentralized</strong>: Self-host the pieces you can; share curated snapshots with the wider community.</li>
        <li><strong>Documented</strong>: Every chart deserves a runbook link, or it's just eye candy.</li>
      </ul>

      <h3>Open Source First</h3>
      <p>Information freedom thrives when dashboards are forkable. Publishing Terraform modules, JSON exports, and "why it exists" READMEs lowers the barrier for other fediverse admins to replicate your setup.</p>

      <blockquote>"The best ops view isn't proprietary&mdash;it's the one a neighboring instance can remix tomorrow." — Z Sullivan</blockquote>

      <h2>Bring Humans into the Loop</h2>
      <p>Dashboards are conversation starters. Pair them with weekly async reviews, recorded walkthroughs, and issue templates that ask for context. When everyone speaks the same visual language, incidents turn into opportunities.</p>

      <p>Need help untangling your observability story? <a href="/#contact">Ping me</a> and we'll craft a dashboard stack the whole collective can own.</p>
  `,
    author: {
      name: "Z Sullivan",
      role: "DevOps-shaped Full Stack Web Developer",
      bio: "Z is a full stack web developer and open-source advocate based in the Pacific Northwest. They specialize in building secure, lightweight systems with Docker and static-first frameworks. When not working, Z loves helping small teams bring DevOps principles into their workflows.",
      image: "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760917163/signal-pofile_haxwrf.webp",
      alt: "Z Sullivan",
    },
    relatedArticles: [{ id: "ai" }, { id: "microservices" }],
  },
  {
    id: "serverless",
    slug: "serverless-architecture",
    image: "/img/blog4.jpg",
    alt: "Serverless workloads",
    tag: "Federation",
    date: "Mar 30, 2025",
    title: "Serverless Glue for a Federated Web",
    description:
      "How I use lightweight functions to bridge ActivityPub services, keep moderation humane, and scale community instances on demand.",
    href: "/blogs/serverless-architecture",
    color: "neon-purple",
    readTime: "5 min read",
    content: `
      <p>Serverless isn't a silver bullet, but it's fantastic glue. I lean on functions to fan out federation events, normalize payloads, and offload moderation tasks so maintainers can focus on community instead of plumbing.</p>
      <h2>My Favorite Patterns</h2>
      <p>Edge functions catch inbound ActivityPub traffic, queue moderation jobs, and hydrate caches before content hits timelines. Event bridges hand off to long-running services when needed, keeping consumption predictable.</p>
      <ul>
        <li><strong>Runtime Contracts</strong>: Use JSON Schema so other instances understand the hooks you expose.</li>
        <li><strong>Transparent Logs</strong>: Ship anonymized traces to shared Grafana boards so peers can debug federation hiccups.</li>
        <li><strong>Fail-Open Ethics</strong>: When automation fails, default to human review instead of silent drops.</li>
      </ul>
      <h3>Community-Friendly Tooling</h3>
      <p>Open-source platforms like Supabase Functions, Cloudflare Workers, and Coolify make it realistic for tiny teams to self-host without losing sleep. The trick is pairing them with incident playbooks and a culture of publishing fixes.</p>
      <p>Want to graft serverless into your federated stack? <a href="/#contact">Let's architect it</a> so you can scale responsibly.</p>
    `,
    author: {
      name: "Z Sullivan",
      role: "DevOps-shaped Full Stack Web Developer",
      bio: "Z is a full stack web developer and open-source advocate based in the Pacific Northwest. They specialize in building secure, lightweight systems with Docker and static-first frameworks. When not working, Z loves helping small teams bring DevOps principles into their workflows.",
      image: "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760917163/signal-pofile_haxwrf.webp",
      alt: "Z Sullivan",
    },
    relatedArticles: [{ id: "ai" }, { id: "ar" }],
  },
  {
    id: "ar",
    slug: "ar-ecommerce",
    image: "/img/blog5.jpg",
    alt: "Federated commerce",
    tag: "Fediverse",
    date: "Mar 25, 2025",
    title: "Federated Commerce Without Gatekeepers",
    description:
      "What happens when indie shops, cooperatives, and creators plug ActivityPub into their storefronts and keep ownership of their data.",
    href: "/blogs/ar-ecommerce",
    color: "neon-cyan",
    readTime: "6 min read",
    content: `
      <p>Imagine a storefront that still works if your payment processor drops you. ActivityPub gives indie sellers a way to stay connected to their customers without surrendering data or community ownership.</p>

      <h2>From Broadcast to Conversation</h2>
      <p>I build storefront integrations that publish product updates, shipping notices, and support replies right back into the fediverse. Buyers can follow a shop the same way they follow a friend, and no walled-garden algorithm gets to decide reach.</p>

      <ul>
        <li><strong>Own your catalog</strong>: Use open-source commerce engines like Medusa or Solidus and sync feeds via ActivityStreams.</li>
        <li><strong>Respect consent</strong>: Offer granular subscription options so customers choose what updates they see.</li>
        <li><strong>Stay portable</strong>: Keep content in Git (or at least exportable JSON) so migrating hosts takes hours, not months.</li>
      </ul>

      <h3>Compliance Without Compromise</h3>
      <p>Accessibility, regional tax rules, and privacy laws still apply. The difference is we implement them transparently and share the playbooks&mdash;because a resilient commons needs reusable legal and technical patterns.</p>

      <blockquote>"Commerce can be communal when we build networks that invite participation instead of locking it down." — Z Sullivan</blockquote>

      <p>If you want a storefront that plays nice with ActivityPub and aligns with your values, <a href="/#contact">let's build it</a> together.</p>
  `,
    author: {
      name: "Z Sullivan",
      role: "DevOps-shaped Full Stack Web Developer",
      bio: "Z is a full stack web developer and open-source advocate based in the Pacific Northwest. They specialize in building secure, lightweight systems with Docker and static-first frameworks. When not working, Z loves helping small teams bring DevOps principles into their workflows.",
      image: "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760917163/signal-pofile_haxwrf.webp",
      alt: "Z Sullivan",
    },
    relatedArticles: [{ id: "serverless" }, { id: "3d" }],
  },
  {
    id: "microservices",
    slug: "microservices-scaling",
    image: "/img/blog6.jpg",
    alt: "Microservices architecture",
    tag: "Platform",
    date: "Mar 20, 2025",
    title: "Microservices That Respect the Commons",
    description:
      "Practices I use to keep distributed services reliable, self-hostable, and kind to the contributors who run them.",
    href: "/blogs/microservices-scaling",
    color: "neon-purple",
    readTime: "8 min read",
    content: `
      <p>Microservices are only worth the complexity if they empower autonomy. In the communities I support, we split services by stewardship, not by vanity&mdash;it lets contributors own a slice without drowning in coordination overhead.</p>
      <h2>Principles I Won't Ship Without</h2>
      <ul>
        <li><strong>Explicit contracts</strong>: Every service publishes an OpenAPI spec and a change log before deploys.</li>
        <li><strong>Automated empathy</strong>: Contract tests run across repos so breaking changes get caught before they hurt downstream operators.</li>
        <li><strong>Stateless by default</strong>: When persistence is unavoidable, we wrap it in migration guides and backup rituals.</li>
      </ul>
      <h3>Governance for Humans</h3>
      <p>We pair architecture documents with decision records so new maintainers understand why the system looks the way it does. Transparency is the best onboarding tool we have.</p>
      <p>By keeping components small, observable, and fork-friendly, the fediverse can evolve without leaving communities behind. <a href="/#contact">Need a hand</a> designing yours? I'm here for it.</p>
    `,
    author: {
      name: "Z Sullivan",
      role: "DevOps-shaped Full Stack Web Developer",
      bio: "Z is a full stack web developer and open-source advocate based in the Pacific Northwest. They specialize in building secure, lightweight systems with Docker and static-first frameworks. When not working, Z loves helping small teams bring DevOps principles into their workflows.",
      image: "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760917163/signal-pofile_haxwrf.webp",
      alt: "Z Sullivan",
    },
    relatedArticles: [{ id: "serverless" }, { id: "ai" }],
  },
];
