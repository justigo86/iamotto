import React from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import "aos/dist/aos.css"

const ConnectContainer = styled.div `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ConnectTitle = styled.h1`
    margin: 5vh;
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
`

const ConnectFormContainer = styled.div`
    border: 2px solid white;
`

const ConnectForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Connect = () => {
    AOS.init()
    return (
        <ConnectContainer id='connect'>
            <ConnectTitle>Connect</ConnectTitle>
            <ConnectFormContainer>
                <ConnectForm>
                    <input type="text" id="name" placeholder="Name"/>
                    <input type="email" id="email" placeholder="Email Address"/>
                    <input type="text" id="comments" placeholder="Comments welcomed!"/>
                    <input type="file" id="submittedImage"/>
                    <input type="submit" id="fname"/>
                </ConnectForm>
            </ConnectFormContainer>
        </ConnectContainer>
    )
}

export default Connect
