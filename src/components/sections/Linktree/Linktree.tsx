import { LogoDev } from '@/components/atoms/Logo/LogoDev';
import styles from './Linktree.module.css';
import Link from 'next/link';

export const Linktree = ({ lang }: { lang: any }) => {

  const optionsLinktree = [
    { text: 'WhatsApp', link: 'https://api.whatsapp.com/send/?phone=573124631337' },
    { text: 'Linkedin', link: 'https://www.linkedin.com/in/santiago-sanchez-restrepo-8b7002290/' },
    { text: 'Gmail', link: 'mailto:santi.sanchez.restrepo@gmail.com' },
  ];


  return (
    <section className={styles.section}>
      <LogoDev />
      <h2 className={styles.title}>{lang.title}</h2>

      <div className={styles.containerBtns}>
        {optionsLinktree.map(({ text, link }) => (
          <Link target={'_blank'} className={styles.btn} key={text} href={link}>
            {text}
          </Link>
        ))}
      </div>
    </section>
  );
};