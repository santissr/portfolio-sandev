import styled from "styled-components";

interface TextTagI {
  fontSize?: string;
  color?: string;
  textAlign?: string;
  fontWeight?: string;
  letterSpacing?: string;
}

export const TextTag = styled.p<TextTagI>`
  width: 100%;

  color: ${({ color }) => (color ? color : "#000")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "center")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.6rem")};
  font-style: normal;
  ${({ fontWeight }) => (fontWeight ? `font-weight: ${fontWeight}` : null)};
  line-height: normal;
  ${({ letterSpacing }) =>
    letterSpacing === "yes" ? "letter-spacing: 0.016rem;" : null};
`;
