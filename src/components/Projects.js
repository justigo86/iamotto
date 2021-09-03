import React from 'react';
import styled from 'styled-components';
import image1 from '../photos/PennyGalleryCapture2.jpg'
import image2 from '../photos/work2.jpg';
import AOS from 'aos';
import "aos/dist/aos.css"

const ProjectContainer = styled.div `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ProjectTitle = styled.h1`
    margin: 5vh;
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
`

 const ProjectOneCardHeader = styled.div`
    background-image: url(${image1});
    background-size: cover;
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
`

const Titles = styled.p`
    font-weight: bold;
    font-size: 26px;
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
    &:hover > ${ProjectOneCardHeader} {
        filter: grayscale(0);
    }
    &:hover > ${ProjectCardFooter} {
        height: 11vh;
        width: 32vw;
        bottom: 0;
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
