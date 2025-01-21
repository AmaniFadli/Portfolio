import React from 'react'
import { Nav, NavLink, NavbarContainer,NavLinkIcons, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import {
  FaCode,
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaFolderOpen,
  FaEnvelopeOpen
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">
            <NavLinkIcons> 
              <FaHome />
            </NavLinkIcons>
            <span>About</span>
          </NavLink>
          <NavLink href='#skills'>
            <NavLinkIcons> 
            <FaCode/>
            </NavLinkIcons>
            <span>Skills</span>
          </NavLink>
          <NavLink href='#experience'>
            <NavLinkIcons> 
              <FaBriefcase/>
            </NavLinkIcons>
            <span>Experience</span>
          </NavLink>
          <NavLink href='#projects'>
            <NavLinkIcons> 
              <FaFolderOpen/>
            </NavLinkIcons>
            <span>Projects</span>
          </NavLink>
          <NavLink href='#education'>
            <NavLinkIcons> 
              <FaGraduationCap/>
            </NavLinkIcons>
            <span>Education</span>
          </NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}><FaHome/> About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}><FaCode/> Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}><FaBriefcase/>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}><FaFolderOpen/>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}><FaGraduationCap/>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
      }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar