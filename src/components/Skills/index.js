import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

import { motion } from "framer-motion";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
align-items: center;
`

const Wrapper = styled.div`
margin-top: 30px;
background:  ${({ theme }) => theme.primary2} ;
box-shadow: rgba(222, 197, 226, 0.15) 0px 4px 24px;
border-radius: 30px;
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1500px;
height: 700px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
    width: 700px;
    height: 100%;
}
`

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
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
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 30px;
  gap: 30px;
  justify-content: center;
  
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.primary2};
  border: 2px solid ${({ theme }) => theme.bg};
  box-shadow: rgba(33, 25, 47, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }

`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  span {
    opacity: 0; /* El texto está oculto por defecto */
    visibility: hidden; /* El texto no es accesible */
    position: absolute;
    left: 50px; /* Ajusta la posición a la izquierda del ícono */
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    padding: 5px 8px;
    border-radius: 5px;
    font-size: 12px;
    white-space: nowrap;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    transform: translateX(-10px); /* Posición inicial */
  }

  transition: all 0.2s ease-in-out !important;
  &:hover span {
    opacity: 1; /* Muestra el texto */
    visibility: visible;
    transform: translateX(0); /* Posición final */
  }

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    } 
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`


const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>
          <motion.div
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 0.5}}
          >
            Skills
          </motion.div>
        </Title>
        <Desc>
          
          These are the skills I have been developing over these years of learning and dedication.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <motion.h1 
               whileInView={{opacity:1, x:0}}
               initial={{opacity:0, x: 100}}
               transition={{duration: 0.5}}
              
            >
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage src={item.image}/>
                    {item.name}
                    <span>{item.text}</span>
                  </SkillItem>
                ))}
              </SkillList>
            </motion.h1>
              
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills