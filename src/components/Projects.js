import React from 'react';
import styled, {css} from 'styled-components';
import image1 from '../photos/PennyGalleryCapture2.jpg';
import image2 from '../photos/SmartBrainCapture.JPEG';
import image3 from '../photos/RoboFriendsCap.JPEG';
import AOS from 'aos';
import "aos/dist/aos.css"

const flex = css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const media = {
    mobile: '@media(max-width: 800px)',
    medium: '@media(max-width: 1200px)'
}

const ProjectContainer = styled.div `
    min-height: 80vh;
    overflow: hidden;
    ${flex};
`

const ProjectTitle = styled.h1`
    margin: 5vh;
    font-size: calc(24px + (28 - 14) * ((100vw - 300px) / (1600 - 300)));
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
        filter: drop-shadow(2px 2px #000);
    font-weight: 900;
`

 const ProjectOneCardHeader = styled.div`
    /* background-image: url(${image1}); */
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center top;
    filter: grayscale(100%);
    transition: .3s ease-in-out;
    height: 100%;
    width: 100%;
    display: block;
    ${flex};
`

const ProjectDetails = styled.div`
    width: 90%;
    background: hsla(0, 0%, 0%, .5);
    border-radius: 20px;
    transform: scale(0);
    transition: .5s ease-in-out;
    & > p {
        text-align: center;
        margin: 4% 0;
        font-weight: 600;
        font-size: calc(12px + (20 - 14) * ((100vw - 300px) / (1600 - 300)));
    }
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
    flex-direction: column;
    bottom: 15vh;
    background: linear-gradient(45deg, #6303B1, #ff0099);
    transition: .5s ease-in-out, width .8s, height .5s;
    ${media.medium} {
        width: 32vw;
    }
    ${media.mobile} {
        width: 60vw;
    }
`

const Titles = styled.p`
    font-weight: bold;
    font-size: calc(18px + (24 - 14) * ((100vw - 300px) / (1600 - 300)));
    text-shadow: none;
    filter: drop-shadow(2px 2px #000);
    transition: all .5s ease-in-out;
    text-align: center;
    /* margin: 2vw; */
`

const LinkContainer = styled.div`
    transform: scale(0);
    transition: all .5s ease-in-out;
    height: 0;
`

const Links = styled.a`
    margin: 0 2vw;
    padding: 1.5px 3px;
    text-decoration: none;
    font-weight: 600;
    color: white;
    border: 2px solid white;
    border-radius: 8px;
    &:hover {
        background-color: hsla(0, 0%, 0%, .5);
    }
`

const CardContainer = styled.div`
    display: flex;
    ${media.medium} {
        flex-direction: column;
    }
`

const Card = styled.div`
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
    margin: 1vh 1vw;
    ${media.medium} {
        flex-direction: column;
        width: 50vw;
    }
    ${media.mobile} {
        flex-direction: column;
        width: 80vw;
    }
    &:hover > ${ProjectOneCardHeader} {
        filter: grayscale(0);
    }
    &:hover > ${ProjectCardFooter} {
        height: 8vh;
        width: 32vw;
        bottom: 0;
        justify-content: space-around;
        /* align-items: start; */
        ${media.medium} {
            width: 55vw;
        }
        ${media.mobile} {
            width: 85vw;
        }
        & > div {
            transform: scale(1);
            height: auto;
        }
    }
    &:hover > * > ${ProjectDetails} {
        transform: scale(1);
    }
`

const Projects = () => {
    AOS.init()
    return (
        <ProjectContainer id='projects'>
            <ProjectTitle data-aos='fade-right'>Projects</ProjectTitle>
            <CardContainer>
                <Card data-aos='fade-left'>
                    <ProjectOneCardHeader url={image2}>
                        <ProjectDetails>
                            <p>PERN stack React App with AI face-detection. 
                                Users sign into an account and track image uploads.</p>
                            <p>Project created with completion of Zero to Mastery Web Development course.</p>
                            <p>Front End: Create-React-App (HTML5, CSS3, JSX)</p>
                            <p>Back End: Node.js, Express.js, PostgreSQL</p>
                        </ProjectDetails>
                    </ProjectOneCardHeader>
                    <ProjectCardFooter>
                        <Titles>Face Detection App</Titles>
                        <LinkContainer>
                            <Links href="http://smart-brain-jotto.herokuapp.com/" target="_blank">DEMO</Links>
                            <Links href="https://github.com/justigo86/SmartBrain" target="_blank">GITHUB</Links>
                        </LinkContainer>
                    </ProjectCardFooter>
                </Card>
                <Card data-aos='fade-left'>
                    <ProjectOneCardHeader url={image1}>
                        <ProjectDetails>
                            <p>In development React App for viewing, adding, and deleting images in a gallery.</p>
                            <p>A learning project that grew to memorialize a beloved pup.</p>
                            <p>Front End: Create-React-App (HTML5, CSS3, JSX)</p>
                            <p>Back End: Firebase Firestore</p>
                        </ProjectDetails>
                    </ProjectOneCardHeader>
                    <ProjectCardFooter>
                        <Titles>Image Gallery App</Titles>
                        <LinkContainer>
                            <Links href="https://justigo86.github.io/gallery4pen/" target="_blank">DEMO</Links>
                            <Links href="https://github.com/justigo86/gallery4pen" target="_blank">GITHUB</Links>
                        </LinkContainer>
                    </ProjectCardFooter>
                </Card>
                <Card data-aos='fade-left'>
                    <ProjectOneCardHeader url={image3}>
                        <ProjectDetails>
                            <p>React App used to dynamically search hash database.</p>
                            <p>Project created as part of Zero to Mastery Web Development course.</p>
                            <p>Front End: Create-React-App (HTML5, CSS3, JSX)</p>
                        </ProjectDetails>
                    </ProjectOneCardHeader>
                    <ProjectCardFooter>
                        <Titles>Dynamic Search Bar App</Titles>
                        <LinkContainer>
                            <Links href="https://justigo86.github.io/robofriends/" target="_blank">DEMO</Links>
                            <Links href="https://github.com/justigo86/robofriends" target="_blank">GITHUB</Links>
                        </LinkContainer>
                    </ProjectCardFooter>
                </Card>
            </CardContainer>
        </ProjectContainer>
    )
}

export default Projects
