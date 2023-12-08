import { colors, media } from 'global/roots';
import styled from 'styled-components';

export const HeroWrapper = styled.section`
  padding: 112px 0;
  background-color: ${colors.dark};
  @media ${media.desktop} {
    padding: 192px 0;
  }
`;
export const HeroContainer = styled.div`
  padding: 0 16px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 80px;
  width: 428px;
  @media ${media.tablet} {
    width: 768px;
    row-gap: 40px;
  }
  @media ${media.desktop} {
    width: 1160px;
    row-gap: 48px;
  }
`;
export const HeroTitle = styled.h1`
  font-weight: 600;
  text-align: center;

  font-size: 36px;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: #ffffff;
  max-width: 320px;
  @media ${media.tablet} {
    font-size: 56px;
    max-width: 500px;
  }
`;
export const OpenFeedbackForm = styled.button`
  font-size: 24px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  font-weight: 600;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 16px 32px;
  background-color: ${colors.primaryBrand};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${colors.buttonActive};
  }
`;
