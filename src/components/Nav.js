import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav `
    position: sticky;
    top: 0;
    /* border: 2px solid white; */
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-image: linear-gradient(45deg, #6303B1, #ff0099); */
    /* display: none; */
    /* padding: 0 1rem; */
`
const Navbar = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    

    & > a {
        color: inherit;
        font-size: clamp(0.25rem, 3vw, 1.5rem);
        font-weight: bold;
        /* color: ; */
        transition: 0.3s ease-in-out all;
        text-transform: uppercase;
        text-decoration: none;
    }
    & > a:hover {
        background-image: linear-gradient(45deg, #6303B1, #ff0099);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const links = [
    {
        id: 1,
        text: 'home',
        url: '#home'
    },
    {
        id: 2,
        text: 'projects',
        url: '#projects'
    },
    {
        id: 3,
        text: 'about',
        url: '#about'
    },
    {
        id: 4,
        text: 'connect',
        url: '#connect'
    },
]

const handleClick = (e) => {
    e.preventDefault()
    const ref = e.target.getAttribute('href')
    const location = document.querySelector(ref).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 64,
    })
}

const Nav = () => {
    return (
        <NavbarContainer>
            <Navbar>
                {links.map((link) => {
                    return (
                        <a href={link.url} key={link.id} onClick={handleClick}>
                            {link.text}
                        </a>
                    )
                })}
            </Navbar>
        </NavbarContainer>
    )
}

export default Nav