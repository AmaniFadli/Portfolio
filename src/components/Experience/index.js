import React from 'react';
import styled from 'styled-components';
import { experiences } from '../../data/constants';
import ExperienceCard from '../Cards/ExperienceCard';

import { motion } from "framer-motion";

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px 80px 0px;
    position: relative;
    background: linear-gradient(
    to bottom, /* Dirección del degradado */
    ${({ theme }) => theme.bg} 70%, /* Comienza con negro */
     ${({ theme }) => theme.black}  100% 
    );
    @media (max-width: 960px) {
        padding: 40px 20px;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 800px;
    position: relative;
`;

const Title = styled.h2`
    font-size: 42px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Desc = styled.p`
    font-size: 18px;
    text-align: center;
    color: ${({ theme }) => theme.text_secondary};
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: relative;

    &:before {
        content: '';
        position: absolute;
        left: 30px; /* Ajusta según el diseño */
        top: 0;
        bottom: 0;
        width: 4px;
        background-color:${({ theme }) => theme.primary};
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const TimelineItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
    padding-left: 50px; /* Aumenta el espacio para la línea y el punto */
    gap: 12px;

    &:last-child {
        margin-bottom: 0;
    }
`;

const Dot = styled.div`
    position: absolute;
    left: 6px;
    top: 8px;
    width: 50px;
    height: 50px;
    background-color: #854CE6;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    background-image: ${({ img }) => `url(${img})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
const DateWrapper = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
    display: flex;
    align-items: center;
    gap: 12px; /* Espacio entre la fecha y el punto */

    position: absolute;
    left: -200px; /* Mueve la fecha a la izquierda */
    top: 8px; /* Ajusta la posición verticalmente */
    @media (max-width: 768px) {
        top: -30px;
        left: 50px;
    }
`;

const index = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>
                    <motion.div
                        whileInView={{opacity:1, y:0}}
                        initial={{opacity:0, y: -100}}
                        transition={{duration: 0.5}}
                    >
                        Experience
                    </motion.div>
                </Title>
                <Desc>My work experience.</Desc>
                <motion.div
                    whileInView={{opacity:1, y:0}}
                    initial={{opacity:0, y: 100}}
                    transition={{duration: 0.5}}
                >
                    <TimelineSection>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <DateWrapper key={index}>
                                {experience.date}
                                </DateWrapper>
                                <Dot img={experience.img} />
                                <ExperienceCard experience={experience}/>
                            </TimelineItem>
                        ))}
                    </TimelineSection>
                </motion.div>
                
            </Wrapper>
        </Container>
    );
};

export default index;
