import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layouts/Header/Header';
import { getDictionary } from '@/app/dictionaries';
import '@/styles/global.styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio SantoDev',
  description: 'This is a portfolio for frontend developer',
};

export default async function RootLayout({
                                           children,
                                           params: { locale },
                                         }: {
  children: React.ReactNode;
  params: { locale: 'es' | 'en' }
}) {

  const lang = await getDictionary(locale, 'home');

  return (
    <html lang="en">
    <body className={inter.className}>
    <Header lang={lang} locale={locale} />
    {children}
    </body>
    </html>
  );
}
