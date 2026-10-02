import type { Content, Lang } from "./type";

const profileBase = {
  name: "Solène Mendes",
  email: "mendessolene@gmail.com",
  cvUrl: "/cv.pdf",
  linkedin: "https://www.linkedin.com/in/solene-mendes",
  github: "https://github.com/SoleneMend",
};

const wedoo = {
  // Image : place le fichier dans public/projects/ (sinon un visuel par défaut s'affiche)
  image: "/projects/wedoo.png",
  architecture: ["React", "API Express", "MySQL", "Docker"],
  tags: ["React", "Express", "MySQL", "Docker", "GitHub Actions", "Biome"],
  code: "https://github.com/SoleneMend/Wedoo",
};

const quaiAntique = {
  image: "/projects/quai-antique.png",
  architecture: ["HTML/CSS", "PHP", "MySQL"],
  tags: ["PHP", "MySQL", "HTML/CSS", "Admin"],
  code: "https://github.com/SoleneMend/ECF-Studi-QuaiAntique",
};

const stackItems = {
  front: "HTML5, CSS3, JavaScript, React",
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
          "Application web collaborative avec authentification des utilisateurs et opérations CRUD, développée pendant ma formation à la Wild Code School.",
        role: "Projet d’équipe de 6 personnes. Ma part : [précise ta contribution : fonctionnalités, API, interface…]",
      },
      {
        name: "Quai Antique",
        ...quaiAntique,
        problem:
          "Site web pour un restaurant savoyard à Chambéry : galerie photo, comptes utilisateurs et espace d’administration avec gestion des rôles.",
        role: "Projet d’évaluation de ma formation Studi, rendu en juillet 2023.",
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
          "Collaborative web application with user authentication and CRUD operations, built during my training at Wild Code School.",
        role: "Team project with 6 people. My part: [describe your contribution: features, API, interface…]",
      },
      {
        name: "Quai Antique",
        ...quaiAntique,
        problem:
          "Website for a Savoyard restaurant in Chambéry: photo gallery, user accounts and an admin area with role management.",
        role: "Assessment project from my Studi training, delivered in July 2023.",
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
