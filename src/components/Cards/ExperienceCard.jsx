import React from 'react'
import styled from 'styled-components'

import { motion } from "framer-motion";

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    text-align: justify;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
    margin-top:20px;
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    
`

const Card = styled.div`
    width: 700px;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    /* Eliminamos fondo, bordes y sombras */
    background: none;
    border: none;
    box-shadow: none;

    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px); /* Sólo el movimiento en hover se mantiene */
    }
    @media only screen and (max-width: 768px) {
        width: calc(100% - 40px);
    }

    &:hover ${Document}{
        display: flex;
    }

    &:hover ${Span}{
        overflow: visible;
        -webkit-line-clamp: unset;

    }

`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
     margin-right: 0.5rem; /* mr-2 */
  margin-top: 1rem; /* mt-4 */
  border-radius: 0.25rem; /* rounded */
  background-color:${({ theme }) => theme.primary2};
  padding: 0.25rem 0.5rem; /* px-2 py-1 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color:rgb(237, 160, 200); /* text-pink-300 */
`



const  EducationCard = ({ experience }) => {
    return (
        <Card>
        <Top>
            {/* Date se coloca aquí al lado izquierdo */}
            <Date>{experience.date}</Date>

            <Body>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>

                    <Description>
                        {experience?.desc && <Span>{experience?.desc}</Span>}
                        {experience?.skills && (
                            <>
                                <br />
                                <Skills>
                                    <ItemWrapper>
                                        {experience?.skills?.map((skill, index) => (
                                            <Skill key={index}>• {skill}</Skill>
                                        ))}
                                    </ItemWrapper>
                                </Skills>
                            </>
                        )}
                    </Description>
                </motion.div>

                {experience.doc && (
                    <a href={experience.doc} target="new">
                        <Document src={experience.doc} />
                    </a>
                )}
            </Body>
        </Top>
    </Card>
    )
}
const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.primary};
    margin: 3px;
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
            >
                <Top>
                    <Body>
                        <Role>{experience.role}</Role>
                        <Line x1="0" y1="0" x2="100%" y2="0" style={{ stroke: 'black', strokeWidth: 2 }} />
                        <Company>{experience.company}</Company>
                        
                    </Body>
                </Top>
                <Description>
                    {experience?.desc && <Span>{experience?.desc}</Span>}
                    {experience?.skills && (
                        <>
                            <br />
                            <Skills>
                                <ItemWrapper>
                                    {experience?.skills?.map((skill, index) => (
                                        <Skill key={index}>• {skill}</Skill>
                                    ))}
                                </ItemWrapper>
                            </Skills>
                        </>
                    )}
                </Description>
            </motion.div>
        </Card>
    )
}

export default ExperienceCard