import styled from "styled-components";

export const HeaderTag = styled.header`
  display: flex;
  width: 100%;
  height: 13rem;
  padding: 1rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;

  gap: 1rem;

  border-radius: 1rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 744px) {
    display: flex;
    flex-direction: row;
    height: 13rem;
    padding: 1rem 2rem;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
  }
`;
