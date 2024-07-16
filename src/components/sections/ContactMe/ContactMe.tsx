import styles from './ContactMe.module.css';
import Link from 'next/link';
import { HandUp } from '@/svgs/HandUp';
import { LangM } from '@/interfaces/Dictionaries.model';

interface ContactI {
  id?: string;
  locale?: string;
  lang: LangM;
}

export const ContactMe = ({ id, locale, lang }: ContactI) => {
  return (
    <section className={styles.container} id={id}>
      <div className={styles.daddyContainer}
      >
        <div className={styles.containerTitle}>
          <h2 className={styles.title}>{lang.contact.title}</h2>
        </div>
        <p className={styles.text}>{lang.contact.text}</p>
      </div>
      <HandUp className={styles.hand} />
      <Link className={styles.btnContact} href={`${locale}/linktree`}>
        {lang.contact.textButton}
      </Link>
    </section>
  );
};
