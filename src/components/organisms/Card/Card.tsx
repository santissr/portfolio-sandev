import { GitHubSvg } from '@/components/atoms/GitHubSvg/GitHubSvg';
import Link from 'next/link';
import { ViewServer } from '@/components/atoms/ViewServer/ViewServer';
import { CardM } from './Card.model';
import styles from './Card.module.css';
import Image from 'next/image';

export const Card = ({
                       title,
                       text,
                       tech,
                       urlImage,
                       viewGitHub,
                       viewServer,
                     }: CardM) => {
  return (
    <article className={styles.containerCard}>
      <div className={styles.containerTexts}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <div className={styles.containerTechsUsed}>
          <p className={styles.textTechUsed}>Tech Used</p>
          <div className={styles.containerSvgs}>{tech}</div>
        </div>
      </div>
      <div className={styles.containerImageAndLinks}>
        <Image alt={'Imagen del proyecto'}
               src={urlImage ?? ''}
               width={300}
               height={138}
        />
        <div className={styles.containerLinks}>
          {viewGitHub && <Link href={viewGitHub} rel="noopener noreferrer" target="_blank">
            <div className={styles.containerView}>
              <GitHubSvg />
            </div>
          </Link>}
          {viewServer ? (
            <Link href={viewServer} rel="noopener noreferrer" target="_blank">
              <div className={styles.containerView}>
                <ViewServer />
              </div>
            </Link>
          ) : null}
        </div>

      </div>
    </article>
  );
};
