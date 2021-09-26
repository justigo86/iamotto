import React from 'react';
import Typed from 'react-typed';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-scroll';
//use Link for smooth react-scroll
import image from '../photos/coffee1.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const intros = [
    'am committed to improving every day.',
    'hope you like it here.',
    'think dogs are the best.',
    'eat more tacos than I should.',
    'know what you did last summer.',
    'am not convinced I know how to read. I’ve just memorized a lot of words.'
]

const HeroContainer = styled.div `
    height: 110vh;
    text-align: start;
    color: white;
    text-shadow: 2px 2px #000;
    font-size: calc(16px + (30 - 14) * ((100vw - 300px) / (1600 - 300)));
    overflow: hidden;
    position: relative;
    top: -9rem;
`

const heroLoad = keyframes `
    0% {
        left: -8vw;
    }
`

const IntroContainer = styled.div `
    position: relative;
    top: 18vh;
    left: 8vw;
    transform: rotate(-25deg);
    font-weight: 900;
    animation: ${heroLoad} .7s;

    & > * {
        margin: 7px 0;
    }
    & > h1 {
        display: inline-block;
        font-size: 5rem;
        background-image: linear-gradient(45deg, #6303B1, #ff0099);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: none;
        filter: drop-shadow(2px 2px #000);
    }
`

const Descriptions = styled.p `
    margin: 0 10vw 0 0;
    & > .typed {
        font-weight: bolder;
        /* font-size: 20px; */
        background-image: linear-gradient(45deg, #6303B1, #ff0099);
    }
`

const HeroLinks = styled.div `
    & > span {
        margin: 0px 6px;
        background-image: linear-gradient(45deg, #6303B1, #ff0099);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Atags = styled.a `
        text-decoration: none;
        color: inherit;
        /* border: 2px solid white; */
    &:hover {
        background-image: linear-gradient(45deg, #6303B1, #ff0099);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: none;
        filter: drop-shadow(2px 2px #000);
    }
`

const imageLoad = keyframes `
    0% {
        /* right: -3vw; */
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Image = styled.img `
    filter: grayscale(40%) brightness(60%);
    position: absolute;

    /* max-height: 60vh;
    max-width: 60vw;
    bottom: 20vh;
    right: 12vw;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px; */

    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;

    z-index: -1;

    animation: ${imageLoad} ease 2s;
`

const HeroIconsContainer = styled.ul`
    /* display: flex; */
    align-items: right;
    position: fixed;
    right: 5px;
    bottom: 10px;
    list-style-type: none;
    z-index: 100;
`

const HeroIcons = styled.li`
    margin: 5px 10px;
    & > a {
        color: white
    }
    & > #git:hover {
        color: #6303B1;
    }
    & > #mail:hover {
        color: #AC00AC;
    }
    & > #linked:hover {
        color: #ff0099;
    }
`

// const cycleIntros = () => {
//     let key = Object.keys(intros);
//     let rand = key[Math.floor(Math.random() * key.length)];
//     return intros[rand].text;
// }

const Hero = () => {
    return (
        <HeroContainer id='home'>
            <IntroContainer>
                <h1>J. Otto</h1>
                <p>Web Developer</p>
                <Descriptions>
                    and I&nbsp;
                    <Typed
                        className='typed'
                        strings={intros}
                        typeSpeed={12}
                        backSpeed={10}
                        backDelay={2500}
                        loop
                    />
                </Descriptions>
                <HeroLinks>
                    <Link to='projects' smooth={true} duration={1000}>
                        <Atags href='#projects'>
                            Projects
                        </Atags>
                    </Link>
                    <span>/</span>
                    <Link to='about' smooth={true} duration={1000}>
                        <Atags href='#about'>
                            About
                        </Atags>
                    </Link>
                    <span>/</span>
                    <Link to='connect' smooth={true} duration={1000}>
                        <Atags href='#connect'>
                            Connect
                        </Atags>
                    </Link>
                </HeroLinks>
            </IntroContainer>
            <Image src={image} alt=''/>
            <HeroIconsContainer>
                <HeroIcons><a id='git' href='https://github.com/justigo86' target='_blank' rel='noreferrer noopener'><FaGithub /></a></HeroIcons>
                <HeroIcons><a id='mail' href='mailto: justigo86@gmail.com' target='_blank' rel='noreferrer noopener'><FaEnvelope /></a></HeroIcons>
                <HeroIcons><a id='linked' href='https://www.linkedin.com/in/justin-otto-ed-s-60b449100' target='_blank' rel='noreferrer noopener'><FaLinkedin /></a></HeroIcons>
            </HeroIconsContainer>
        </HeroContainer>
    )
}

export default Hero