import { Title } from "@/components/atoms/Title/Title";
import { WhoIAmTag } from "./WhoIAm.styled";
import { Wrap } from "@/components/atoms/Wrap/Wrap";
import santiFront from "@/assets/images/santiFront.jpg";
import { Text } from "@/components/atoms/Text/Text";
import { GitHubSvg } from "@/components/atoms/GitHubSvg/GitHubSvg";
import { LinkedinSvg } from "@/components/atoms/LinkedinSvg/LinkedinSvg";
import Link from "next/link";

export const WhoIAm = () => {
  return (
    <WhoIAmTag>
      <Wrap
        flexDirection="column"
        alignItems="center"
        gap="3rem"
        width="28.7rem"
      >
        <Title
          text="Front-End Web Developer"
          textBackground="linear-gradient(270deg, #27609E 19.1%, #000 100%)"
          titleMain="yes"
        />
        <Wrap
          mediaDisplay="none"
          isImage="yes"
          urlImage={santiFront.src}
          width="16.8rem"
          height="16.8rem"
          borderRadius="6.4rem"
        />
        <Text letterSpacing="yes" color="#040404" fontWeight="300">
          Hello! I&apos;m{" "}
          <span style={{ color: "#27609E" }}>Santiago Sanchez Restrepo</span>, a
          passionate Front-End Web Developer from Colombia
        </Text>
        <Wrap width="fit-content" gap="1.8rem">
          <Link href="https://github.com/santissr">
            <Wrap
              cursor="pointer"
              padding="0.5rem"
              width="fit-content"
              borderRadius="2rem"
              backGround="#FFF"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            >
              <GitHubSvg />
            </Wrap>
          </Link>
          <Link href="https://www.linkedin.com/in/santiago-sanchez-restrepo-8b7002290/">
            <Wrap
              cursor="pointer"
              width="fit-content"
              padding="0.5rem"
              borderRadius="2rem"
              backGround="#FFF"
              boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
            >
              <LinkedinSvg />
            </Wrap>
          </Link>
        </Wrap>
      </Wrap>
      <Wrap
        display="none"
        mediaDisplay="block"
        isImage="yes"
        urlImage={santiFront.src}
        width="16.8rem"
        height="16.8rem"
        borderRadius="6.4rem"
      />
    </WhoIAmTag>
  );
};
