import { colors, media } from 'global/roots';
import styled from 'styled-components';

export const ContactList = styled.ul`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  @media ${media.desktop} {
    flex-direction: row;
    column-gap: 40px;
  }
`;
export const ContactItem = styled.a`
  font-size: 12px;
  line-height: 1.3;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: ${colors.text};
  @media ${media.desktop} {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.02em;
  }
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${colors.primaryBrand};
  }
`;
