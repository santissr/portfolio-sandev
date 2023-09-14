import styled from "styled-components";

interface TitleTagI {
  textBackground?: string;
  titleMain?: string;
  color?: string;
  width?: string;
}

export const TitleTag = styled.h1<TitleTagI>`
  width: ${({ width }) => (width ? width : "fit-content")};

  text-align: center;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  ${({ color }) => (color ? `color: ${color}` : null)};
  background: ${({ textBackground }) =>
    textBackground ? textBackground : null};
  ${({ titleMain }) =>
    titleMain === "yes"
      ? `background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;`
      : null}
`;
