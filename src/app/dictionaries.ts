import 'server-only';
import { redirect } from 'next/navigation';
import { LangM } from '@/interfaces/Dictionaries.model';

const dictionaries = async (locale: string, component: string): Promise<LangM> => {
  try {
    const dictionary = await import(`../../public/locale/${component}/${locale}.json`);
    return JSON.parse(JSON.stringify(dictionary));
  } catch (error: any) {
    console.error(`Error importing locale file: ${error}`);
    throw error;
  }
};

export const getDictionary = async (
  locale: string,
  component: string,
): Promise<LangM> => {
  if (locale.startsWith('_next')) {
    redirect('/en');
  }

  return await dictionaries(locale, component);
};
