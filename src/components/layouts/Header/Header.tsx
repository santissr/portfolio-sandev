import { LogoDev } from "@/components/atoms/Logo/LogoDev";
import { HeaderTag } from "./Header.styled";
import { HeaderNav } from "@/components/layouts/Header/HeaderNav";

export const Header = () => {
  return (
    <HeaderTag>
      <LogoDev />
      <HeaderNav />
    </HeaderTag>
  );
};
