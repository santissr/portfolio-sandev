import { HeaderNavTag, LiTag, StyledLink, UlTag } from "./HeaderNav.styled";
import { HomeSvg } from "@/components/atoms/HomeSvg/HomeSvg";
import { ContactSvg } from "@/components/atoms/ContactSvg/ContactSvg";

const navBar = [
  {
    text: "HOME",
    url: "/",
  },
  {
    text: "ABOUT",
    url: "#about",
  },
  {
    text: "PROJECTS",
    url: "#projects",
  },
  {
    text: "CONTACT",
    url: "#contact",
  },
];

export const HeaderNav = () => {
  return (
    <HeaderNavTag>
      <UlTag>
        <LiTag mediaDisplay="none">
          <StyledLink href="/">
            <HomeSvg />
          </StyledLink>
        </LiTag>
        {navBar.map(({ text, url }) => (
          <LiTag
            key={text}
            display={text === "HOME" || text === "CONTACT" ? "none" : "flex"}
          >
            <StyledLink href={url}>{text}</StyledLink>
          </LiTag>
        ))}
        <LiTag mediaDisplay="none">
          <StyledLink href="#contact">
            <ContactSvg />
          </StyledLink>
        </LiTag>
      </UlTag>
    </HeaderNavTag>
  );
};
