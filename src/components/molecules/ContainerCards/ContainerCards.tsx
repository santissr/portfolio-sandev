import { FigmaSvg } from '@/svgs/skills.svg/FigmaSvg';
import { NextSvg } from '@/svgs/skills.svg/NextSvg';
import { TypeScriptSvg } from '@/svgs/skills.svg/TypeScriptSvg';
import { Card } from '@/components/organisms/Card/Card';
import styles from './ContainerCards.module.css';
import { VueSvg } from '@/svgs/VueSvg';
import { LangM } from '@/interfaces/Dictionaries.model';
import { ReactElement } from 'react';
import EPMImage from '@/assets/images/EPM_PROJECT.png';
import YTAImage from '@/assets/images/YTA_PROJECT2.png';
import AVENFORImage from '@/assets/images/AVENFOR_WEB.png';

export const ContainerCards = ({ lang }: { lang: LangM }) => {


  const techComponents: Record<string, ReactElement> = {
    TypeScript: <TypeScriptSvg key="typescript" />,
    Vue: <VueSvg key="vue" />,
    Figma: <FigmaSvg key="figma" />,
    Next: <NextSvg key="next" />,
  };

  const imagesProjects: Record<string, string> = {
    YTA: YTAImage.src,
    EPM: EPMImage.src,
    AVENFOR: AVENFORImage.src,
  };


  return (
    <div className={styles.container}>
      {lang.projects.projectsCard.map(({ title, text, tech, image, viewServer }) => (
        <Card
          key={title}
          title={title}
          text={text}
          tech={tech.map((techItem) => techComponents[techItem])}
          urlImage={imagesProjects[image]}
          viewServer={viewServer}
        />
      ))}
    </div>
  );
};
