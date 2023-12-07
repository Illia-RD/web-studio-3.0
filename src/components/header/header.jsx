import React from 'react';
import {
  HeaderWrapper,
  HeaderContainer,
  LeftHalf,
  Logo,
  RightHalf,
} from './header.styles';
import { Navigation } from './navigation/navigation';

// ... Continue styling the rest of your components

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>
          <LeftHalf>WEB</LeftHalf>
          <RightHalf>STUDIO</RightHalf>
        </Logo>
        <Navigation />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
