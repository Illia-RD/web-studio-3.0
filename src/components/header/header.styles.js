import { colors, media } from 'global/roots';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 24px 0;
  @media ${media.tablet} {
    padding-bottom: 10px;
  }
  @media ${media.desktop} {
    padding-bottom: 24px;
  }
`;
export const HeaderContainer = styled.div`
  margin: 0 auto;

  padding: 0 16px;
  display: flex;
  max-width: 428px;
  @media ${media.tablet} {
    max-width: 768px;
  }
  @media ${media.desktop} {
    max-width: 1160px;
  }
`;
export const Logo = styled.a`
  cursor: pointer;
  font-size: 18px;
  letter-spacing: 0.03;
  margin-right: auto;
  font-family: 'Raleway';
  font-weight: 800;
  line-height: 1.3;
  @media ${media.tablet} {
    margin-right: 121px;
  }
  @media ${media.desktop} {
    margin-right: 77px;
  }
`;

export const LeftHalf = styled.span`
  color: ${colors.logoPrimaryColor};
`;

export const RightHalf = styled.span`
  color: ${colors.logoDark};
`;
