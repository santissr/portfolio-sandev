import { TextM } from "./Text.model";
import { TextTag } from "./Text.styled";

export const Text = ({
  fontSize,
  color,
  textAlign,
  fontWeight,
  letterSpacing,
  text,
  children,
}: TextM) => {
  return (
    <TextTag
      fontSize={fontSize}
      color={color}
      textAlign={textAlign}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
    >
      {children}
      {text}
    </TextTag>
  );
};
