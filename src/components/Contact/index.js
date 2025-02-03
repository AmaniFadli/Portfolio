import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

import { MdOutlineMail } from 'react-icons/md';
import { MdPhone } from 'react-icons/md';

import { motion } from "framer-motion";

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
  margin-top: 15px;
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`
const Container = styled.div`
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  @media (max-width: 960px) {
      flex-direction: column;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.text_secondary || '#ccc'};
  padding: 20px;
  width: 300px;
  height: 150px;
`;

const Icon = styled.div`
  font-size: 36px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.white};
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary || '#000'};
`;


const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tox7kqs', 'template_nv7k7mj', form.current, 'SybVGsYS52j2TfLbi')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }



  return (
    <div id="contact">
      <Container>
        <Title>
          <motion.div
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 0.5}}
          >
            Contact
        </motion.div>
        </Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <Wrapper>
          
        <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: 100}}
            transition={{duration: 0.5}}
          >
            <Box>
              <Icon><MdOutlineMail/></Icon>
              <Text>amani.fad12@gmail.com</Text>
            </Box>
          </motion.div>
          

          <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 0.5}}
          >
            <Box>
              <Icon><MdPhone/></Icon>
              <Text>+34 662 501 544 (Spain)<br/> +44 7425 594832 (UK)</Text>
            </Box>
        </motion.div>
          
        </Wrapper>
      </Container>
    </div>
    
  )
}

export default Contact