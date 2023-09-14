import { WhoIAm } from "@/components/organisms/WhoIAm/WhoIAm";
import { MainTag } from "./Main.styled";
import { Skills } from "@/components/organisms/Skills/Skills";

interface MainI {
  id?: string;
}

export const Main = ({ id }: MainI) => {
  return (
    <MainTag id={id}>
      <WhoIAm />
      <Skills />
    </MainTag>
  );
};
