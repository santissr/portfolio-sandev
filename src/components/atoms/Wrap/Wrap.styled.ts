import { StaticImageData } from "next/image";
import styled from "styled-components";

interface WrapI {
  isImage?: string;
  urlImage?: string;
  borderRadius?: string;
  height?: string;
  width?: string;
  display?: string;
  alignItems?: string;
  gap?: string;
  padding?: string;
  backGround?: string;
  boxShadow?: string;
  cursor?: string;
  flexDirection?: string;
  justifyContent?: string;
  maxWidth?: string;
  borderBottom?: string;
  overflow?: string;

  mediaDisplay?: string;
  mediaFlexDirection?: string;
}

// '../../assets/images/SantiFront.jpg'

export const WrapTag = styled.div<WrapI>`
  display: ${({ display }) => (display ? display : "flex")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent}` : null};
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems}` : null)};
  ${({ gap }) => (gap ? `gap: ${gap}` : null)};
  ${({ padding }) => (padding ? `padding: ${padding}` : null)};

  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}` : null)};
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "fit-content")};

  ${({ overflow }) => (overflow === "yes" ? "overflow: auto" : null)};

  ${({ borderRadius }) =>
    borderRadius ? `border-radius: ${borderRadius}` : null};
  ${({ backGround }) => (backGround ? `background: ${backGround}` : null)};
  ${({ boxShadow }) => (boxShadow ? `box-shadow: ${boxShadow}` : null)};
  ${({ isImage, urlImage }) =>
    isImage === "yes"
      ? `background-image: url(${urlImage});
  background-size: cover;
  background-position: center;`
      : null}
  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : null)};
  ${({ borderBottom }) =>
    borderBottom ? `border-bottom: ${borderBottom}` : null};

  @media screen and (min-width: 744px) {
    ${({ mediaDisplay }) => (mediaDisplay ? `display: ${mediaDisplay}` : null)};
    ${({ mediaFlexDirection }) =>
      mediaFlexDirection ? `flex-direction: ${mediaFlexDirection}` : null};
  }
`;
