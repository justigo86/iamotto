import React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';

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
    font-size: calc(14px + (28 - 14) * ((100vw - 300px) / (1600 - 300)));
    overflow: hidden;
    `
const IntroContainer = styled.div `
    /* border: 2px solid white; */
    position: relative;
    top: 8vh;
    left: 8vw;
    transform: rotate(-25deg);
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
        font-weight: bolder;
    }
    & > a {
        text-decoration: none;
        color: inherit;
        font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    }
    & > a:hover {
        background-image: linear-gradient(45deg, #6303B1, #ff0099);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
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
                <p>Front End Developer</p>
                <Descriptions>
                    and I&nbsp;
                    <Typed
                        className='typed'
                        strings={intros}
                        typeSpeed={20}
                        backSpeed={10}
                        backDelay={2000}
                        loop
                    />
                </Descriptions>
                <HeroLinks>
                    <a href='#'>Projects</a>
                    <span>/</span>
                    <a href='#'>About</a>
                    <span>/</span>
                    <a href='#'>Connect</a>
                </HeroLinks>
            </IntroContainer>
        </HeroContainer>
    )
}

export default Hero