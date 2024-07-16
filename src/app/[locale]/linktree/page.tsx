import { Linktree } from '@/components/sections/Linktree/Linktree';
import { getDictionary } from '@/app/dictionaries';

export interface LangLinktree {
  title: string;
}

export default async function Page({ params: { locale } }: { params: { locale: string } }) {


  const lang = await getDictionary(locale, 'linktree');

  return <Linktree lang={lang} />;
}