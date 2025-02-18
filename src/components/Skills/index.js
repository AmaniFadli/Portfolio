import React from 'react'
import { useState } from 'react'
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
  border-radius: 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1500px;
  height: 500px;
  @media (max-width: 960px) {
      width: 350px;
      height: 100%;
      flex-direction: column;
      margin-bottom: 20px;
  }
  margin-bottom: 100px;
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 50px;
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
  @media (max-width: 960px) {
      font-size: 14px;
      width: 350px;
  }
`;

const SkillsContainerLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 140px;
  margin-bottom: 30px;
  margin-right: 40px;
  gap: 20px;
  justify-content: center;
  order: 1;
  align-items: flex-end; /* Alinea los elementos al borde derecho */
  @media (max-width: 768px) {
    flex-direction: row; 
    width: 100%; 
    margin-right: 0; 
    margin-top: 20px;
  }
`;

const SkillsContainerRight = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 30px;
  gap: 30px;
  justify-content: flex-start; /* Cambiado de center a flex-start */
  order: 2;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Skill = styled.div`
  width: 100%;
  max-width: 300px;
  background:  rgb(64, 36, 45);
    background: linear-gradient(225deg,  rgb(64, 36, 45) 0%, rgba(164, 3, 151, 0.66) 100%);
    background: -moz-linear-gradient(225deg, rgb(64, 36, 45) 0%, rgba(164, 3, 151, 0.66) 100%);
    background: -webkit-linear-gradient(225deg,  rgb(64, 36, 45) 0%, rgba(164, 3, 151, 0.66) 100%);

  border: 2px solid ${({ theme }) => theme.bg};
  box-shadow: rgba(33, 25, 47, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 15px;
  display: inline-block;
  cursor: pointer;

  &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
  } 
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    align-items: center;
  }
`;

const SkillTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  justify-content: space-between;
  @media (max-width: 768px) {
    font-size: 20px;
    display: none; /* Oculta el título en modo móvil */
  }
`
const SkillTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Espacio entre el icono y el título */
  
  @media (max-width: 768px) {
    gap: 0px;
    justify-content: center;  /* Centra los elementos horizontalmente */
    align-items: center;      /* Centra los elementos verticalmente */
    height: 30px;
    flex-direction: column;
  }
`;
const SkillTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillSubtitle = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 4px; /* Espaciado entre el título y el mini texto */
  @media (max-width: 768px) {
    font-size: 20px;
    display: none; /* Oculta el título en modo móvil */
  }
`;
const SkillIcon = styled.div`
  font-size: 25px; /* Aumenta el tamaño del icono */
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  min-height: 40px;
  margin-right: 12px; /* Añade separación entre el icono y el texto */
  color: ${({ theme }) => theme.bg};

  @media (max-width: 768px) {
    font-size: 20px;  /* Asegura que el icono sea lo suficientemente grande */
    margin-right: 0;
    margin-bottom: 20px; 
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: 10px; 
  justify-content: flex-start;/* Espacio reservado para el primer elemento fijo */
`

const SkillItem = styled.div`
  width: 500px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + 80};
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;

  position: ${({ isFirst }) => (isFirst ? 'absolute' : 'relative')}; /* El primer elemento será absoluto */
  top: ${({ isFirst }) => (isFirst ? '0' : 'auto')}; /* Se fija en la parte superior */

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
    left: 70px; /* Ajusta la posición a la izquierda del ícono */
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
  width: 27px;
  height: 27px;
`
const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: ${({ theme }) => theme.primary2};
  
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const Progress = styled.div`
  height: 100%;
  width: ${({ progress }) => progress}%;
  background: ${({ theme }) => theme.text_primary};
  transition: width 0.5s ease-in-out;
`;

const DefaultMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;


const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState("");

  const handleToggle = (skillTitle) => {
    setSelectedSkill(skillTitle);
  };

  return (
    <Container id="skills">
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
      <Wrapper>
        
        <SkillsContainerLeft id="Left">
          {skills.map((skill) => (
            <Skill 
              key={skill.title} 
              onClick={() => handleToggle(skill.title)} 
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <SkillTitleContainer>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillTitleWrapper>
                    <SkillTitle>{skill.title}</SkillTitle>
                    <SkillSubtitle>{skill.subtitle}</SkillSubtitle>
                  </SkillTitleWrapper>
                </SkillTitleContainer>
              </motion.div>
            </Skill>
          ))}
        </SkillsContainerLeft>
        <SkillsContainerRight id="Right">
          {selectedSkill ? (
            skills
              .filter((skill) => skill.title === selectedSkill)
              .map((skill) => (
                <SkillList key={skill.title}>
                  {skill.skills.map((item) => (
                    <SkillItem key={item.name}>
                      {item.name}
                      <span>{item.text}</span>
                      <ProgressBar>
                        <Progress progress={item.progress} />
                      </ProgressBar>
                    </SkillItem>
                  ))}
                </SkillList>
              ))
          ) : (
            <DefaultMessage>
                Junior Skills!
            </DefaultMessage>
          )}
        </SkillsContainerRight>
      </Wrapper>
    </Container>
  )
}

export default Skills