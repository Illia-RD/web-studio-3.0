const {
  HeroWrapper,
  HeroContainer,
  HeroTitle,
  OpenFeedbackForm,
} = require('./hero.styled');

export const Hero = ({ openForm }) => {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroTitle>Effective Solutions For Your Business</HeroTitle>
        <OpenFeedbackForm onClick={openForm}>Order Service</OpenFeedbackForm>
      </HeroContainer>
    </HeroWrapper>
  );
};
