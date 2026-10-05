import type { Content, Lang } from "./type";

const profileBase = {
  name: "Solène Mendes",
  email: "mendessolene@gmail.com",
  linkedin: "https://www.linkedin.com/in/solene-mendes",
  github: "https://github.com/SoleneMend",
};

const wedoo = {
  image: `${import.meta.env.BASE_URL}projects/wedoo.png`,
  architecture: [
    "HTML/CSS",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "API Express",
    "MySQL",
  ],
  tags: [
    "HTML/CSS",
    "TypeScript",
    "React",
    "Express",
    "MySQL",
    "GitHub",
    "Biome",
  ],
  code: "https://github.com/SoleneMend/Wedoo",
};

const teamUp = {
  image: `${import.meta.env.BASE_URL}projects/teamUp.png`,
  architecture: [
    "HTML/CSS",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MySQL",
  ],
  tags: [
    "HTML/CSS",
    "TypeScript",
    "React",
    "Express",
    "MySQL",
    "GitHub",
    "Biome",
  ],
  code: "https://github.com/SoleneMend/TeamUp-Front",
};

const stackItems = {
  front: "HTML5, CSS3, JavaScript, TypeScript, React",
  back: "Node.js, Express",
  data: "MySQL",
  game: "Unity, C, C#",
  tools: "Git, GitHub, VS Code, Figma",
};

export const content: Record<Lang, Content> = {
  fr: {
    ui: {
      pageTitle: "Solène Mendes, développeuse web full stack junior",
      navLabel: "Principal",
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
      downloadCv: "Télécharger mon CV",
      seeProjects: "Voir mes projets",
      contactMe: "Me contacter",
      now: "En ce moment",
      updated: "Mis à jour :",
      wants: "Ce que je cherche",
      stack: "Stack",
      workTogether: "Travaillons ensemble",
      demo: "Démo",
      code: "Code",
      architecture: "Architecture :",
      screenshot: "Capture d’écran du projet",
      cvPdf: "CV en PDF",
      switchLang: "Passer le site en anglais",
      toLight: "Passer au thème clair",
      toDark: "Passer au thème sombre",
    },
    profile: {
      ...profileBase,
      cvUrl: `${import.meta.env.BASE_URL}cv_fr.pdf`,
      title: "Développeuse web full stack junior",
      headline:
        "Je construis des applications web, de la base de données jusqu'à l'écran.",
      intro:
        "Curieuse et autonome, je travaille avec JavaScript, React, Node.js et MySQL. Je souhaite mettre mes compétences en pratique sur des projets concrets, au sein d'une équipe technique.",
      status:
        "Disponible : postes de développeuse junior, stages et projets collaboratifs",
    },
    projects: [
      {
        name: "Wedoo",
        ...wedoo,
        problem:
          "Application web collaborative développée pendant ma formation à la Wild Code School. Elle permet aux utilisateurs de s’authentifier et de gérer différentes données à travers des fonctionnalités CRUD.",
        role: "Projet réalisé en équipe de 6 personnes selon une méthode Agile. J’ai principalement travaillé sur le développement front-end et back-end de la page dédiée à la gestion du budget.",
      },
      {
        name: "Team Up",
        ...teamUp,
        problem:
          "Application web développée pendant ma formation à la Wild Code School, permettant aux utilisateurs de faire des rencontres et de créer des connexions autour de la pratique sportive.",
        role: "Projet réalisé en équipe de 6 personnes selon une méthode Agile. J’ai contribué au développement front-end et back-end de l’application.",
      },
    ],
    now: {
      updated: "2026-10",
      updatedLabel: "Octobre 2026",
      items: [
        {
          title: "Express et MySQL",
          detail:
            "J'approfondis la partie back-end et la modélisation des bases de données.",
        },
        {
          title: "React Native",
          detail: "Je découvre le développement d’applications mobiles.",
        },
        {
          title: "Unity et C++",
          detail: "Je poursuis mon exploration du développement de jeux vidéo.",
        },
      ],
    },
    about: {
      text: "J'ai obtenu le titre Développeur web et web mobile (niveau 5) à la Wild Code School en juillet 2026, après une formation chez Studi et une année en prépa Game Programming à Isart Digital. Mon service civique à la DGFIP m'a appris à accueillir et accompagner des usagers, et à communiquer avec des publics variés.",
      wants: [
        "Un poste de développeuse junior ou un stage",
        "Une équipe technique où je peux apprendre et progresser",
        "Des projets collaboratifs et concrets",
      ],
    },
    stack: [
      { id: "front", group: "Front", items: stackItems.front },
      { id: "back", group: "Back", items: stackItems.back },
      { id: "data", group: "Données", items: stackItems.data },
      { id: "game", group: "Jeu vidéo", items: stackItems.game },
      { id: "tools", group: "Outils", items: stackItems.tools },
    ],
  },
  en: {
    ui: {
      pageTitle: "Solène Mendes, junior full stack web developer",
      navLabel: "Primary",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      downloadCv: "Download my CV",
      seeProjects: "See my projects",
      contactMe: "Contact me",
      now: "Right now",
      updated: "Updated:",
      wants: "What I am looking for",
      stack: "Stack",
      workTogether: "Let's work together",
      demo: "Demo",
      code: "Code",
      architecture: "Architecture:",
      screenshot: "Screenshot of the project",
      cvPdf: "CV (PDF)",
      switchLang: "Switch the site to French",
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
    },
    profile: {
      ...profileBase,
      cvUrl: `${import.meta.env.BASE_URL}cv_en.pdf`,
      title: "Junior full stack web developer",
      headline: "I build web applications, from the database to the screen.",
      intro:
        "Curious and self-driven, I work with JavaScript, React, Node.js and MySQL. I want to put my skills into practice on real projects within a technical team.",
      status:
        "Available: junior developer roles, internships and collaborative projects",
    },
    projects: [
      {
        name: "Wedoo",
        ...wedoo,
        problem:
          "A collaborative web application developed during my training at Wild Code School. It allows users to authenticate and manage different types of data through CRUD operations.",
        role: "A 6-person team project following an Agile methodology. I mainly worked on the front-end and back-end development of the budget management page.",
      },
      {
        name: "Team Up",
        ...teamUp,
        problem:
          "A web application developed during my training at Wild Code School, designed to help users meet new people and build connections through sports.",
        role: "A 6-person team project following an Agile methodology. I contributed to both the front-end and back-end development of the application.",
      },
    ],
    now: {
      updated: "2026-10",
      updatedLabel: "October 2026",
      items: [
        {
          title: "Express and MySQL",
          detail: "I am deepening my back-end skills and database modelling.",
        },
        {
          title: "React Native",
          detail: "I am discovering mobile app development.",
        },
        {
          title: "Unity and C++",
          detail: "I am continuing to explore video game development.",
        },
      ],
    },
    about: {
      text: "I earned the Web and Mobile Web Developer certification (level 5) at Wild Code School in July 2026, after training at Studi and a year of Game Programming prep at Isart Digital. My civic service at the DGFIP (French public finance administration) taught me to welcome and support users and to communicate with different audiences.",
      wants: [
        "A junior developer role or an internship",
        "A technical team where I can learn and grow",
        "Collaborative, hands-on projects",
      ],
    },
    stack: [
      { id: "front", group: "Front", items: stackItems.front },
      { id: "back", group: "Back", items: stackItems.back },
      { id: "data", group: "Data", items: stackItems.data },
      { id: "game", group: "Game dev", items: stackItems.game },
      { id: "tools", group: "Tools", items: stackItems.tools },
    ],
  },
};
