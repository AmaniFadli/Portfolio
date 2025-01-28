import styled from 'styled-components';
import _default from '../../themes/default';

export const AboutContainer = styled.div`
  background: linear-gradient(
    to bottom, /* Dirección del degradado */
    ${({ theme }) => theme.black} 50%, /* Comienza con negro */
    rgb(17, 11, 34) 100% 
  );
  display: flex;
  justify-content: center;
  position: relative;
  width: 99,9vw;
  height: 100vh;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) { /* Corregí el selector de 640px */
    padding: 32px 16px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;
export const SocialMediaIcons = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin-right:  1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  @media (max-width: 960px) {
      flex-direction: column;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;