import React from 'react';
import styled, {css} from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";

const ConnectContainer = styled.div `
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const ConnectTitle = styled.h1`
    font-size: calc(24px + (28 - 14) * ((100vw - 300px) / (1600 - 300)));
    margin: 3vh;
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
`

const ConnectFormContainer = styled.div`
    /* border: 2px solid white; */
    position: relative;
    display: inline-block;
    border-radius: 30px;
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
`

const ConnectForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: calc(12px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: bold;
    margin: 3vh 3vw;
`

const ConnectFormSections = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const formStyles = css `
    width: 100%;
    text-align: left;
    margin: 0 0 1vh;
    padding: 2px;
    border-radius: 5px;
    &:focus {
        background-color: hsl(210, 31%, 80%)
    }
`

const ConnectFormLabels = styled.div`
    ${formStyles}
`

const ConnectFormInputs = styled.input`
    ${formStyles}
    
`

const ConnectComments = styled.textarea`
    ${formStyles}
`

const ConnectSubmitButton = styled.button`
    padding: 4px;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
        background-color: hsl(210, 31%, 80%);
    }
`

const UploadFormInput = styled.input`
    /* height: 0;
    width: 0;
    opacity: 0; */
    &::file-selector-button {
        padding: 4px;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
    }
`

const UploadFormButton = styled(ConnectSubmitButton)`
    &::file-selector-button {
        
    }
`

const Connect = () => {
    AOS.init()

    const uploadFileFunc = () => {
        const uploadButton = document.getElementById('uploadButton');

    }

    return (
        <ConnectContainer id='connect'>
            <ConnectTitle data-aos='fade-right'>Connect</ConnectTitle>
            <ConnectFormContainer data-aos='fade-left'>
                <ConnectForm >
                    <ConnectFormSections>
                        <ConnectFormLabels>Name:</ConnectFormLabels>
                        <ConnectFormInputs type="text" id="name" placeholder="Name" required/>
                    </ConnectFormSections>
                    <ConnectFormSections>
                        <ConnectFormLabels>Email:</ConnectFormLabels>
                        <ConnectFormInputs type="email" id="email" placeholder="Email Address" required/>
                    </ConnectFormSections>
                    <ConnectFormSections>
                        <ConnectFormLabels>Comments/Message:</ConnectFormLabels>
                        <ConnectComments type="text" id="comments" placeholder="Comments welcomed!"></ConnectComments>
                    </ConnectFormSections>
                    <ConnectFormSections>
                        <ConnectFormLabels>Feel free to submit photo(s) of your pup(s)!</ConnectFormLabels>
                        <UploadFormInput type="file" multiple id="submittedImage"/>
                    </ConnectFormSections>
                        <ConnectSubmitButton type="submit" id="fname">Submit</ConnectSubmitButton>
                </ConnectForm>
            </ConnectFormContainer>
        </ConnectContainer>
    )
}

export default Connect
