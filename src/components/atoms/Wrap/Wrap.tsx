import { WrapM } from "./Wrap.model";
import { WrapTag } from "./Wrap.styled";

export const Wrap = ({
  isImage,
  urlImage,
  borderRadius,
  height,
  width,
  display,
  alignItems,
  gap,
  children,
  padding,
  backGround,
  boxShadow,
  cursor,
  mediaDisplay,
  mediaFlexDirection,
  flexDirection,
  justifyContent,
  maxWidth,
  borderBottom,
  overflow,
}: WrapM) => {
  return (
    <WrapTag
      isImage={isImage}
      urlImage={urlImage}
      borderRadius={borderRadius}
      height={height}
      width={width}
      display={display}
      alignItems={alignItems}
      gap={gap}
      padding={padding}
      backGround={backGround}
      boxShadow={boxShadow}
      cursor={cursor}
      mediaDisplay={mediaDisplay}
      mediaFlexDirection={mediaFlexDirection}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      maxWidth={maxWidth}
      borderBottom={borderBottom}
      overflow={overflow}
    >
      {children}
    </WrapTag>
  );
};
