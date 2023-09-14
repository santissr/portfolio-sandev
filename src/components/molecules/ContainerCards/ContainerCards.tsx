import { Wrap } from "@/components/atoms/Wrap/Wrap";
import { FigmaSvg } from "@/svgs/skills.svg/FigmaSvg";
import { NextSvg } from "@/svgs/skills.svg/NextSvg";
import { TypeScriptSvg } from "@/svgs/skills.svg/TypeScriptSvg";
import YTAImage from "@/assets/images/YTAImage.png";
import TodoAppI from "@/assets/images/TodoApp.png";
import portfolioImage from "@/assets/images/portfolioImage.png";
import { Card } from "@/components/organisms/Card/Card";
import { ReactSvg } from "@/svgs/skills.svg/ReactSvg";

const projects = [
  {
    title: "YTA-PAGE🏠",
    text: "This project was carried out for the real estate company YTA, where I was responsible for both the design and implementation of the website. (I handled only the front-end part.)",
    tech: [
      <TypeScriptSvg key="ts" />,
      <NextSvg key="next" />,
      <FigmaSvg key="figma" />,
    ],
    image: YTAImage.src,
    viewGitHub: "https://github.com/santissr/yta-page",
    viewServer: "https://yta-page.vercel.app/",
  },
  {
    title: "TO-DO-APP📝",
    text: "The Online Task Manager is a web application designed to help you maintain efficient tracking of your daily tasks and to-dos. With this application, you can manage your tasks in an organized and effective manner",
    tech: [
      <TypeScriptSvg key="ts" />,
      <ReactSvg key="react" />,
      <FigmaSvg key="figma" />,
    ],
    image: TodoAppI.src,
    viewGitHub: "https://github.com/santissr/ToDoApp",
    viewServer: "https://to-do-app-chi-seven.vercel.app/",
  },
  {
    title: "PORTFOLIO 🌐",
    text: "My Personal Portfolio Website is a showcase of my skills and work as a developer. It serves as a platform for me to display my projects, share my experience, and connect with people interested in my work. Whether you want to explore my projects or get in touch for collaboration, this website provides a comprehensive overview of my capabilities as a developer.",
    tech: [
      <TypeScriptSvg key="ts" />,
      <NextSvg key="next" />,
      <FigmaSvg key="figma" />,
    ],
    image: portfolioImage.src,
    viewGitHub: "https://github.com/santissr/portfolio-sandev",
  },
];

export const ContainerCards = () => {
  return (
    <Wrap
      maxWidth="68.9rem"
      overflow="yes"
      gap="4rem"
      padding="0 0 2rem 0"
      mediaFlexDirection="column"
    >
      {projects.map(({ title, text, tech, image, viewGitHub, viewServer }) => (
        <Card
          key={title}
          title={title}
          text={text}
          tech={tech}
          urlImage={image}
          viewGitHub={viewGitHub}
          viewServer={viewServer}
        />
      ))}
    </Wrap>
  );
};
