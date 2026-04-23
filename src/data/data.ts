/**
 * Personal site content (Zhihao Zhang).
 */
import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Zhihao Zhang",
  siteTitle: "Home",
  initials: "ZZ",
  url: "https://zhihao-zhang.com",
  location: "Fairfax, VA",
  locationLink: "https://www.google.com/maps/place/George+Mason+University",
  description:
    "Ph.D. student in Computer Science at George Mason University.",
  summary: `I am a Ph.D. student in Computer Science at George Mason University, where I am fortunate to be advised by [Prof. David Porfirio](https://dporfirio.github.io/) in the [Autonomous Robot Interaction (ARI) Lab](https://ari-lab-gmu.github.io/).

I have worked as a **Research Assistant** in the **Computational Engineering & Robotics Laboratory** at Carnegie Mellon University, advised by **Prof. Kenji Shimada**, and as a research assistant with **Prof. Dajiang Liu** at Chongqing University.

Previously I worked as a backend engineer at Walmart Global Tech and completed a game-AI internship at Tencent.`,
  researchInterests: `My research focuses on **embodied AI** and **robot learning**: building systems that perceive, act, and improve through interaction with the physical world. I am particularly interested in **learning-based task and motion planning**—including long-horizon skill composition, reasoning under partial observability, and integrating learned policies with structured planners for reliability.

I also care about **generalization and deployment**: transferring behaviors across embodiments and environments, grounding high-level goals in executable controllers, and closing the **sim-to-real** gap for fieldable autonomy in assistive, construction, or mobile-manipulation settings.`,
  showBlogLink: false,
  avatarUrl: "/me.jpg",
} as const;

export const newsData = [
  {
    date: "2026",
    body: "I will join **George Mason University** as a Ph.D. student in Computer Science, advised by [Prof. David Porfirio](https://dporfirio.github.io/) in the [Autonomous Robot Interaction (ARI) Lab](https://ari-lab-gmu.github.io/).",
  },
] as const;

export const publicationsData = [
  {
    image: "/CGRA_illustration.png",
    title:
      "Towards High-Quality CGRA Mapping with Graph Neural Networks and Reinforcement Learning",
    markdown: `Yan Zhuang, **Zhihao Zhang**, and Dajiang Liu. *IEEE/ACM International Conference on Computer-Aided Design (ICCAD)*, 2022. [DOI:10.1145/3508352.3549458](https://doi.org/10.1145/3508352.3549458)`,
  },
] as const;

export const skillsData = [
  {
    category: "Example",
    skills: [
      { name: "Python", icon: "logos:python" },
      { name: "C++", icon: "logos:cpp" },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blog", icon: NotebookIcon, label: "Blog" },
] as const;

export const contactData = {
  /** Shown on the site in “AT / DOT” form; `mailto` uses the real address. */
  emails: [
    { display: "zzhang34 AT gmu DOT edu", mailto: "zzhang34@gmu.edu" },
  ] as const,
  /**
   * Resend `to` for the contact form.
   * With default `onboarding@resend.dev`, Resend only delivers to your account email.
   * After verifying a domain at resend.com/domains and setting RESEND_FROM on Vercel, you can switch this back to zzhang34@gmu.edu.
   */
  formInboxEmail: "zhihaozhang321@gmail.com",
  tel: "",
  social: {
    GoogleScholar: {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=zlxwMdMAAAAJ&hl=zh-CN",
      icon: Icons.googleScholar,
      navbar: true,
    },
    GitHub: {
      name: "GitHub",
      url: "https://github.com/ZhihaoZhang01",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/zhihao-zhang-074765239/",
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "Walmart Global Tech",
    location: "Sunnyvale, CA",
    title: "Backend Software Development Engineer",
    logoUrl: "/walmart.svg",
    start: "Apr 2025",
    end: "Present",
  },
  {
    company: "Tencent Technology (Shenzhen) Co., Ltd.",
    location: "Shenzhen, China",
    title: "Technical Game AI Designer Intern",
    logoUrl: "/tencent.svg",
    start: "May 2022",
    end: "Aug 2022",
  },
] as const;

export const educationData = [
  {
    school: "George Mason University",
    degree: "Ph.D. in Computer Science",
    logoUrl: "/gmu.svg",
    start: "2026",
    end: "Present",
  },
  {
    school: "Carnegie Mellon University",
    degree: "M.S. in Computational Design and Manufacturing",
    logoUrl: "/cmu.svg",
    start: "2022",
    end: "Dec 2024",
  },
  {
    school: "University of Cincinnati",
    degree: "B.E. in Mechanical Engineering",
    logoUrl: "/uc.svg",
    start: "2018",
    end: "May 2023",
  },
  {
    school: "Chongqing University",
    degree: "B.E. in Mechanical Engineering",
    logoUrl: "/cqu.svg",
    start: "2018",
    end: "June 2023",
  },
] as const;

export type ProjectEntry = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  detailedDescription: string;
  keyFeatures: readonly string[];
  technologies: readonly { name: string; icon?: string }[];
  links: readonly { type: string; href: string; icon: string }[];
  image: string;
  images: readonly string[];
  video: string;
};

export const projectsData: readonly ProjectEntry[] = [
  {
    title: "GNN–RL CGRA mapping optimization",
    href: "https://doi.org/10.1145/3508352.3549458",
    dates: "2021 – 2022",
    active: true,
    description:
      "GNN + RL maps loop DDGs onto CGRAs (min II, legal routes). *ICCAD 2022*.",
    detailedDescription: `**Advisor:** Dajiang Liu · **AI Optimization Lab, Chongqing University** · *ICCAD 2022*

Map loop **DDGs** onto a **time-extended CGRA**: minimize **II** with **legal** routes. **Long dependences** dominate—multi-step, multi-resource paths explode the search space, and **decoupled** pre/post/partial **routing** misaligns with **placement**.

**GNN + RL** graph mapping: **routing nodes** on long edges, **resource graph** (compute + shared routing), **GNN→FC** policy, **simulator** rewards on illegal routes; **policy gradient** (+ baseline, temperature)—actor–critic not worth the cost. Strongest on **hard** instances (*e.g.* MiBench / SPEC2006 / PolyBench; up to **1.57×** vs **RAMP** in the paper).`,
    keyFeatures: [] as const,
    technologies: [
      { name: "Python", icon: "logos:python" },
      { name: "PyTorch", icon: "logos:pytorch-icon" },
      { name: "GNN", icon: "carbon:chart-network" },
      { name: "CGRA", icon: "mdi:chip" },
    ],
    links: [
      {
        type: "Paper",
        href: "https://doi.org/10.1145/3508352.3549458",
        icon: "globe",
      },
    ],
    image: "/CGRA_illustration.png",
    images: ["/CGRA_illustration.png"],
    video: "",
  },
  {
    title: "ActivityTracker — metric-aware construction safety",
    href: "https://www.cmu.edu/",
    dates: "Sep 2024 – Dec 2024",
    active: true,
    description:
      "Metric depth + BEV distances for single-camera construction safety (LiDAR cal., SAM2 regions). CMU CER.",
    detailedDescription: `**Advisor:** Kenji Shimada · **Computational Engineering & Robotics Lab, CMU**

Single RGB **safety** checks need **meters**, not just boxes. **Depth Anything** → **sparse LiDAR** calibration to **metric** depth, then **BEV** and **distance** queries; we scored **AbsRel / RMSE / δ1** and **distance error** for the downstream task.

**Global** scale/shift fails across regions → **SAM 2** masks + **per-mask LiDAR** calibration (overlap rules, boundaries, fallback) vs. global-only. **BEV** from calibrated depth is **cleaner** than global; worst cases remain **occlusion** and **overlapping** obstacles.`,
    keyFeatures: [] as const,
    technologies: [
      { name: "Python", icon: "logos:python" },
      { name: "ROS 2", icon: "logos:ros" },
      { name: "C++", icon: "logos:cpp" },
      { name: "PyTorch", icon: "logos:pytorch-icon" },
    ],
    links: [],
    image: "/CMU-Construct.gif",
    images: ["/CMU-Construct.gif"],
    video: "",
  },
];
