import { WhoIAm } from "@/components/organisms/WhoIAm/WhoIAm";
import { MainTag } from "./Main.styled";
import { Skills } from "@/components/organisms/Skills/Skills";

export const Main = () => {
  return (
    <MainTag>
      <WhoIAm />
      <Skills />
    </MainTag>
  );
};
