import { useEffect, useState } from 'react';
import {
  MobMenuBtn,
  MobMenuIcon,
  NavigationItem,
  NavigationList,
  PageNavigation,
} from './navigation.styled';

export const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {windowWidth < 768 ? (
        <MobMenuBtn>
          <MobMenuIcon width={40} height={40}>
            <use href="/src/img/icons.svg#icon-menu-btn"></use>
          </MobMenuIcon>
        </MobMenuBtn>
      ) : (
        <PageNavigation>
          <NavigationList>
            <li>
              <NavigationItem>Studio</NavigationItem>
            </li>
            <li>
              <NavigationItem>Portfolio</NavigationItem>
            </li>
            <li>
              <NavigationItem>Contacts</NavigationItem>
            </li>
          </NavigationList>
        </PageNavigation>
      )}
    </>
  );
};
