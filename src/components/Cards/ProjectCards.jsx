import React from 'react'
import styled from 'styled-components'


const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    position: relative;
  width: 330px;
  height: 300px;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color:rgb(209, 25, 117);
    background-color: ${({ theme }) => theme.primary + 30};
    padding: 2px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`
const Title = styled.div`
    color: ${({ theme }) => theme.white};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Oscurece ligeramente la imagen */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; /* Inicialmente invisible */
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1; /* Se muestra al hacer hover */
  }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`
const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`

const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} alt={project.title} />
      <Overlay>
        <Title>{project.title}</Title>
      </Overlay>
    </Card>
    )
}

export default ProjectCards