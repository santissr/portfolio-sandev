import { Title } from "@/components/atoms/Title/Title";
import { AboutMeTag } from "./AboutMe.styled";
import { Wrap } from "@/components/atoms/Wrap/Wrap";
import { Text } from "@/components/atoms/Text/Text";

interface AboutI {
  id?: string;
}

export const AboutMe = ({ id }: AboutI) => {
  return (
    <AboutMeTag id={id}>
      <Wrap width="fit-content" borderBottom="1px solid #000">
        <Title text="About Me" color="#007ACC" />
      </Wrap>
      <Wrap
        maxWidth="111.2rem"
        padding="1rem"
        borderRadius="1rem"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
      >
        <Text
          fontWeight="300"
          textAlign="justify"
          text='"I am an enthusiastic developer who is at the beginning of their career in the world of web development. My journey into Front-End development started with a deep fascination for how web technologies can transform the user experience. Since then, I have been immersed in exploration and continuous learning.
My goal is to become an expert in creating appealing and highly functional web interfaces. I am passionate about blending design and code to breathe life into memorable digital experiences.
My commitment is to contribute to the success of each project and to continue growing as a Front-End developer."'
        />
      </Wrap>
    </AboutMeTag>
  );
};
