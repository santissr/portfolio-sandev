"use client";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Header } from "@/components/layouts/Header/Header";
import "@/styles/global.styles.css";
import { Main } from "@/components/sections/Main/Main";
import { AboutMe } from "@/components/sections/AboutMe/AboutMe";
import { ProjectsSection } from "@/components/sections/ProjectsSection/ProjectsSection";
import { ContactMe } from "@/components/sections/ContactMe/ContactMe";

export default function Home() {
  return (
    <>
      <Header />
      <Main id="/" />
      <AboutMe id="about-me" />
      <ProjectsSection id="projects" />
      <ContactMe id="contact" />
    </>
  );
}
