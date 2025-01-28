import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaItchIo } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <div id="about">
            <br/>
            <Title>
                <motion.div
                    whileInView={{opacity:1, y:0}}
                    initial={{opacity:0, y: -100}}
                    transition={{duration: 0.5}}
                >
                    About Me
                </motion.div>
        </Title>
            <HeroContainer>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <motion.div 
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x: -100}}
                            transition={{duration: 0.5}}
                        >
                            <Img src={HeroImg} alt="hero-image" />
                        </motion.div>
                    
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <motion.div
                            whileInView={{opacity:1, x:0}}
                            initial={{opacity:0, x: 100}}
                            transition={{duration: 0.5}}
                        >
                            <SubTitle>
                            <p>I am a graduate in <b>Multimedia Applications and Video Game Development</b> (DAM-VI), with experience in <u>Web Programming</u>, <u>Databases</u>, <u>Mobile Apps</u>, and <u>Game Development</u>. I am seeking a Junior Programmer position to apply my skills and contribute to enhancing the digital experience. I am committed to continuous learning and adapting to the work environment.</p>
                            <br/>
                            <p>During my years of study, I developed a new artificial intelligence that earned me the <b>DonaTIC 2024</b> award, and I showcased my video game at the <i>Saga-Salón Gaming 2023</i> event in Barcelona, where I was also interviewed.</p>

                            <p>Additionally, I actively participate in itch.io and GitHub jams, working on video game projects as well as programming language development competitions.</p>
                            <br/>
                            <p>I aspire to develop a shooter, though I am also interested in other areas of the industry, as I am passionate about solving coding problems and creating new websites.</p>
                        </SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume <FiDownload/></ResumeButton>
                        </motion.div>
                        
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection