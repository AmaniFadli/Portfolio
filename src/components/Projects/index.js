import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { Bio } from '../../data/constants';
import { FaGithub } from 'react-icons/fa';

import { motion } from "framer-motion";

const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  const handleToggle = (value) => {
    if (value === 'github') {
      // Abrir GitHub en una nueva pestaña
      window.open(Bio.github, '_blank');
    } else {
      setToggle(value);
    }
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>
          <motion.div
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0, y: -100}}
                transition={{duration: 0.5}}
            >
                Project
            </motion.div>
        </Title>
        <Desc>
          Games and more in GitHub
        </Desc>
        <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 0.5}}
          >
            <ToggleButtonGroup >
              {toggle === 'all' ?
              <ToggleButton active value="all" onClick={() => handleToggle('all')}>All</ToggleButton>
              :
              <ToggleButton value="all" onClick={() => handleToggle('all')}>All</ToggleButton>
              }
              <Divider />
              {toggle === 'games' ?
                <ToggleButton active value="games" onClick={() => handleToggle('games')}>GAMES</ToggleButton>
                :
                <ToggleButton value="games" onClick={() => handleToggle('games')}>GAMES</ToggleButton>
              }
              <Divider />
              {toggle === 'prototype' ?
                <ToggleButton active value="prototype" onClick={() => handleToggle('prototype')}>PROTOTYPE</ToggleButton>
                :
                <ToggleButton value="prototype" onClick={() => handleToggle('prototype')}>PROTOTYPE</ToggleButton>
              }
              <Divider />
              <ToggleButton onClick={() => handleToggle('github')}>
                <FaGithub size={17} />
              </ToggleButton>
            </ToggleButtonGroup>
          </motion.div>
        <CardContainer>
            {toggle === 'all' && projects
              .map((project) => (
                <motion.div
                  whileInView={{opacity:1, y:0}}
                  initial={{opacity:0, y: -100}}
                  transition={{duration: 0.5}}
                >
                  <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                </motion.div>
                
              ))}
            {projects
              .filter((item) => item.category == toggle)
              .map((project) => (
                <motion.div
                  whileInView={{opacity:1, y:0}}
                  initial={{opacity:0, y: -100}}
                  transition={{duration: 0.5}}
                >
                  <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                </motion.div>
              ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects