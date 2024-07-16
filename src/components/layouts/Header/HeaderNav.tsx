import styles from './HeaderNav.module.css';
import Link from 'next/link';


export const HeaderNav = ({ locale, lang }: { locale: 'es' | 'en'; lang: any }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        {lang.header.navBar.map(({ text, url }: { text: string, url: string }) => {

          const href = `/${locale === 'es' ? 'es' : locale}${url}`;

          return (
            <li className={styles.li} key={text}>
              <Link locale={locale} className={styles.link} href={href}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
