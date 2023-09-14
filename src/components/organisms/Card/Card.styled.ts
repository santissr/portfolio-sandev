import styled from "styled-components";

interface CardTagI {
  media?: string;
  flexDirection?: string;
  width?: string;
}

export const CardTag = styled.div<CardTagI>`
  display: flex;
  width: 31.1rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  ${({ media = "744px", width, flexDirection }) =>
    media
      ? `@media screen and (min-width: ${media}) {
        flex-direction: ${flexDirection};
        width: ${width};
  }`
      : null}
`;
