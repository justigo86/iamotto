import React from 'react';
import styled from 'styled-components';
import image1 from '../photos/PennyGalleryCapture2.jpg'
import image2 from '../photos/work2.jpg';
import AOS from 'aos';
import "aos/dist/aos.css"

const media = {
    mobile: '@media(max-width: 600px)',
    medium: '@media(max-width: 1000px)'
}

const ProjectContainer = styled.div `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProjectTitle = styled.h1`
    margin: 5vh;
    font-size: calc(24px + (28 - 14) * ((100vw - 300px) / (1600 - 300)));
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
`

 const ProjectOneCardHeader = styled.div`
    background-image: url(${image1});
    background-size: cover;
    background-position: center top;
    filter: grayscale(100%);
    transition: .3s ease-in-out;
    height: 100%;
    width: 100%;
    display: block;
`

const ProjectCardFooter = styled.div `
    /* border: 2px solid white; */
    height: 8vh;
    width: 24vw;
    border-radius: 8px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 15vh;
    background: linear-gradient(45deg, #6303B1, #ff0099);
    transition: .5s ease-in-out, width .8s, height .5s;
    ${media.medium} {
        width: 32vw;
    }
    ${media.mobile} {
        width: 50vw;
    }
`

const Titles = styled.p`
    font-weight: bold;
    font-size: calc(18px + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
    /* margin: 2vw; */
`

const CardContainer = styled.div`
    /* border: 2px solid white; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    height: 39vh;
    width: 30vw;
    border-radius: 30px;
    overflow: hidden;
    cursor: pointer;
    ${media.medium} {
        flex-direction: column;
        width: 50vw;
    }
    ${media.mobile} {
        flex-direction: column;
        width: 70vw;
    }
    &:hover > ${ProjectOneCardHeader} {
        filter: grayscale(0);
    }
    &:hover > ${ProjectCardFooter} {
        height: 11vh;
        width: 32vw;
        bottom: 0;
        ${media.medium} {
            width: 55vw;
        }
        ${media.mobile} {
            width: 75vw;
        }
    }
`

const Projects = () => {
    AOS.init()
    return (
        <ProjectContainer id='projects'>
            <ProjectTitle data-aos='fade-right'>Projects</ProjectTitle>
            <CardContainer data-aos='fade-left'>
                <ProjectOneCardHeader />
                <ProjectCardFooter>
                    <Titles>Image Gallery App</Titles>
                </ProjectCardFooter>
            </CardContainer>
        </ProjectContainer>
    )
}

export default Projects
