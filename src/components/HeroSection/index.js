import React from 'react'
import { HeroContainer, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, Title, SubTitle, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpeg'
import { Bio } from '../../data/constants';
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
                            <p>I am a student at the <b>University of Bedfordshir</b> studying Computer Games Development.I graduated in <b>Multimedia Applications and Video Game Development</b>(DAM-VI), with experience in Web Programming, Databases, Mobile Apps, and Game Development. I am seeking a junior programmer position to apply my skills and enhance the digital experience. I am committed to learning and adapting to the work environment.</p>
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