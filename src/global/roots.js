import { css } from 'styled-components';

export const media = {
  mobile: `(max-width: 428px)`,
  tablet: `(min-width: 768px) `,
  desktop: `(min-width: 1160px)`,
};

export const retinaMedia = (pixelRatio, type) => css`
  //type can be 'mob', 'tab', or 'desk'
  @media only screen and (-webkit-min-device-pixel-ratio: ${pixelRatio}),
    only screen and (min--moz-device-pixel-ratio: ${pixelRatio}),
    only screen and (min-device-pixel-ratio: ${pixelRatio}) {
    background-image: url('path/to/retina-image@${pixelRatio}x.jpg');
  }
`;

export const colors = {
  logoPrimaryColor: '#4D5AE5',
  logoDark: '#2e2f42',
  logoLight: '#F4F4FD',
  //   navigation: '#2E2F42',
  //   active: '#4D5AE5',
  buttonActive: '#404BBF',
  //   title: '#2E2F42',
  //   subtitle: '#434455',
  //   teamLinkBgLight: '',
  //   teamLinkBgDark: '',
  primaryBrand: '#4D5AE5',
  dark: '#2E2F42',
  succsess: '#31D0AA',
  text: '#434455',
  subtlbeText: '#8E8F99',
  accent: '#E7E9FC',
  light: '#F4F4FD',
};
