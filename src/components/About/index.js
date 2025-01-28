import React from 'react'
import {AboutContainer, Title, TextLoop, Span,Wrapper,SocialMediaIcons,SocialMediaIcon} from "./AboutStyle"
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaItchIo } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: {x:-100, opacity: 0},
  visible:{
      x: 0,
      opacity: 1,
      transition: {duration: 0.5, delay: delay}
  }
})

const About = () => {
  return (
    <AboutContainer>
      <Wrapper>
        <Title>
          <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
          > 
            {Bio.name}
          </motion.h1>
        </Title>
        <TextLoop>
            -
            <Span>
                <Typewriter
                    options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                    }}
                />
            </Span>
            -
        </TextLoop>
        <SocialMediaIcons>
          <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 0.5}}
            
          >
            <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
            <SocialMediaIcon href={Bio.itchio} target="display"><FaItchIo /></SocialMediaIcon>
            <SocialMediaIcon href={Bio.github} target="display"><FaGithub /></SocialMediaIcon>
              
          </motion.h1>
          
        </SocialMediaIcons>
      </Wrapper>
      
    </AboutContainer>
  )
}

export default About;