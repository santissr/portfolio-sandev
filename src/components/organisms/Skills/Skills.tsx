import { Text } from "@/components/atoms/Text/Text";
import { Wrap } from "@/components/atoms/Wrap/Wrap";
import { FigmaSvg } from "@/svgs/skills.svg/FigmaSvg";
import { GitSvg } from "@/svgs/skills.svg/GitSvg";
import { JavaScriptSvg } from "@/svgs/skills.svg/JavaScriptSvg";
import { NextSvg } from "@/svgs/skills.svg/NextSvg";
import { ReactSvg } from "@/svgs/skills.svg/ReactSvg";
import { TypeScriptSvg } from "@/svgs/skills.svg/TypeScriptSvg";

export const Skills = () => {
  return (
    <Wrap flexDirection="column" alignItems="center" gap="1rem">
      <Text text="My skills" fontWeight="700" />
      <Wrap
        maxWidth="50rem"
        padding="1rem 0.5rem"
        justifyContent="space-between"
        boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        borderRadius="1rem"
      >
        <JavaScriptSvg />
        <TypeScriptSvg />
        <ReactSvg />
        <NextSvg />
        <FigmaSvg />
        <GitSvg />
      </Wrap>
    </Wrap>
  );
};
