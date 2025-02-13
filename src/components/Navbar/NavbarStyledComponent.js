import { Link as LinkR } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import _default from '../../themes/default';

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  80% {
    transform: translateY(5%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const Nav = styled.div`
    background-color: ${({theme}) => theme.card_light};
    height: 0.10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    z-index: 1000;
    @media (max-width: 960px) {
        trastion: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;
export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
export const NavItems = styled.ul`
  position: fixed;
  top: 0;
  right: 30px; 
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  list-style: none;
  width: 120px;
  height: 100vh;
  background-color: transparent;
  z-index: 100;  

  @media screen and (max-width: 768px) {
    display: none; 
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-block: 20px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  span {
    opacity: 0; /* El texto está oculto por defecto */
    visibility: hidden; /* El texto no es accesible */
    position: absolute;
    left: 50px; /* Ajusta la posición a la izquierda del ícono */
    background-color: ${({ theme }) => theme.primary2};
    color: ${({ theme }) => theme.text_primary};
    padding: 5px 8px;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    transform: translateX(-10px); /* Posición inicial */
  }

  &:hover span {
    opacity: 1; /* Muestra el texto */
    visibility: visible;
    transform: translateX(0); /* Posición final */
  }

  :hover {
    color: ${({ theme }) => theme.primary};
  }
`;


export const NavLinkIcons = styled.div`
  display: flex;
  justify-content: center; /* Centra el contenido horizontalmente */
  align-items: center; /* Centra el contenido verticalmente */
  width: 40px;  /* Tamaño del círculo */
  height: 40px; /* Tamaño del círculo */
  border-radius: 50%; /* Hace el contenedor circular */
  background-color: ${({ theme }) => theme.primary}; /* Color del círculo */
  transition: background-color 0.3s ease; /* Transición suave */
  margin-right: 10px; /* Espacio entre el icono y el texto */
  padding: 0; /* Asegura que no haya relleno adicional */

  svg, img {
    width: 17px; /* Tamaño del ícono dentro del círculo */
    height: 17px; /* Tamaño del ícono dentro del círculo */
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
    position:fixed;
    :hover {
    color: ${({ theme }) => theme.primary};
  }
  }
`

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: fixed;
  top: 0px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  z-index: 1000;

  animation: ${({ isOpen }) => (isOpen ? slideDown : 'none')} 0.5s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`

export const MobileMenuLink = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export  const MobileLink = styled.a`
  display: flex; /* Activa flexbox */
  align-items: center; /* Alinea verticalmente al centro */
  gap: 0.5rem;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
