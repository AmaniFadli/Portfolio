import styled from 'styled-components';
import _default from '../../themes/default';

export const Container = styled.div`

     background: linear-gradient(
    to bottom, /* Dirección del degradado */
    ${({ theme }) => theme.black} 20%, /* Comienza con negro */
     ${({ theme }) => theme.bg}  100% 
  );
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;

`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;


export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 100px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

export const ToggleButton = styled.div`
    display: flex; /* Habilita Flexbox */
    align-items: center; /* Alinea verticalmente al centro */
    justify-content: center; /* Alinea horizontalmente al centro */
    gap: 8px; /* Espacio entre el texto y el icono */
    padding: 10px 20px; /* Espaciado interno del botón */
    border: none; /* Sin borde */
    border-radius: 8px; /* Bordes redondeados */
    color: ${({ active, theme }) => (active ? theme.white : theme.text_primary)};
    font-size: 16px; /* Tamaño de fuente */
    cursor: pointer;
    transition: all 0.3s ease;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary2};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;
