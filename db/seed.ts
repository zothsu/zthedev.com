import { db } from 'astro:db';
import { asDrizzleTable } from '@astrojs/db/utils';
import { Projects } from './config';

// https://astro.build/db/seed
export default async function seed() {
  const typesafeProjects = asDrizzleTable('Projects', Projects);
  await db.insert(typesafeProjects).values([
    {
      id: 1,
      title: "PNW Web Solutions",
      slug: "pnw-web-solutions",
      description:
        "My digital agency focused on open-source, accessible, and small business web solutions.",
      stack: ["Astro", "Tailwind", "Docker", "Hostinger", "GitHub Actions"],
      image:
        "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760918089/blog-placeholder-1_lxebwm.jpg",
      alt: "",
      url: "https://pnwdigitalsolutions.org",
      repo: "https://github.com/zthdev/pnw-solutions",
      dateCreated: new Date("2024-05-01"),
    },
    {
      id: 2,
      title: "em.pdxhealth.services",
      slug: "em",
      description: "Official website for doula Emilie Young of Portland, OR.",
      stack: ["Static Site", "Accessibility", "Responsive Design"],
      image:
        "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760918089/blog-placeholder-1_lxebwm.jpg",
      alt: "",
      url: "https://em.pdxhealth.services",
      repo: "https://github.com/zothsu/emilieYoung",
      dateCreated: new Date("2024-01-01"),
    },
    {
      id: 3,
      title: "PeterConlin.com",
      slug: "peterconlin-com",
      description:
        "A showcase of Peter Conlin’s work in cinematic design, game development, and environment art. The site features high-fidelity cinematic, immersive game environments, and storytelling-driven projects.",
      stack: ["Static Site", "Portfolio", "Interactive Visuals"],
      image:
        "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760918089/blog-placeholder-1_lxebwm.jpg",
      alt: "",
      url: "https://peterconlin.com",
      dateCreated: new Date("2024-05-01"),
    },
    {
      id: 4,
      title: "TwoSistersPlayCafe.net",
      slug: "twosistersplaycafe-net",
      description:
        "Redesign of a WordPress website, prioritizing SEO and accessibility optimization. This involved meticulous SEO adjustments, from keyword research to on-page optimization, alongside ensuring accessibility compliance according to WCAG standards.",
      stack: ["WordPress", "SEO", "Accessibility", "Redesign"],
      image:
        "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760918089/blog-placeholder-1_lxebwm.jpg",
      alt: "",
      url: "https://twosistersplaycafe.net",
      dateCreated: new Date("2024-05-01"),
    },
    {
      id: 5,
      title: "CakeMoments.art",
      slug: "cakemoments-art",
      description:
        "A clean, user-friendly website, designed for a local cake consultant, featuring an intuitive appointment scheduling system. The design highlights the consultant’s portfolio with high-quality images and detailed service descriptions, providing potential clients with an easy and seamless experience for navigating and booking consultations.",
      stack: ["Static Site", "Scheduling", "Photography"],
      image:
        "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760918089/blog-placeholder-1_lxebwm.jpg",
      alt: "",
      url: "https://cakemoments.art",
      dateCreated: new Date("2024-05-01"),
    },
    {
      id: 6,
      title: "Sharpening Tracker",
      slug: "sharpening-tracker",
      description:
        "This MERN stack CRUD app is designed to help users track the last time they sharpened their knives and the stones used for the sharpening. With the app, users can conveniently log their sharpening sessions, ensuring they never miss a scheduled maintenance.",
      stack: ["MERN", "CRUD", "User Tracking"],
      url: "https://sharpeningtracker-38b3dbb8f407.herokuapp.com",
      alt: "",
      repo: "https://github.com/REPLACE_ME", // replace with actual repo link
      dateCreated: new Date("2024-05-01"),
    },
    {
      id: 7,
      title: "The NeuroSpicy Camper",
      slug: "the-neurospicy-camper",
      description:
        "This MEN stack CRUD application is a personal note-taking tool for campgrounds, designed to help neurodivergent individuals track properties that are important to their needs. It focuses on aspects such as noise levels, crowd density, and machine noise, addressing the heightened sensitivities that neurodivergent people often experience.",
      stack: ["MEN", "CRUD", "Note-Taking", "Neurodivergent Friendly"],
      image:
        "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760918089/blog-placeholder-1_lxebwm.jpg",
      alt: "",
      url: "https://theneurospicycamper-9a6b944e5aa8.herokuapp.com",
      repo: "https://github.com/REPLACE_ME", // replace
      dateCreated: new Date("2024-05-01"),
    },
    {
      id: 8,
      title: "InspireMe Home Decor",
      slug: "inspireme-home-decor",
      description:
        "This Django CRUD app is a collaborative platform designed to connect individuals passionate about home decor. It offers a space for users to share ideas, discover budget-friendly alternatives, and collaborate on creative, affordable design solutions, fostering a supportive community centered around sustainable and accessible home improvement.",
      stack: ["Django", "CRUD", "Collaboration", "Home Decor"],
      image:
        "https://res.cloudinary.com/dzuh8njoq/image/upload/v1760918089/blog-placeholder-1_lxebwm.jpg",
      alt: "",
      url: "https://inspiremehomedecor-4f31de9a6a6e.herokuapp.com",
      repo: "https://github.com/REPLACE_ME", // replace
      dateCreated: new Date("2024-05-01"),
    },
  ] as any);
}
