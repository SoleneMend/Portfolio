export type Lang = "fr" | "en";
export type Theme = "dark" | "light";

export type Ui = {
  pageTitle: string;
  navLabel: string;
  projects: string;
  about: string;
  contact: string;
  downloadCv: string;
  seeProjects: string;
  contactMe: string;
  now: string;
  updated: string;
  wants: string;
  stack: string;
  workTogether: string;
  demo: string;
  code: string;
  architecture: string;
  screenshot: string;
  cvPdf: string;
  switchLang: string;
  toLight: string;
  toDark: string;
};

export type Profile = {
  name: string;
  title: string;
  headline: string;
  intro: string;
  status: string;
  email: string;
  cvUrl: string;
  linkedin: string;
  github: string;
};

export type Project = {
  name: string;
  problem: string;
  role: string;
  architecture: string[];
  tags: string[];
  image?: string;
  demo?: string;
  code: string;
};

export type About = { text: string; wants: string[] };

export type NowContent = {
  updated: string;
  updatedLabel: string;
  items: { title: string; detail: string }[];
};

export type StackGroup = { id: string; group: string; items: string };

export type Content = {
  ui: Ui;
  profile: Profile;
  projects: Project[];
  now: NowContent;
  about: About;
  stack: StackGroup[];
};
