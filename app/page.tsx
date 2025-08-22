"use client";

import type React from "react";

import { useEffect, useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  ChevronRight,
  Quote,
  Code2,
  Share2,
  Link2,
  CuboidIcon as Cube,
  Gauge,
  Search,
  Bot,
  Rocket,
  Settings,
  Briefcase,
  Heart,
  Award,
  Home,
  Users,
  Video,
  Stethoscope,
  Dumbbell,
  Building2,
  DollarSign,
  ShoppingCart,
  MessageCircleHeart,
  Plane,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  ProjectMediaCarousel,
  type Media as ProjectMedia,
} from "@/components/project-media-carousel";

import { CopyClipboardButton } from "../components/copy-clipboard-button";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const NAME = "Jonas Garcia";
const ROLE = "Senior Frontend Engineer";
const EMAIL = "jonas.antonimar.garcia555@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/jonas-garcia-3203a634b/";
const GITHUB = "https://github.com/techdev902/";
const LOCATION = "Sumare, San Paulo, Brazil";
const PHONE = "+1 352 218 1222";
const PHILOSOPHY = `I believe frontend engineering is more than writing code—it's about bringing ideas to life in a way that feels effortless to the user. My approach blends technical excellence with a deep understanding of user behavior, ensuring every interaction is fast, accessible, and intuitive. From crafting pixel-perfect interfaces to optimizing performance under the hood, I aim to bridge design and technology to create experiences that delight, engage, and empower.`;
const CAREER_HIGHLIGHT = `Throughout my software engineering career, I could get a chance to work with Meta (formerly Facebook), a big tech company who are leading cutting-edge technologies, mainly AI, Metaverse, and AR/VR technologies.`;

type Bullet = { text: string };

type Experience = {
  company: string;
  title: string;
  location?: string;
  start: string;
  end: string;
  bullets: Bullet[];
  stack: string[];
};

const EXPERIENCES: Experience[] = [
  {
    company: "Wolf Carries, LLC",
    title: "Senior Frontend Engineer",
    start: "Nov 2022",
    end: "Present",
    location: "Remote",
    bullets: [
      {
        text: "Led end-to-end frontend architecture for Taostats (Bittensor explorer/analytics) and YoloHealth (telehealth).",
      },
      {
        text: "Built scalable Next.js + TypeScript frontends, optimizing SEO and large dataset handling.",
      },
      {
        text: "Advanced state management with Jotai to minimize re-renders and boost performance.",
      },
      {
        text: "Translated complex Figma designs into reusable components with Tailwind + ShadCN.",
      },
      {
        text: "Integrated real-time updates via WebRTC/MQTT and GSAP-based scroll animations (Viggle AI).",
      },
      {
        text: "Migrated D3 charts to Visx for performance and interactivity; enforced WCAG 2.1 accessibility.",
      },
      {
        text: "Integrated GraphQL, tRPC (with Prisma), and Django REST; added LLM-powered UI and chatbots.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "ShadCN",
      "Jotai",
      "GSAP",
      "WebRTC",
      "MQTT",
      "GraphQL",
      "tRPC",
      "Visx",
      "WCAG",
    ],
  },
  {
    company: "Amazon",
    title: "Senior Frontend Developer",
    start: "Apr 2019",
    end: "Nov 2022",
    location: "Remote",
    bullets: [
      {
        text: "Built features and UI infra for WhatsApp Web, Ads, and Business Messaging tools.",
      },
      {
        text: "Migrated WhatsApp Web tests to React Testing Library; trained 20+ engineers.",
      },
      {
        text: "Led cross-platform compliance UI flows; boosted Ads-related test coverage to 90%+.",
      },
      {
        text: "Contributed to Facebook Design System with accessibility improvements.",
      },
      { text: "Extensive GraphQL usage across complex interfaces." },
    ],
    stack: [
      "React 18",
      "TypeScript",
      "GraphQL",
      "Jest",
      "React Testing Library",
      "Style X",
      "Accessibility",
    ],
  },
  {
    company: "FishBrain",
    title: "Frontend Web Developer",
    start: "Aug 2016",
    end: "Apr 2019",
    location: "Remote",
    bullets: [
      {
        text: "Redesigned the fishing community web interface with a mobile-first approach, improving UX and boosting user acquisition by 125%",
      },
      {
        text: "Migrated the fishing map application from PHP to React/Preact for a 170% performance gain.",
      },
      {
        text: "Delivered an intuitive MVP from Figma using React, Tailwind CSS, and Storybook, reducing development time by 25%.",
      },
      {
        text: "Built and launched a WCAG-compliant fishing spots mobile app using React Native, rated 4.5/5 on the App Store.",
      },
      {
        text: "Implemented REST APIs with Fastify, added authentication middleware, migrated MySQL data to DynamoDB, and enhanced search experience by 45% using Typesense with virtualized scrolling and debouncing.",
      },
    ],
    stack: [
      "React",
      "Preact",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
      "Fastify",
      "Jest",
      "Cypress",
      "Typesense",
    ],
  },
];

type Project = {
  name: string;
  categories: string;
  description: string;
  highlights: string[];
  stack: string[];
  link?: string;
  media: ProjectMedia[];
};

const PROJECTS: Project[] = [
  {
    name: "Taostats",
    categories: "Data Analytics | Web3 | WebRTC",
    description:
      "Block Explorer and Analytics Platform for the Bittensor network providing insights, metrics, and real-time data.",
    highlights: [
      "Architected Next.js + TypeScript app for SEO and performance.",
      "Real-time feeds via WebRTC/MQTT; overhauled charts with Visx.",
      "Efficient state with Jotai; integrated GraphQL/tRPC APIs.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Jotai",
      "Visx",
      "D3.js",
      "WebRTC",
      "MQTT",
      "GraphQL",
      "tRPC",
      "Tailwind",
    ],
    media: [
      {
        kind: "image",
        src: "/images/Taostats/_Thumb.png",
        alt: "tao_1",
      },
      {
        kind: "image",
        src: "/images/Taostats/tao_1.png",
        alt: "tao_1",
      },
      {
        kind: "image",
        src: "/images/Taostats/tao_2.png",
        alt: "tao_2",
      },
      {
        kind: "image",
        src: "/images/Taostats/tao_3.png",
        alt: "tao_3",
      },
      {
        kind: "image",
        src: "/images/Taostats/tao_4.png",
        alt: "tao_4",
      },
      {
        kind: "image",
        src: "/images/Taostats/tao_5.png",
        alt: "tao_5",
      },
      {
        kind: "image",
        src: "/images/Taostats/tao_6.png",
        alt: "tao_6",
      },
      {
        kind: "image",
        src: "/images/Taostats/tao_7.png",
        alt: "tao_7",
      },
      {
        kind: "image",
        src: "/images/Taostats/tao_8.png",
        alt: "tao_8",
      },
    ],
  },
  {
    name: "YoloHealth",
    categories: "Healthcare | Telehealth | AI",
    description:
      "Telehealth platform for metabolic wellness: virtual consultations, AI meal planning, and social community.",
    highlights: [
      "Translated Figma into reusable components (Tailwind + ShadCN).",
      "Implemented LLM chatbots and video via Socket.io on AWS.",
      "Integrated APIs with tRPC and GraphQL for fluid data.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "ShadCN",
      "LLMs",
      "Socket.io",
      "AWS",
      "tRPC",
      "GraphQL",
    ],
    media: [
      {
        kind: "image",
        src: "/images/YoloHealth/doctor_dashboard.png",
        alt: "Doctor Dashboard",
      },
      {
        kind: "image",
        src: "/images/YoloHealth/patient_dashboard.png",
        alt: "Patient Dashboard",
      },
      {
        kind: "image",
        src: "/images/YoloHealth/food_journal.png",
        alt: "Food Journal",
      },
      {
        kind: "image",
        src: "/images/YoloHealth/food_journal_2.png",
        alt: "Food Journal 2",
      },
      {
        kind: "image",
        src: "/images/YoloHealth/online_zoom_appointment.png",
        alt: "Online Zoom Appointment",
      },
      {
        kind: "image",
        src: "/images/YoloHealth/light_exercise.png",
        alt: "Light Exercise",
      },
    ],
  },
  {
    name: "Mirai",
    categories: "Real Estate | 3D Visualization (Web GL) | AI",
    description:
      "Immersive 3D web platform for hospitality: photorealistic hotel tours, interactive booking, and AI-driven scene generation.",
    highlights: [
      "Built high-performance React apps with Three.js + WebGL (custom GLSL shaders).",
      "Integrated Luma AI for 3D scene reconstruction and video editing.",
      "Optimized asset pipelines (Blender/Unreal → web) for speed and fidelity",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Radix UI",
      "SWR",
      "Three.js",
      "WebGL",
      "GLSL",
      "Luma AI",
      "Blender",
      "Unreal Engine",
    ],
    media: [
      {
        kind: "video",
        src: "https://vimeo.com/1108699400",
        poster: "/images/Mirai/vimeo-Hotel-room-booking.png",
        alt: "3D Visualization - Realistic 3D Google Map for hotel booking",
      },
      {
        kind: "video",
        src: "https://vimeo.com/1108697375",
        poster: "/images/Mirai/vimeo-room-availability.png",
        alt: "3D Visualization - Demo of Room Availability and Window Viewer for Hotel Booking",
      },
      {
        kind: "video",
        src: "https://vimeo.com/1108698732",
        poster: "/images/Mirai/vimeo-exhibition-2.png",
        alt: "3D Visualization - Exibition Feature by LumaAI",
      },
      {
        kind: "image",
        src: "/images/Mirai/AR-Google-Map.png",
        alt: "3D AR Google Map",
      },
      {
        kind: "image",
        src: "/images/Mirai/3dmap-view-lumaai.png",
        alt: "3D Map View Luma AI",
      },
      {
        kind: "image",
        src: "/images/Mirai/events.png",
        alt: "Events",
      },
      {
        kind: "image",
        src: "/images/Mirai/exhibition-1.png",
        alt: "Exhibition 1",
      },
      {
        kind: "image",
        src: "/images/Mirai/window-viewer.png",
        alt: "Window Viewer",
      },
    ],
  },
  {
    name: "ShedPRO",
    categories: "Rental | 3D Visualization | Real-time Pricing",
    description:
      "3D configurator for photorealistic building models: custom replicas, real-time pricing, and integrated workflows.",
    highlights: [
      "Delivered hyper-realistic 3D models with Three.js/BabylonJS + custom GLSL shaders.",
      "Built mobile-friendly UI with instant pricing and 2D floor plan generation.",
      "Integrated with websites, dealer systems, and analytics dashboards.",
    ],
    stack: ["React", "Three.js", "BabylonJS", "WebGL", "GLSL"],
    media: [
      {
        kind: "image",
        src: "/images/ShedPRO/_Thumb.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/ShedPRO/Section-1.png",
        alt: "Section 1",
      },
      {
        kind: "image",
        src: "/images/ShedPRO/Section-2.png",
        alt: "Section 2",
      },
      {
        kind: "image",
        src: "/images/ShedPRO/Design-Style.png",
        alt: "Design Style",
      },
      {
        kind: "image",
        src: "/images/ShedPRO/Design-Material.png",
        alt: "Design Material",
      },
      {
        kind: "image",
        src: "/images/ShedPRO/Design-internal-edit.png",
        alt: "Design Internal Edit",
      },
      {
        kind: "image",
        src: "/images/ShedPRO/Design-ext-edit.png",
        alt: "Design External Edit",
      },
    ],
  },
  {
    name: "Golden City",
    categories: "Real Estate | 3D Visualization | Web3",
    description:
      "Decentralized 3D property investment: immersive tours, NFT-based ownership, and AI-powered search.",
    highlights: [
      "Built Next.js + TypeScript frontend with 3D tours in Three.js/WebXR.",
      "Integrated Web3 (Ethers.js/Web3.js) for wallet connect & smart contract ops.",
      "Delivered NFT portfolio dashboards, API integrations, and AI search (LangChain).",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "WebXR",
      "Ethers.js",
      "Solidity",
      "AWS",
      "LangChain",
    ],
    media: [
      {
        kind: "image",
        src: "/images/GoldenCity/01.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/GoldenCity/02.png",
        alt: "Section 1",
      },
      {
        kind: "image",
        src: "/images/GoldenCity/03.png",
        alt: "Section 1",
      },
      {
        kind: "image",
        src: "/images/GoldenCity/04.png",
        alt: "Section 1",
      },
    ],
  },
  {
    name: "Liftango",
    categories: "Transport | Mobility | Mapping",
    description:
      "Sustainable shared transport platform: public transit, corporate carpooling, and autonomous vehicle solutions.",
    highlights: [
      "Built React apps with Material UI and Redux for multi-modal transport management.",
      "Integrated Google Maps API for real-time routing, vehicle tracking, and geospatial analytics.",
      "Delivered features for public, corporate, and community transport, including demand-responsive routing.",
    ],
    stack: ["React", "Redux", "Material UI", "Google Maps API"],
    media: [
      {
        kind: "image",
        src: "/images/Liftango/_Thumb.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Liftango/panel (1).png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Liftango/panel (2).png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Liftango/panel (3).png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Liftango/panel (4).png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Liftango/panel (5).png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Liftango/panel (6).png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Liftango/panel (7).png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Liftango/panel (8).png",
        alt: "Thumb",
      },
    ],
  },
  {
    name: "Nira App",
    categories: "Point Cloud | 3D Viewer | WebGL",
    description:
      "Lightweight 3D viewer for CAD & point clouds: drag-n-drop, instant rendering, and easy asset sharing.",
    highlights: [
      "Built React + WebGL viewer (Three.js) for large CAD models & LiDAR scans.",
      "Optimized point cloud rendering for smooth navigation in the browser.",
      "Enabled one-click sharing of 3D assets with lightweight embedding.",
    ],
    stack: ["React", "Three.js", "Web GL", "Point Clouds"],
    media: [
      {
        kind: "image",
        src: "/images/NiraPointCloud/_Thumb.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/NiraPointCloud/loading.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/NiraPointCloud/car.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/NiraPointCloud/car-default.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/NiraPointCloud/car-day.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/NiraPointCloud/car-night.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/NiraPointCloud/car-rain.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/NiraPointCloud/factory.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/NiraPointCloud/factory-detail.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/NiraPointCloud/mountain-1.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/NiraPointCloud/mountain-2.png",
        alt: "Thumb",
      },
    ],
  },
  {
    name: "Butterflies",
    categories: "AI + Human Social Network | Web | iOS",
    description:
      "AI + human social network: customizable AI companions, photo sharing, and real-world AR pics.",
    highlights: [
      "Built React/React Native app with TypeScript, Vite, and Tailwind for fast, engaging UI.",
      "Implemented AI personality customization, photo sharing, and AR-style “take pics together” features.",
      "Integrated Supabase, Mixpanel, and GCP for backend, analytics, and scalable deployment.",
    ],
    stack: [
      "React",
      "React Native",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Jotai",
      "Supabase",
      "Vercel",
      "GCP",
      "Mixpanel",
    ],
    media: [
      {
        kind: "image",
        src: "/images/Butterfly/_Thumb.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Butterfly/01.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Butterfly/02.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Butterfly/03.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Butterfly/04.png",
        alt: "Thumb",
      },
    ],
  },
  {
    name: "WATI",
    categories: "Social Marketing | Ad Integration | WhatsApp",
    description:
      "WhatsApp Business API platform: automated marketing, sales, and customer support.",
    highlights: [
      "Built scalable React frontend with Redux-saga for complex communication workflows.",
      "Integrated WhatsApp Business API with CRM systems for campaign automation.",
      "Delivered analytics dashboards for communication metrics & performance tracking.",
    ],
    stack: [
      "React",
      "Redux-saga",
      "JavaScript",
      "WhatsApp Business API",
      "CRM Integration",
      "Analytics",
    ],
    media: [
      {
        kind: "image",
        src: "/images/WATI/_Thumb.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/WATI/2.png",
        alt: "2",
      },
      {
        kind: "image",
        src: "/images/WATI/3.png",
        alt: "3",
      },
      {
        kind: "image",
        src: "/images/WATI/AI_Support_Agent.png",
        alt: "AI Support Agent",
      },
      {
        kind: "image",
        src: "/images/WATI/No_Code_Chatbor.png",
        alt: "No Code Chatbor",
      },
      {
        kind: "image",
        src: "/images/WATI/Shared_Team_Inbox.png",
        alt: "Shared Team Inbox",
      },
    ],
  },
  {
    name: "MyVirtualStudio",
    categories: "Boutique | E-Commerce | AI Image Generation",
    description:
      "AI-powered e-commerce imagery: virtual clothing try-ons, text-to-image, and background generation.",
    highlights: [
      "Built AI pipeline with Stable Diffusion for model, clothing, and background swaps.",
      "Implemented image segmentation for precise apparel isolation and composition.",
      "Generated multiple photo variations from a single source image via text prompts and masks.",
    ],
    stack: [
      "React",
      "Material UI",
      "TypeScript",
      "Python",
      "Stable Diffusion",
      "Image Segmentation",
      "AI Image Generation",
      "Text-to-Image",
    ],
    media: [
      {
        kind: "video",
        src: "https://www.loom.com/share/8aa030f528ae418c9c779c4d77aa62f3?sid=10db7808-392a-4ff7-9ac6-d34793ad94cb",
        poster: "/images/MyVirtualStudio/_Thumb.png",
        alt: "MyVirtualStudio - Home Page",
      },
      {
        kind: "video",
        src: "https://www.loom.com/share/a13cb18a5b68467fbcd4f14794a470b5?sid=d33d3953-5974-42c2-b280-5c524c552567",
        poster: "/images/MyVirtualStudio/Task-0.png",
        alt: "MyVirtualStudio - My Tasks",
      },
      // {
      //   kind: "image",
      //   src: "/images/MyVirtualStudio/0.png",
      //   alt: "Thumb",
      // },
      {
        kind: "image",
        src: "/images/MyVirtualStudio/Task-1.png",
        alt: "2",
      },
      {
        kind: "image",
        src: "/images/MyVirtualStudio/Task-2.png",
        alt: "3",
      },
      {
        kind: "image",
        src: "/images/MyVirtualStudio/2.png",
        alt: "Edit",
      },
      {
        kind: "image",
        src: "/images/MyVirtualStudio/3.png",
        alt: "Prompt",
      },
      {
        kind: "image",
        src: "/images/MyVirtualStudio/Models.png",
        alt: "My Models",
      },
      {
        kind: "image",
        src: "/images/MyVirtualStudio/Favorites.png",
        alt: "My Favorites",
      },
    ],
  },
  {
    name: "Saivvi",
    categories: "Social Content Ideation | AI Generation | Mobile App",
    description:
      "AI-powered content ideation: creator personas, viral trend scanning, and strategic insights.",
    highlights: [
      "Built cross-platform app with React/React Native, Supabase, and RevenueCat for subscriptions.",
      "Implemented TrendScan™ to surface niche-relevant keywords & topics from Google, TikTok, IG.",
      "Integrated push notifications, error tracking (Sentry/Bugsnag), and Google/Apple sign-in.",
    ],
    stack: [
      "React",
      "React Native",
      "Supabase",
      "RevenueCat",
      "Push Notifications",
      "Sentry",
      "Bugsnag",
      "OAuth",
    ],
    media: [
      {
        kind: "image",
        src: "/images/Saivvi/_Thumb.png",
        alt: "Thumb",
      },
      {
        kind: "image",
        src: "/images/Saivvi/00.png",
        alt: "00",
      },
      {
        kind: "image",
        src: "/images/Saivvi/01.png",
        alt: "01",
      },
      {
        kind: "image",
        src: "/images/Saivvi/02.png",
        alt: "02",
      },
      {
        kind: "image",
        src: "/images/Saivvi/03.png",
        alt: "03",
      },
      {
        kind: "image",
        src: "/images/Saivvi/04.png",
        alt: "04",
      },
      {
        kind: "image",
        src: "/images/Saivvi/05.png",
        alt: "05",
      },
      {
        kind: "image",
        src: "/images/Saivvi/06.png",
        alt: "06",
      },
      {
        kind: "image",
        src: "/images/Saivvi/07.png",
        alt: "07",
      },
      {
        kind: "image",
        src: "/images/Saivvi/08.png",
        alt: "08",
      },
      {
        kind: "image",
        src: "/images/Saivvi/09.png",
        alt: "09",
      },
      {
        kind: "image",
        src: "/images/Saivvi/10.png",
        alt: "10",
      },
    ],
  },
];

const SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "ShadCN",
  "Chakra UI",
  "Material UI",
  "Redux",
  "Zustand",
  "Jotai",
  "GraphQL",
  "tRPC",
  "REST",
  "Prisma",
  "PostgreSQL",
  "Supabase",
  "Node.js",
  "Python (Django)",
  "WebRTC",
  "MQTT",
  "Socket.io",
  "D3.js",
  "Visx",
  "Jest",
  "RTL",
  "Cypress",
  "Storybook",
  "Vite",
  "Astro",
  "RSC",
  "SSR",
  "SEO",
  "WCAG",
  "GSAP",
  "Framer Motion",
  "WebGL",
  "Three.js",
  "Shaders",
  "AI/LLMs (OpenAI)",
  "Luma AI",
  "AWS (EC2, Serverless)",
];

const EDUCATION = [
  {
    school: "Universidade Estadual de Campinas",
    credential: "Bachelor's — Computer Engineering",
    time: "Mar 2012 - Jul 2016",
  },
];

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar?: string;
  initials: string;
};
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Jonas raises the bar for frontend quality—he ships performant, accessible interfaces and elevates the team’s engineering practices.",
    name: "He Zhang",
    title: "Project Manager @ Wolf Carries, LLC",
    initials: "HZ",
  },
  {
    quote:
      "He transformed our data-heavy UI with thoughtful architecture and smooth interactions. The GSAP polish impressed stakeholders.",
    name: "He Zhang",
    title: "Project Manager @ Wolf Carries, LLC",
    initials: "HZ",
  },
  {
    quote:
      "Reliable, detail-oriented, and a great collaborator. Jonas bridges design and engineering exceptionally well.",
    name: "Nenad Vucicevic",
    title: "Backend Engineering Lead @ Wolf Carries, LLC",
    initials: "NV",
  },
];

// Key Areas of Expertise
type Expertise = { title: string; body: string; icon: React.ReactNode };
const EXPERTISE: Expertise[] = [
  // {
  //   title: "Web & Mobile Engineering",
  //   icon: <Code2 className="h-5 w-5" />,
  //   body: "Build scalable web and mobile apps using React, Next.js (App Router), Node.js, Django, FastAPI, and Supabase with a focus on UX, modularity, and clean code in monorepos.",
  // },
  {
    title: "Social Content Generation & Virality",
    icon: <Share2 className="h-5 w-5" />,
    body: "Create tools for short-form content (memes, clips, carousels) with GenAI and real-time APIs; automate publishing pipelines across TikTok, X (Twitter), Threads, and Instagram.",
  },
  {
    title: "Link-in-Bio & Deep Linking",
    icon: <Link2 className="h-5 w-5" />,
    body: "Develop branded link-in-bio tools with dynamic deep linking, mobile routing, UTM tracking, and QR flows to boost retention, engagement, and attribution.",
  },
  {
    title: "2D/3D Visualization & Interactive UX",
    icon: <Cube className="h-5 w-5" />,
    body: "Render high-performance visuals using Three.js, React Three Fiber, WebGL, Canvas API; experienced with point clouds, spatial data, and immersive analytics dashboards.",
  },
  {
    title: "Performance & Frontend Optimization",
    icon: <Gauge className="h-5 w-5" />,
    body: "Optimize Lighthouse scores, Core Web Vitals, and rendering using lazy-loading, code-splitting, hydration, and tuning React/Next.js apps for scale.",
  },
  {
    title: "Data Scraping & Normalization",
    icon: <Search className="h-5 w-5" />,
    body: "Build web scrapers with Playwright, Puppeteer, or headless browsers; structure unstructured data for dashboards, analytics, and AI pipelines.",
  },
  {
    title: "AI Agents & Automation",
    icon: <Bot className="h-5 w-5" />,
    body: "Design autonomous agents using LangChain, LlamaIndex, and OpenAI APIs for intelligent task routing, memory management, and workflow automation integrated into full-stack apps.",
  },
  {
    title: "Product-Led Engineering & Rapid Prototyping",
    icon: <Rocket className="h-5 w-5" />,
    body: "Own end-to-end delivery from idea and Figma to code; leverage Turborepo, tRPC, Prisma, Tailwind, and shadcn/ui for fast, iterative, business-focused shipping.",
  },
  {
    title: "DevOps, CI/CD & Tooling",
    icon: <Settings className="h-5 w-5" />,
    body: "Implement CI/CD with GitHub Actions, Vercel, Docker, Railway; automate testing, previews, deployments, and environment config in modern monorepos and cloud platforms.",
  },
  {
    title: "Startup & Domain Expertise",
    icon: <Briefcase className="h-5 w-5" />,
    body: "Led engineering initiatives in fintech, creator economy, music tech, and trading tools; excel in fast-paced, zero-to-one environments owning full delivery.",
  },
];

// Industries Served
type Industry = {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  sketchBg: string;
};
const INDUSTRIES: Industry[] = [
  {
    name: "Real Estate",
    icon: <Home className="h-6 w-6" />,
    description:
      "Property management platforms, listing portals, and virtual tour applications",
    color: "from-emerald-500/20 to-green-500/20",
    sketchBg: "/sketches/real-estate-sketch.png",
  },
  {
    name: "Social Media",
    icon: <Users className="h-6 w-6" />,
    description:
      "Content creation tools, community platforms, and engagement analytics",
    color: "from-blue-500/20 to-cyan-500/20",
    sketchBg: "/sketches/social-media-sketch.png",
  },
  {
    name: "Video Content & Marketing",
    icon: <Video className="h-6 w-6" />,
    description:
      "Streaming platforms, video editing tools, and marketing automation",
    color: "from-purple-500/20 to-pink-500/20",
    sketchBg: "/sketches/video-sketch.png",
  },
  {
    name: "Healthcare",
    icon: <Stethoscope className="h-6 w-6" />,
    description:
      "Telehealth platforms, patient management systems, and medical analytics",
    color: "from-red-500/20 to-rose-500/20",
    sketchBg: "/sketches/healthcare-sketch.png",
  },
  {
    name: "Fitness & Sports",
    icon: <Dumbbell className="h-6 w-6" />,
    description:
      "Workout tracking apps, sports analytics, and wellness platforms",
    color: "from-orange-500/20 to-amber-500/20",
    sketchBg: "/sketches/fitness-sketch.png",
  },
  {
    name: "SaaS",
    icon: <Building2 className="h-6 w-6" />,
    description:
      "Enterprise software solutions, productivity tools, and business automation",
    color: "from-slate-500/20 to-gray-500/20",
    sketchBg: "/sketches/saas-sketch.png",
  },
  {
    name: "FinTech",
    icon: <DollarSign className="h-6 w-6" />,
    description:
      "Trading platforms, payment systems, and financial analytics dashboards",
    color: "from-green-500/20 to-emerald-500/20",
    sketchBg: "/sketches/fintech-sketch.png",
  },
  {
    name: "E-commerce",
    icon: <ShoppingCart className="h-6 w-6" />,
    description:
      "Online marketplaces, inventory management, and customer experience optimization",
    color: "from-indigo-500/20 to-blue-500/20",
    sketchBg: "/sketches/ecommerce-sketch.png",
  },
  {
    name: "Dating & Friendship",
    icon: <MessageCircleHeart className="h-6 w-6" />,
    description:
      "Matching algorithms, social discovery apps, and community building platforms",
    color: "from-pink-500/20 to-rose-500/20",
    sketchBg: "/sketches/dating-sketch.png",
  },
  {
    name: "Travel & Hospitality",
    icon: <Plane className="h-6 w-6" />,
    description:
      "Booking platforms, travel planning tools, and hospitality management systems",
    color: "from-sky-500/20 to-blue-500/20",
    sketchBg: "/sketches/travel-sketch.png",
  },
  {
    name: "Education",
    icon: <GraduationCap className="h-6 w-6" />,
    description:
      "Learning management systems, online courses, and educational analytics",
    color: "from-violet-500/20 to-purple-500/20",
    sketchBg: "/sketches/education-sketch.png",
  },
];

// Reduced motion
function usePrefersReducedMotion() {
  const prefers = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);
  return prefers;
}

// Global scroll progress + nav active
function useGlobalScrollUX() {
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const progress = document.querySelector(
      "[data-progress]"
    ) as HTMLDivElement | null;
    if (!progress) return;
    const tween = gsap.to(progress, {
      scaleX: 1,
      transformOrigin: "left center",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [reduced]);

  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll("[data-nav]")
    ) as HTMLAnchorElement[];
    const sections = links
      .map(
        (a) =>
          document.querySelector(
            a.getAttribute("href") || ""
          ) as HTMLElement | null
      )
      .filter(Boolean) as HTMLElement[];
    const scrollers: ScrollTrigger[] = [];
    sections.forEach((sec) => {
      const id = "#" + (sec.id || "");
      if (!id) return;
      const link = links.find((l) => l.getAttribute("href") === id);
      if (!link) return;
      const st = ScrollTrigger.create({
        trigger: sec,
        start: "top center",
        end: "bottom center",
        onToggle: (self) => {
          link.classList.toggle("text-foreground", self.isActive);
          link.classList.toggle("text-muted-foreground", !self.isActive);
          link.classList.toggle("font-medium", self.isActive);
        },
      });
      scrollers.push(st);
    });
    return () => scrollers.forEach((s) => s.kill());
  }, []);
}

// Per-section 3D reveal + parallax + interactive tilt
function useSectionReveal(
  rootRef: React.RefObject<HTMLElement | null>,
  opts?: { stagger?: number }
) {
  const reduced = usePrefersReducedMotion();
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reduced) return;
    const ctx = gsap.context(() => {
      root.querySelectorAll("[data-wipe]").forEach((el) => {
        gsap.fromTo(
          el,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: root, start: "top 75%" },
          }
        );
      });

      const animatables = root.querySelectorAll("[data-animate]");
      gsap.from(animatables, {
        opacity: 0,
        y: 24,
        z: -80,
        rotationX: 6,
        transformPerspective: 800,
        duration: 0.9,
        ease: "power3.out",
        stagger: opts?.stagger ?? 0.08,
        scrollTrigger: { trigger: root, start: "top 80%" },
      });

      root.querySelectorAll("[data-parallax]").forEach((el) => {
        const speed = Number((el as HTMLElement).dataset.speed || 0.35);
        gsap.to(el, {
          yPercent: -speed * 100,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      const tiltEls = Array.from(
        root.querySelectorAll<HTMLElement>("[data-tilt]")
      );
      tiltEls.forEach((el) => {
        const onMove = (e: MouseEvent) => {
          const rect = el.getBoundingClientRect();
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = (e.clientX - cx) / (rect.width / 2);
          const dy = (e.clientY - cy) / (rect.height / 2);
          gsap.to(el, {
            rotationY: dx * 6,
            rotationX: -dy * 6,
            transformPerspective: 900,
            z: 20,
            duration: 0.3,
            ease: "power2.out",
          });
        };
        const onLeave = () => {
          gsap.to(el, {
            rotationX: 0,
            rotationY: 0,
            z: 0,
            duration: 0.4,
            ease: "power3.out",
          });
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        (el as any).__tiltCleanup = () => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        };
      });

      return () => tiltEls.forEach((el) => (el as any).__tiltCleanup?.());
    }, root);
    return () => ctx.revert();
  }, [rootRef, opts, reduced]);
}

function Header() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target?.closest("a[href^='#']")) {
        const a = target.closest("a") as HTMLAnchorElement;
        const href = a.getAttribute("href");
        if (href) {
          e.preventDefault();
          gsap.to(window, {
            duration: 0.8,
            ease: "power2.out",
            scrollTo: { y: href, offsetY: 72 },
          });
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="h-1 bg-muted">
        <div data-progress className="h-1 bg-foreground scale-x-0" />
      </div>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-tight">
          {NAME}
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          {[
            { id: "about", label: "About" },
            { id: "expertise", label: "Expertise" },
            { id: "industries", label: "Industries" },
            { id: "experience", label: "Experience" },
            { id: "career-highlight", label: "Career Highlight" },
            { id: "projects", label: "Projects" },
            { id: "skills", label: "Skills" },
            { id: "education", label: "Education" },
            { id: "testimonials", label: "Testimonials" },
            { id: "philosophy", label: "Philosophy" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              data-nav
              href={`#${item.id}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href={LINKEDIN}
            target="_blank"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href={`mailto:${EMAIL}`}
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  useSectionReveal(ref, { stagger: 0.06 });

  useLayoutEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("[data-hero='title']", {
        y: 40,
        opacity: 0,
        rotationX: 8,
        transformPerspective: 800,
        duration: 0.9,
        ease: "power3.out",
      })
        .from(
          "[data-hero='subtitle']",
          { y: 20, opacity: 0, duration: 0.7, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          "[data-hero='cta']",
          { y: 10, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .from(
          "[data-hero='avatar']",
          {
            scale: 0.9,
            opacity: 0,
            rotationY: -8,
            transformPerspective: 900,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, ref);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="home" ref={ref} className="relative overflow-hidden">
      <img
        src="https://sjc.microlink.io/iS7VlJaZhmMrEY_UlKQgyYQlEBttsWvJYFAe8lxlEo_JAvXChY-nXkutJZH5YUdKohDlwm-EV20ODSN6LmlC3A.jpeg"
        alt="Screenshot of personal website homepage"
        className="pointer-events-none select-none absolute inset-0 w-full h-full object-contain opacity-10 scale-150 blur-sm"
        aria-hidden="true"
      />
      <div
        data-parallax
        data-speed="0.35"
        className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-tr from-primary/20 to-foreground/10 blur-3xl"
      />
      <div
        data-parallax
        data-speed="0.25"
        className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-gradient-to-tr from-foreground/10 to-primary/20 blur-3xl"
      />
      <div className="container mx-auto px-4 py-20 md:py-28 relative">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] items-center gap-10 [transform-style:preserve-3d]">
          <div>
            <Badge className="mb-4" variant="outline" data-animate>
              {ROLE}
            </Badge>
            <h1
              data-hero="title"
              className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight"
            >
              Building performant, accessible, and scalable frontends that move
              business forward.
            </h1>
            <p
              data-hero="subtitle"
              className="mt-4 text-base sm:text-lg text-muted-foreground max-w-prose"
            >
              From Amazon to blockchain analytics and telehealth, I design and
              engineer user-centric web experiences using React, Next.js,
              TypeScript, and modern data layers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3" data-hero="cta">
              <Button asChild>
                <a href="#contact">
                  Get in touch
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#projects">View projects</a>
              </Button>
            </div>
            <div
              className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
              data-animate
            >
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-4 w-4" /> {LOCATION}
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-1 hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> {EMAIL}
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                className="inline-flex items-center gap-1 hover:text-foreground"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative" data-hero="avatar" data-tilt>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/30 to-foreground/20 blur-2xl opacity-60" />
              <Avatar className="relative h-88 w-88 border shadow-lg">
                <AvatarImage
                  src="/images/jonas.jpg"
                  alt="Professional headshot of Dennis"
                />
                <AvatarFallback>JG</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  title,
  kicker,
}: {
  title?: string;
  kicker?: string;
}) {
  return (
    <div className="mb-8">
      {kicker ? (
        <div
          className="text-xs uppercase tracking-wider text-muted-foreground mb-2"
          data-animate
        >
          {kicker}
        </div>
      ) : null}
      <h2
        className="text-2xl sm:text-3xl font-semibold tracking-tight"
        data-animate
      >
        {title || "Section"}
      </h2>
      <div className="mt-3 h-0.5 w-24 bg-muted relative overflow-hidden">
        <div data-wipe className="absolute inset-0 bg-foreground origin-left" />
      </div>
    </div>
  );
}
SectionHeading.defaultProps = { title: "Section", kicker: "" };

function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);
  return (
    <section
      id="about"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="About" kicker="Profile" />
      <div className="grid md:grid-cols-2 gap-8 items-start [transform-style:preserve-3d]">
        <p
          className="text-muted-foreground text-base leading-relaxed"
          data-animate
        >
          {/* {ABOUT} */}
          Hello! I'm Jonas, a Senior Frontend Engineer with 7+ years of
          experience designing, building, and leading the delivery of
          sophisticated web applications across diverse environments, from
          <Badge key={"Amazon"} variant="outline" className="font-normal">
            Amazon
          </Badge>
          's Business UI (Bedrock Studio, SageMaker, Batch Console) to dynamic
          agency environments (Wolf Carries) and enterprise SaaS (InfoTech).
          Proven ability to architect performant, accessible, and scalable UIs
          using
          <Badge key={"React"} variant="outline" className="font-normal">
            React
          </Badge>
          ,
          <Badge key={"Next.js"} variant="outline" className="font-normal">
            Next.js
          </Badge>
          , and
          <Badge key={"TypeScript"} variant="outline" className="font-normal">
            TypeScript
          </Badge>
          , seamlessly integrating with various backends (
          <Badge key={"GraphQL"} variant="outline" className="font-normal">
            GraphQL
          </Badge>
          ,
          <Badge key={"tRPC"} variant="outline" className="font-normal">
            tRPC
          </Badge>
          , REST) and cutting-edge technologies like
          <Badge key={"AI/LLMs"} variant="outline" className="font-normal">
            AI/LLMs
          </Badge>
          ,
          <Badge key={"WebRTC"} variant="outline" className="font-normal">
            WebRTC
          </Badge>
          , WebGL, and blockchain analytics. Extensive experience in
          <Badge
            key={"3D visualization"}
            variant="outline"
            className="font-normal"
          >
            3D visualization
          </Badge>
          , having built immersive and interactive platforms with Three.js,
          BabylonJS, and custom GLSL shaders—optimizing asset pipelines, point
          cloud rendering, and photorealistic environments for
          <Badge key={"real estate"} variant="outline" className="font-normal">
            Real Estate
          </Badge>
          , Hospitality, and Web3 applications. Adept at translating complex
          requirements into user-centric solutions that drive engagement and
          business value.
        </p>
        <Card data-animate data-tilt className="[transform-style:preserve-3d]">
          <CardHeader>
            <CardTitle>Core Focus</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Performance-first UI architecture with accessibility baked-in
              </li>
              <li>
                Real-time and data-heavy interfaces (WebRTC, MQTT, analytics)
              </li>
              <li>UX improvements, testing culture, and component systems</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref, { stagger: 0.05 });
  return (
    <section
      id="expertise"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="Key Areas of Expertise" kicker="Strengths" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 [transform-style:preserve-3d]">
        {EXPERTISE.map((item, i) => (
          <Card
            key={i}
            data-animate
            data-tilt
            className="relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-tr from-primary/20 to-foreground/10 blur-2xl"
              data-parallax
              data-speed="0.25"
            />
            <CardHeader className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                {item.icon}
                <span>{item.title}</span>
              </div>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              {item.body}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function IndustriesSection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref, { stagger: 0.04 });
  return (
    <section
      id="industries"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="Industries Served" kicker="Domains" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 [transform-style:preserve-3d]">
        {INDUSTRIES.map((industry, index) => (
          <Card
            key={industry.name}
            data-animate
            data-tilt
            className="relative overflow-hidden group bg-card/95 backdrop-blur-sm"
          >
            {/* 3D Sketch Background */}
            <div
              className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
              style={{
                backgroundImage: `url(${industry.sketchBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />

            {/* Enhanced text contrast overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-transparent to-background/40 group-hover:from-background/40 group-hover:to-background/60 transition-all duration-500" />

            {/* 3D Background Elements */}
            <div
              className={`absolute -inset-2 rounded-xl bg-gradient-to-br ${industry.color} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              data-parallax
              data-speed="0.2"
            />
            <div
              className="absolute -top-8 -right-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-foreground/5 blur-lg"
              data-parallax
              data-speed="0.15"
            />
            <div
              className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-gradient-to-tr from-foreground/5 to-primary/10 blur-md"
              data-parallax
              data-speed="0.25"
            />

            {/* Card Content with enhanced contrast */}
            <CardHeader className="relative z-20 pb-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/20 backdrop-blur-sm text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {industry.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground drop-shadow-sm">
                  {industry.name}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative z-20 pt-0">
              <p className="text-sm text-foreground/80 leading-relaxed font-medium drop-shadow-sm bg-background/20 backdrop-blur-sm rounded-md p-2">
                {industry.description}
              </p>
            </CardContent>

            {/* Subtle geometric patterns */}
            <div className="absolute top-4 right-4 w-8 h-8 border border-primary/20 rounded rotate-45 opacity-50 group-hover:rotate-90 transition-transform duration-700 z-10" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border border-foreground/20 rounded-full opacity-30 group-hover:scale-125 transition-transform duration-500 z-10" />
          </Card>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);
  return (
    <section
      id="experience"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="Experience" kicker="Work History" />
      <div className="grid gap-6 [transform-style:preserve-3d]">
        {EXPERIENCES.map((exp, idx) => (
          <Card key={idx} data-animate data-tilt className="relative">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <CardTitle className="text-lg">
                  {exp.title} ·{" "}
                  <span className="text-foreground/80">{exp.company}</span>
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {exp.start} — {exp.end}
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                {exp.location}
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {exp.stack.map((s) => (
                  <Badge key={s} variant="outline" className="font-normal">
                    {s}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <div className="grid md:grid-cols-[1.6fr_0.4fr] gap-8 items-center [transform-style:preserve-3d]">
                <ul className="list-disc pl-5">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b.text}</li>
                  ))}
                </ul>
                {/* {exp.company === "Amazon" ? (
                  <div className="flex items-center justify-center">
                    <ProjectMediaCarousel
                      items={[
                        {
                          kind: "image",
                          src: "/CERTIFICATE_LANDING_PAGE~Q3CMNPZ3B4BE.png",
                          alt: "Amazon certification or achievement certificate",
                        },
                        {
                          kind: "image",
                          src: "/CERTIFICATE_LANDING_PAGE~Q3CMNPZ3B4BD.png",
                          alt: "Amazon certification or achievement certificate",
                        },
                      ]}
                      title="Amazon Certification"
                    />
                  </div>
                ) : null} */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);
  return (
    <section
      id="projects"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="Projects" kicker="Featured Portfolio" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 [transform-style:preserve-3d]">
        {PROJECTS.map((p, idx) => (
          <Card
            key={idx}
            data-animate
            data-tilt
            className="flex flex-col overflow-hidden"
          >
            {/* Media carousel */}
            <div className="p-3">
              <ProjectMediaCarousel items={p.media} title={p.name} />
            </div>
            {/* Content */}
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-lg">{p.name} 🥇🥇🥇</CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {p.categories}
                  </div>
                </div>
                {p.link ? (
                  <Link
                    href={p.link}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Open project</span>
                  </Link>
                ) : null}
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-3">
              <p>{p.description}</p>
              <ul className="list-disc pl-5 space-y-1">
                {p.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.stack.map((s) => (
                  <Badge key={s} variant="outline" className="font-normal">
                    {s}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref, { stagger: 0.03 });
  return (
    <section
      id="skills"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="Skills" kicker="Tooling & Expertise" />
      <div className="flex flex-wrap gap-2" data-animate>
        {SKILLS.map((s) => (
          <Badge key={s} variant="secondary">
            {s}
          </Badge>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);
  return (
    <section
      id="education"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="Education" kicker="Degrees" />
      <div className="grid gap-6 [transform-style:preserve-3d]">
        {EDUCATION.map((e, i) => (
          <Card key={i} data-animate data-tilt>
            <CardHeader>
              <CardTitle className="text-lg">{e.school}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <div>{e.credential}</div>
              <div>{e.time}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref, { stagger: 0.06 });
  return (
    <section
      id="testimonials"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="Testimonials" kicker="What People Say" />
      <div className="grid md:grid-cols-3 gap-6 [transform-style:preserve-3d]">
        {TESTIMONIALS.map((t, i) => (
          <Card
            key={i}
            data-animate
            data-tilt
            className="relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-tr from-primary/20 to-foreground/10 blur-2xl"
              data-parallax
              data-speed="0.3"
            />
            <CardHeader className="space-y-4">
              <Quote className="h-6 w-6 text-muted-foreground" />
              <CardTitle className="text-base leading-relaxed font-normal text-foreground/90">
                "{t.quote}"
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>{t.initials}</AvatarFallback>
              </Avatar>
              <div className="text-sm">
                <div className="font-medium">{t.name}</div>
                <div className="text-muted-foreground">{t.title}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);
  return (
    <section
      id="philosophy"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="Philosophy" kicker="Philosophy" />
      <div className="grid md:grid-cols-2 gap-8 items-center [transform-style:preserve-3d]">
        <div className="space-y-6" data-animate>
          <div className="flex items-center gap-3 mb-4">
            <Heart className="h-6 w-6 text-primary text-red-500" />
            <span className="text-lg font-medium">
              Frontend Engineering Philosophy
            </span>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed">
            {PHILOSOPHY}
          </p>
          <div className="text-muted-foreground text-base leading-relaxed grid md:grid-cols-2 gap-8">
            <ul className="list-disc pl-5 pt-5 space-y-1">
              <li key={1}>User-Centered Mindset</li>
              <li key={2}>Critical Thinking</li>
              <li key={3}>Think Outside the Box</li>
              <li key={4}>Attention to Detail</li>
              <li key={5}>Problem Solving</li>
              <li key={6}>Continuous Learning</li>
              <li key={7}>Cross-Functional Collaboration</li>
            </ul>
            <ul className="list-disc pl-5 space-y-1 mt-4">
              <li key={8}>Clear Communication</li>
              <li key={9}>Adaptability & Flexibility</li>
              <li key={10}>Performance Optimization Focus</li>
              <li key={11}>Empathy in Design</li>
              <li key={12}>Code Quality Commitment</li>
              <li key={13}>Creative Problem-Solving</li>
              <li key={14}>Proactive Ownership</li>
            </ul>
          </div>
        </div>
        <div className="relative" data-animate data-tilt>
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-primary/20 to-foreground/10 blur-2xl opacity-60" />
          <img
            src="/dev-env.png"
            alt="Professional developer workspace with dual monitors and RGB keyboard"
            className="relative rounded-xl shadow-lg w-full h-auto object-cover"
            crossOrigin="anonymous"
          />
        </div>
      </div>
    </section>
  );
}

function CareerHighlightSection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);
  return (
    <section
      id="career-highlight"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="The Proudest in My Career" kicker="Achievement" />
      <div className="grid md:grid-cols-2 gap-8 items-center [transform-style:preserve-3d]">
        <div className="space-y-6" data-animate>
          <div className="flex items-center gap-3 mb-4">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium">Meta Experience</span>
          </div>
          <p className="text-muted-foreground text-base leading-relaxed">
            {CAREER_HIGHLIGHT}
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Meta</Badge>
            <Badge variant="secondary">Facebook</Badge>
            <Badge variant="secondary">WhatsApp Web</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Meta UI Kit</Badge>
            <Badge variant="secondary">Ad Integration</Badge>
            <Badge variant="secondary">AI/ML</Badge>
            <Badge variant="secondary">Metaverse</Badge>
            <Badge variant="secondary">AR/VR</Badge>
          </div>
        </div>
        <div className="relative" data-animate data-tilt>
          <div className="absolute -inset-2 rounded-xl bg-gradient-to-tr from-blue-500/20 to-primary/10 blur-2xl opacity-60" />
          <img
            src="/CERTIFICATE_LANDING_PAGE~Q3CMNPZ3B4BE.png"
            alt="Amazon certification or achievement certificate"
            className="relative rounded-xl shadow-lg w-full h-auto object-cover"
            crossOrigin="anonymous"
          />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  useSectionReveal(ref);
  return (
    <section
      id="contact"
      ref={ref}
      className="container mx-auto px-4 py-16 scroll-mt-20 [perspective:1200px]"
    >
      <SectionHeading title="Contact" kicker="Let’s Collaborate" />
      <div className="grid md:grid-cols-2 gap-8 items-start [transform-style:preserve-3d]">
        <div className="text-muted-foreground" data-animate>
          I’m open to senior frontend roles, consulting, and collaborations on
          high-impact products. The fastest way to reach me is email or
          LinkedIn.
        </div>
        <div className="flex flex-wrap gap-3" data-animate data-tilt>
          <Button asChild>
            <a href={`mailto:${EMAIL}`}>
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  useGlobalScrollUX();
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <IndustriesSection />
        <ExperienceSection />
        {/* <CareerHighlightSection /> */}
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <TestimonialsSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <footer className="border-t">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between text-sm text-muted-foreground">
          <span>
            {new Date().getFullYear()} · {NAME}
          </span>
          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN}
              target="_blank"
              className="hover:text-foreground"
              rel="noreferrer"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <CopyClipboardButton
              value={EMAIL}
              label="Email"
              icon={<Mail className="h-4 w-4" />}
            />
            <a
              href={GITHUB}
              className="hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
