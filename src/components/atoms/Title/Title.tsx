import { TitleM } from "./Title.modal";
import { TitleTag } from "./Title.styled";

export const Title = ({
  textBackground,
  titleMain,
  color,
  text,
  width,
}: TitleM) => {
  return (
    <TitleTag
      textBackground={textBackground}
      titleMain={titleMain}
      color={color}
      width={width}
    >
      {text}
    </TitleTag>
  );
};
