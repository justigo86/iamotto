import React from 'react';
import styled from 'styled-components';
import image1 from '../photos/DSC4721v2.jpg';
import AOS from 'aos';
import "aos/dist/aos.css"

const AboutContainer = styled.div `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const AboutInfoContainer = styled.div`
    width: 35vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 3vw;
`

const AboutTitle = styled.h1`
    margin: 5vh;
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
`

const AboutParagraph = styled.p`

`

const AboutImageContainer = styled.div`
    width: 35vw;
    margin: 5vw;
`

const AboutImage1 = styled.img`
    width: 30vw;
`

const PupTitles = styled.p`
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const PennyTitle = styled(PupTitles)`
    position: relative;
    right: 0;
    text-decoration: underline;
    color: blue;
`

const About = () => {
    AOS.init()
    return (
        <AboutContainer id='about'>
            <AboutInfoContainer data-aos='fade-right'>
                <AboutTitle>About</AboutTitle>
                <p>After years of time spent in post-secondary administration,
                    I've decided to take a leap into web development. 
                    What started as a hobby in my evenings has become a passion 
                    and something I'm committed to pursuing professionally.</p>
            </AboutInfoContainer>
            <AboutImageContainer data-aos='fade-left'>
                <PupTitles>BANZAI</PupTitles>
                <AboutImage1 src={image1} alt=''/>
                <PennyTitle>PENNY</PennyTitle>
            </AboutImageContainer>
        </AboutContainer>
    )
}

export default About
