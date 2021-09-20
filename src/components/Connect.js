import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";
import Raleway from '../fonts/Raleway-VariableFont_wght.ttf';
import emailjs from 'emailjs-com';

const media = {
    mobile: '@media(max-width: 800px)',
    medium: '@media(max-width: 1200px)'
}

const ConnectContainer = styled.div `
    height: 80vh;
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
    text-shadow: none;
    filter: drop-shadow(2px 2px #000);
    font-weight: 900;
`

const ConnectFormContainer = styled.div`
    /* border: 2px solid white; */
    position: relative;
    display: inline-block;
    border-radius: 30px;
    background-image: linear-gradient(45deg, #6303B1, #ff0099);
    ${media.medium} {
        width: 50vw;
    }
    ${media.mobile} {
        width: 70vw;
    }
`

const ConnectForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: calc(12px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
    font-weight: 800;
    text-shadow: 2px 2px #000;
    margin: 3vh 3vw 1vh;
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
    height: 4vh;
`

const ConnectComments = styled.textarea`
    ${formStyles}
    height: 8vh;
`

const ConnectSubmitButton = styled.button`
    padding: 4px;
    font-weight: 900;
    font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
    border-radius: 20px;
    cursor: pointer;
    margin: 4px;
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
        font-weight: 700;
        border-radius: 20px;
        cursor: pointer;
        font-size: calc(12px + (18 - 12) * ((100vw - 300px) / (1600 - 300)));
        font-family: 'Raleway';
        src: url(${Raleway});
    }
`

// const UploadFormButton = styled(ConnectSubmitButton)`
//     &::file-selector-button {
        
//     }
// `

const SubmitReponse = styled.p`
    opacity: ${props => props.opacity ? '1' : '0'};
    transform: ${props => props.transform ? 'none' : 'translateY(20%)'};
    transition: all .5s ease-in-out;
`

const Connect = () => {
    const [response, setResponse] = useState(false);
    AOS.init()

    // const uploadFileFunc = () => {
    //     const uploadButton = document.getElementById('uploadButton');

    // }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_px31op9', 'template_x7wp35u', e.target, 'user_fM4K2MOoQW2OhoHAdkNAO')
            .then((result) => {
                console.log(result.text);
                setResponse(true);
            }, (error) => {
                console.log(error.text);
            });
        
        e.target.reset();
    }

    const clearResponse = () => {
        if (response === true) {
            setResponse(false);
        }
    }

    return (
        <ConnectContainer id='connect'>
            <ConnectTitle data-aos='fade-right'>Connect</ConnectTitle>
            <ConnectFormContainer data-aos='fade-left'>
                <ConnectForm action="" method="POST" enctype="multipare/form-data" onSubmit={sendEmail} onClick={clearResponse}>
                    <ConnectFormSections>
                        <ConnectFormLabels for="name">Name:</ConnectFormLabels>
                        <ConnectFormInputs name="name" type="text" id="name" placeholder="Name" required/>
                    </ConnectFormSections>
                    <ConnectFormSections>
                        <ConnectFormLabels for="email">Email:</ConnectFormLabels>
                        <ConnectFormInputs name="email" type="email" id="email" placeholder="Email Address" required/>
                    </ConnectFormSections>
                    <ConnectFormSections>
                        <ConnectFormLabels for="comments">Comments/Message:</ConnectFormLabels>
                        <ConnectComments name="comments" type="text" id="comments" placeholder="Comments welcomed!"></ConnectComments>
                    </ConnectFormSections>
                    {/* <ConnectFormSections>
                        <ConnectFormLabels for="photo">Feel free to submit photos of your pup(s)!</ConnectFormLabels>
                        <UploadFormInput name="photo" type="file" multiple id="submittedImage"/>
                    </ConnectFormSections> */}
                        <ConnectSubmitButton type="submit" id="submit" value="Send">Submit</ConnectSubmitButton>
                        <SubmitReponse opacity={response} transform={response}>Thank you for your submission.</SubmitReponse>
                        <SubmitReponse opacity={response} transform={response}>By the way, your smile is radiant!</SubmitReponse>
                </ConnectForm>
            </ConnectFormContainer>
        </ConnectContainer>
    )
}

export default Connect
