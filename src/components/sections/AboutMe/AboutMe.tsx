import styles from './AboutMe.module.css';
import { LangM } from '@/interfaces/Dictionaries.model';

interface AboutI {
  id?: string;
  lang: LangM;
}

export const AboutMe = ({ id, lang }: AboutI) => {
  return (
    <section className={styles.section} id={id}>
      <div className={styles.containerTitle}>
        <h2 className={styles.title}>{lang.aboutMe.title}</h2>
      </div>
      <div className={styles.containerText}>
        <p
          className={styles.text}>{lang.aboutMe.text}</p>
      </div>
    </section>
  );
};
