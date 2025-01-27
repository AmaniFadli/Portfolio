import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import { Bio } from '../../data/constants';
import { FaGithub } from 'react-icons/fa';

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
        <Title>Projects</Title>
        <Desc>
          Games and more in GitHub
        </Desc>
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
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects