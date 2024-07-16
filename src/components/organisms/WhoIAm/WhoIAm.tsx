import styles from './WhoIAm.module.css';
import santiFront from '@/assets/images/SANTIAGO_IMAGE.png';
import { GitHubSvg } from '@/components/atoms/GitHubSvg/GitHubSvg';
import { LinkedinSvg } from '@/components/atoms/LinkedinSvg/LinkedinSvg';
import Link from 'next/link';
import Image from 'next/image';

export const WhoIAm = ({ lang }: { lang: any }) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}
      >
        <Image src={santiFront.src}
               alt={'Foto de Santiago'}
               width={1098}
               height={500}
               className={styles.photo}
        />
        <div className={styles.containerLinks}>
          <Link
            href="https://github.com/santissr"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.containerSvgs}>
              <GitHubSvg />
            </div>
          </Link>
          <Link
            href="https://www.linkedin.com/in/santiago-sanchez-restrepo-8b7002290/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className={styles.containerSvgs}>
              <LinkedinSvg />
            </div>
          </Link>
        </div>
        <p className={styles.text}>
          {lang.main.firstText}
          <span style={{ color: '#27609E' }}>{lang.main.name}</span>
          {lang.main.secondText}
        </p>

      </div>
    </div>
  );
};
