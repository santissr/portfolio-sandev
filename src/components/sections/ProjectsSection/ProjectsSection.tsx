import { ContainerCards } from '@/components/molecules/ContainerCards/ContainerCards';
import styles from './ProjectSection.module.css';
import { LangM } from '@/interfaces/Dictionaries.model';

interface ProjectsI {
  id?: string;
  lang: LangM;
}

export const ProjectsSection = ({ id, lang }: ProjectsI) => {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.containerTitle}>
        <h2 className={styles.title}>{lang.projects.title}</h2>
        <h3 className={styles.text}>{lang.projects.text}</h3>
      </div>
      <ContainerCards lang={lang} />
    </section>
  );
};
