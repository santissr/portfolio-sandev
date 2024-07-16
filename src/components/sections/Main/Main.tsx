import { WhoIAm } from '@/components/organisms/WhoIAm/WhoIAm';
import { Skills } from '@/components/organisms/Skills/Skills';
import styles from './Main.module.css';

interface MainI {
  id?: string;
  lang: any;
}

export const Main = ({ id, lang }: MainI) => {
  return (
    <main className={styles.main} id={id}>
      <WhoIAm lang={lang} />
      <Skills />
    </main>
  );
};
