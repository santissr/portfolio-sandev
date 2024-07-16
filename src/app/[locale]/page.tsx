import { Inter } from 'next/font/google';
import '@/styles/global.styles.css';
import { Main } from '@/components/sections/Main/Main';
import { AboutMe } from '@/components/sections/AboutMe/AboutMe';
import { ProjectsSection } from '@/components/sections/ProjectsSection/ProjectsSection';
import { ContactMe } from '@/components/sections/ContactMe/ContactMe';
import { getDictionary } from '@/app/dictionaries';

const inter = Inter({ subsets: ['latin'] });

export default async function Home({ params: { locale } }: { params: { locale: 'es' | 'en' } }) {

  const lang = await getDictionary(locale, 'home');

  return (
    <>
      <Main lang={lang} id="/" />
      <AboutMe lang={lang} id="about-me" />
      <ProjectsSection lang={lang} id="projects" />
      <ContactMe lang={lang} locale={locale} id="contact" />
    </>
  );
}
