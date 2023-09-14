import Link from "next/link";
import styled from "styled-components";

interface HeaderNavI {
  display?: string;
  mediaDisplay?: string;
}

export const HeaderNavTag = styled.nav`
  display: flex;
  width: 100%;
`;

export const LiTag = styled.li<HeaderNavI>`
  display: ${({ display }) => (display ? display : "flex")};
  width: fit-content;
  height: 100%;
  padding: 1rem;
  align-items: center;
  gap: 1rem;
  align-self: stretch;

  border-radius: 2rem;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (min-width: 744px) {
    display: ${({ mediaDisplay }) => (mediaDisplay ? mediaDisplay : "block")};
  }
`;

export const UlTag = styled.ul`
  width: 100%;
  display: flex;
  padding: 0rem 0.5rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  @media screen and (min-width: 744px) {
    gap: 2rem;
    justify-content: flex-end;
  }
`;

export const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
