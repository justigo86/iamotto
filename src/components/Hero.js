import React from 'react';
import Typed from 'react-typed';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-scroll';
import image from '../photos/coffee1.jpg';
//use Link for smooth react-scroll

const intros = [
    'am committed to learn every day',
    'hope you like it here',
    'think dogs are the best',
    'eat more tacos than I should',
    'know what you did last summer',
    'am not convinced I know how to read. I’ve just memorized a lot of words'
]

const HeroContainer = styled.div `
    /* display: flex;
    justify-content: center;
    align-items: center; */
    flex-direction: column;
    height: 100vh;
    text-align: start;
    color: white;
    font-size: calc(16px + (30 - 14) * ((100vw - 300px) / (1600 - 300)));
    overflow: hidden;
    position: relative;
    top: -4rem;
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
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const imageLoad = keyframes `
    0% {
        right: -3vw;
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Image = styled.img `
    filter: grayscale(100%) brightness(60%);
    position: absolute;
    max-height: 60vh;
    max-width: 60vw;
    bottom: 20vh;
    right: 12vw;
    z-index: -1;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 5px;

    animation: ${imageLoad} ease 2s;
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
                <p>Front End Developer</p>
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
        </HeroContainer>
    )
}

export default Hero