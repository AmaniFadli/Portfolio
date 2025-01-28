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
    width: 850px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
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
    margin-left: 95px;
    display: flex;
    flex-direction: column; 
    width: 100%;
    max-width: 36rem; /* 576px */
    @media (min-width: 1024px) {
        width: 75%;
    }
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
    margin-bottom: 0.5rem;
    font-size: 0.875rem; /* 14px */
    line-height: 1.25rem; /* 20px */
    color: ${({ theme }) => theme.text_secondary || '#9ca3af'}; /* Fallback a neutral gray */
    @media only screen and (max-width: 768px) {
        font-size: 0.75rem; /* 12px para pantallas pequeñas */
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
  background-color:rgb(17, 22, 28); /* bg-neutral-900 */
  padding: 0.25rem 0.5rem; /* px-2 py-1 */
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color:rgb(237, 160, 200); /* text-pink-300 */
`



const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            
            <Top>
                <Date>
                    <motion.div 
                        whileInView={{opacity:1, x:0}}
                        initial={{opacity:0, x: -100}}
                        transition={{duration: 0.5}}
                    >
                        {experience.date}
                    </motion.div>
                    
                </Date>
                
                <Body>
                    <motion.div 
                       whileInView={{opacity:1, x:0}}
                       initial={{opacity:0, x: 100}}
                       transition={{duration: 0.5}}
                    >
                        <Role>{experience.role}</Role>
                        <Company>{experience.company}</Company>

                        <Description>
                            {experience?.desc &&
                                <Span>{experience?.desc}</Span>

                            }
                            {experience?.skills &&
                                <>
                                    <br />
                                    <Skills>
                                        <ItemWrapper>
                                            {experience?.skills?.map((skill, index) => (
                                                <Skill>• {skill}</Skill>
                                            ))}
                                        </ItemWrapper>
                                    </Skills>
                                </>
                            }
                        </Description>
                    </motion.div>
                    
                    {experience.doc &&
                        <a href={experience.doc} target="new">
                            <Document src={experience.doc} />
                        </a>
                    }  
                </Body>
            </Top>
           
        </Card>
    )
}

export default ExperienceCard