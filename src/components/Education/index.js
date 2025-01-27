import React from 'react';
import styled from 'styled-components';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
    position: relative;

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
`;

const TimelineItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    position: relative;
    padding-left: 60px; /* Espacio para la línea y el punto */

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

const index = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>My education has been a journey of self-discovery and growth.</Desc>
                <TimelineSection>
                    {education.map((edu, index) => (
                        <TimelineItem key={index}>
                            <Dot img={edu.img} />
                            <EducationCard education={edu} />
                        </TimelineItem>
                    ))}
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default index;
