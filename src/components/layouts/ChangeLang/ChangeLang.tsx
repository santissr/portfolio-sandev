import styles from './ChangeLang.module.css';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';

interface ChangeLangM {
  isShowLang: boolean;
  locale: string;
}

const services = [
  { text: 'Inicio', href: '/' },
  { text: 'Proyectos', href: '/#projects' },
  { text: 'Contacto', href: '/linktree' },
];

export const ChangeLang = ({ isShowLang, locale }: ChangeLangM) => {

  const params = useParams();
  const router = useRouter();
  const path = usePathname();

  const pathsAvaibles: Record<string, string> = {
    '/es': '/en',
    '/en': '/es',
    '/es/linktree': '/en/linktree',
    '/en/linktree': '/es/linktree',
  };


  return (
    <div className={`${styles.containerPopUp} ${isShowLang ? styles.popUpIsOpen : ''} `}>
      <p className={`${styles.textQuestion} ${styles.textOpacity}`}>¿Quieres cambiar el
        idioma?</p>

      <div className={styles.containerTexts}>
        <p onClick={() => {
          router.replace(pathsAvaibles[path]);
        }} className={`${styles.langs}`}>{params.locale === 'es' ? 'EN' : 'ES'}</p>
      </div>
      <div className={`${styles.containerList} ${styles.containerListOpacity}`}>
        <ul>
          {services.map(({ text, href }) => {

            const url = `/${locale === 'es' ? 'es' : locale}${href}`;

            return (<Link locale={locale} key={text} className={styles.link} href={url}>
              <li>{text}</li>
            </Link>);
          })}
        </ul>
      </div>
    </div>
  );
};