import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-scroll';

const NavbarContainer = styled.nav `
    position: sticky;
    top: 0;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    /* background-image: linear-gradient(45deg, #6303B1, #ff0099); */
    /* display: none; */
    /* margin: 1rem; */
    padding: 2.5rem 2rem;
`

const menuLoad = keyframes `
    0% {
        left: -5vw;
    }
`

const Menu = styled.div `
    /* border: 2px solid white; */
    height: 3rem;
    width: 3rem;
    cursor: pointer;
    /* background: white; */
    border-radius: 50%;
    margin: 1rem;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.3 ease-in-out;

    animation: ${menuLoad} .5s;
`

const Burger = styled.div `
    background: white;
    width: 1.9rem;
    height: .3rem;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    background: ${(props) => (props.clicked ? 'white' : 'transparent')};
    &::before,
    &::after {
        content: '';
        position: absolute;
        background: white;
        width: 2.5rem;
        height: .3rem;
        border-radius: 8px;
        transition: all 0.5s ease-in-out;
    }
    &::before {
        /* transform: translateY(-.8rem); */
        transform: ${(props) => (props.clicked ? 'rotate(0deg)' : 'rotate(45deg) translateY(13px)')} translateY(-.8rem);
    }
    &::after {
        transform: ${(props) => (props.clicked ? 'rotate(0deg)' : 'rotate(-45deg) translateY(-13px)')} translateY(.8rem);
    }
`

const Navbar = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    transform: ${(props) => (props.clicked ? 'translateX(-200vw)' : 'none')};
    transition: all 0.5s ease-in-out;
`

const Atags = styled.a `
    color: inherit;
    font-size: clamp(0.25rem, 3vw, 1.5rem);
    font-weight: bold;
    /* color: ; */
    transition: 0.3s ease-in-out all;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        background-image: linear-gradient(45deg, #6303B1, #ff0099);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const links = [
    {
        id: 1,
        text: 'home'
    },
    {
        id: 2,
        text: 'projects'
    },
    {
        id: 3,
        text: 'about'
    },
    {
        id: 4,
        text: 'connect'
    },
]

const Nav = () => {
    const [expand, setExpand] = useState(true);
    const handleClick = () => setExpand(!expand);

    return (
        <NavbarContainer>
            <Menu onClick={() => handleClick()}>
                <Burger clicked={expand} ></Burger>
            </Menu>
            <Navbar clicked={expand}>
                {links.map((link) => {
                    return (
                        <Link to={link.text} smooth={true} duration={1000}>
                            <Atags key={link.id}>
                                {link.text}
                            </Atags>
                        </Link>
                    )
                })}
            </Navbar>
        </NavbarContainer>
    )
}

export default Nav