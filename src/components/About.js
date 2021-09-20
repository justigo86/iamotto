import React from 'react';
import styled from 'styled-components';
import image1 from '../photos/DSC4721v2.jpg';
import AOS from 'aos';
import "aos/dist/aos.css"

const media = {
    mobile: '@media(max-width: 600px)',
    medium: '@media(max-width: 1000px)'
}

const AboutContainer = styled.div `
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.mobile} {
        flex-direction: column;
        height: 110vh;
    }
    /* border: 2px solid white; */
`

const AboutInfoContainer = styled.div`
    width: 35vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 3vw;
    ${media.mobile} {
        width: 70vw;
    }
`

const AboutTitle = styled.h1`
    font-size: calc(24px + (28 - 14) * ((100vw - 300px) / (1600 - 300)));
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
    filter: drop-shadow(2px 2px #000);
    font-weight: 900;
    margin: 0 0 1.5vh;
`

const AboutSubHeadings = styled(AboutTitle)`
    font-size: calc(18px + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
`

const AboutParagraph = styled.p`
    font-size: calc(12px + (22 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 600;
    margin: 0 0 4vh;
    text-align: center;
`

const AboutImageContainer = styled.div`
    position: relative;
    display: inline-block;  //border hugs included elements
`

const AboutImage1 = styled.img`
    width: 35vw;
    ${media.mobile} {
        width: 70vw;
    }
`

const PupTitles = styled.p`
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
    text-shadow: 2px 2px #000;
    filter: drop-shadow(2px 2px #000);
    /* -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
    padding: 0 6%;
    position: absolute;
    font-weight: bolder;
    font-size: calc(16px + (26 - 18) * ((100vw - 300px) / (1600 - 300)));
`;

const BanzaiTitle = styled(PupTitles)`
    text-align: right;
    left: -2%;
    top: 13%;
`;
const PennyTitle = styled(PupTitles)`
    right: -2%;
    bottom: 25%;
    & > p {
        text-align: left;
        font-size: calc(10px + (24 - 18) * ((100vw - 300px) / (1600 - 300)));
    }
`;

const About = () => {
    AOS.init()
    return (
        <AboutContainer id='about'>
            <AboutInfoContainer data-aos='fade-right'>
                <AboutTitle>About</AboutTitle>
                <AboutParagraph>After years of time spent in post-secondary administration,
                    I've decided to take a leap into web development. 
                    What started as a hobby in my evenings has become a passion 
                    and something I'm committed to pursuing professionally.</AboutParagraph>
                <AboutSubHeadings>Competencies</AboutSubHeadings>
                <AboutParagraph>HTML5 / CSS3 / JavaScript / React / JSON / Git / Bash</AboutParagraph>
                <AboutSubHeadings>Used in the Past</AboutSubHeadings>
                <AboutParagraph>SQL / Java / PHP</AboutParagraph>
            </AboutInfoContainer>
            <AboutImageContainer data-aos='fade-left'>
                <BanzaiTitle>BANZAI</BanzaiTitle>
                <AboutImage1 src={image1} alt=''/>
                <PennyTitle>PENNY <p>(sans snot)</p></PennyTitle>
            </AboutImageContainer>
        </AboutContainer>
    )
}

export default About
