import { colors, media } from 'global/roots';
import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  color: black;
`;
export const FormContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.light};
  padding: 24px 16px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  z-index: 1000;
  @media ${media.tablet} {
    padding: 24px;
    max-width: 500px;
  }
  @media ${media.desktop} {
    max-width: 600px;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${colors.textPrimary};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  /* @media ${media.tablet} {
    row-gap: 20px;
  }
  @media ${media.desktop} {
    gap: 25px;
  } */
`;
export const Label = styled.label`
  font-weight: bold;
  margin-bottom: -4px;
  color: ${colors.textPrimary};
`;
export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-size: 1rem;
  color: ${colors.textPrimary};
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;
export const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
  font-size: 1rem;
  color: ${colors.textPrimary};
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;
export const SubmitButton = styled.button`
  margin-top: 16px;
`;
