import { colors } from 'global/roots';
import styled from 'styled-components';

export const MobMenuBtn = styled.button``;
export const MobMenuIcon = styled.svg``;
export const PageNavigation = styled.nav``;
export const NavigationList = styled.ul`
  display: flex;
  column-gap: 40px;
`;
export const NavigationItem = styled.a`
  cursor: pointer;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  font-weight: 700;
  color: ${colors.dark};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${colors.primaryBrand};
  }
`;
