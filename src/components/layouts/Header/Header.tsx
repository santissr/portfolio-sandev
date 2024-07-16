'use client';
import { LogoDev } from '@/components/atoms/Logo/LogoDev';
import { HeaderNav } from '@/components/layouts/Header/HeaderNav';
import styles from './Header.module.css';
import { IconMenuHamb } from '@/svgs/IconMenuHam';
import { ChangeLang } from '@/components/layouts/ChangeLang/ChangeLang';
import { useState } from 'react';

export const Header = ({ locale, lang }: { locale: 'es' | 'en', lang: any }) => {

  const [isShowLang, setIsShowLang] = useState(false);

  return (
    <header className={styles.header}>
      <LogoDev size={'160'} />
      <HeaderNav lang={lang} locale={locale} />
      <p
        onClick={() => {
          setIsShowLang(prev => !prev);
        }}
        className={styles.locale}>
        {locale.toLocaleUpperCase()}
      </p>
      <IconMenuHamb onClick={() => {
        setIsShowLang(prev => !prev);
      }} size={'25'} color={'#07E'} className={styles.hambIcon} />
      <ChangeLang locale={locale} isShowLang={isShowLang} />
    </header>
  );
};
