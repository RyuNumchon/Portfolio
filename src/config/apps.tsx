import { AppDefinition } from "../types/app";
import { ICONS } from "./icons";
import Skills from "../components/applications/Skills";
import Work from "../components/applications/Work";
import Education from "../components/applications/Education";
import About from "../components/applications/About";
import Contact from "../components/applications/Contact";
import Downloads from "../components/applications/Downloads";
import Siit from "../components/applications/Siit";
import Sjps from "../components/applications/Sjps";
import Achievements from "../components/applications/Achievements";
import TestScores from "../components/applications/TestScores";

export const appsConfig: AppDefinition[] = [
  {
    id: "win-skill",
    title: "Skills",
    icon: ICONS.skills,
    desktop: {
      id: "skill",
      label: "Skills & Proficiencies",
      order: 1,
    },
    startMenu: {
      label: "Skills",
      underlinedLetter: "S",
      order: 1,
    },
    hasMaximize: true,
    hasClose: true,
    component: Skills,
  },
  {
    id: "win-work",
    title: "Experiences",
    icon: ICONS.work,
    desktop: {
      id: "work",
      label: "Work Experiences",
      order: 2,
    },
    startMenu: {
      label: "Experiences",
      underlinedLetter: "x",
      order: 2,
    },
    hasMaximize: true,
    hasClose: true,
    component: Work,
  },
  {
    id: "win-edu",
    title: "Education",
    icon: ICONS.education,
    desktop: {
      id: "education",
      label: "Education",
      order: 3,
    },
    startMenu: {
      label: "Education",
      underlinedLetter: "E",
      order: 3,
    },
    hasMaximize: true,
    hasClose: true,
    hasOptionsBar: true,
    windowBodyClass: "whitebg",
    component: Education,
  },
  {
    id: "win-about",
    title: "About",
    icon: ICONS.about,
    desktop: {
      id: "about-me",
      label: "About Me",
      order: 4,
    },
    startMenu: {
      label: "About Me",
      underlinedLetter: "A",
      order: 4,
    },
    hasMaximize: true,
    hasClose: true,
    component: About,
  },
  {
    id: "win-contact",
    title: "Contact",
    icon: ICONS.contact,
    startMenu: {
      label: "Contact",
      underlinedLetter: "C",
      order: 5,
    },
    hasMaximize: false,
    hasClose: true,
    windowBodyClass: "folder",
    component: Contact,
  },
  {
    id: "win-download",
    title: "Download",
    icon: ICONS.downloads,
    startMenu: {
      label: "Downloads",
      underlinedLetter: "D",
      order: 6,
    },
    hasMaximize: true,
    hasClose: true,
    hasOptionsBar: true,
    windowBodyClass: "whitebg",
    component: Downloads,
  },
  {
    id: "win-siit",
    title: "Aug. 2020 - Present",
    icon: ICONS.siit8b,
    hasMaximize: true,
    hasClose: true,
    hasOptionsBar: true,
    windowBodyClass: "whitebg",
    component: Siit,
  },
  {
    id: "win-sjps",
    title: "May. 2013 - Mar. 2020",
    icon: ICONS.sjps8b,
    hasMaximize: true,
    hasClose: true,
    hasOptionsBar: true,
    windowBodyClass: "whitebg",
    component: Sjps,
  },
  {
    id: "win-award",
    title: "achievement",
    icon: ICONS.signature,
    hasMaximize: true,
    hasClose: true,
    hasOptionsBar: true,
    windowBodyClass: "whitebg",
    component: Achievements,
  },
  {
    id: "win-score",
    title: "Test Scores",
    icon: ICONS.webFileSet,
    hasMaximize: true,
    hasClose: true,
    hasOptionsBar: true,
    windowBodyClass: "whitebg",
    component: TestScores,
  },
];

export const getAppById = (id: string): AppDefinition | undefined => {
  return appsConfig.find((app) => app.id === id);
};
