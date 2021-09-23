import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import { Link } from 'react-scroll';

const media = {
    mobile: '@media(max-width: 800px)',
    medium: '@media(max-width: 1200px)'
}

const NavbarContainer = styled.nav `
    position: sticky;
    top: 0;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 2.5rem 2rem;
    background: ${(props) => (props.clicked && props.showNav ? 'none' : 'hsla(0, 0%, 0%, .5)')};
    transition: all 0.4s ease-in-out;
    overflow: hidden;
    ${media.mobile} {
        height: 9rem;
    }
`

const menuLoad = keyframes `
    0% {
        left: -5vw;
    }
`

const Menu = styled.div `
    height: 3rem;
    width: 3rem;
    cursor: pointer;
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
    transform: ${(props) => (props.showNav ? 'none' : 'translateY(-50vh)')};
`

const Burger = styled.div `
    background: white;
    height: clamp(0.25rem, .3rem, 2rem);
    width: min(1.9rem, 6vw);
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    background: ${(props) => (props.clicked ? 'white' : 'transparent')};
    visibility: ${(props) => (props.showNav ? 'visible' : 'hidden')};
    &::before,
    &::after {
        content: '';
        position: absolute;
        background: white;
        width: clamp(0.25rem, 2.5rem, 3.5rem);
        height: clamp(0.25rem, .3rem, 2rem);
        width: min(2.5rem, 8vw);

        border-radius: 8px;
        transition: transform 0.5s ease-in-out;
    }
    &::before {
        transform: ${(props) => (props.clicked ? 'rotate(0deg)' : 'rotate(45deg) translateY(13px)')} translateY(-.8rem);
    }
    &::after {
        transform: ${(props) => (props.clicked ? 'rotate(0deg)' : 'rotate(-45deg) translateY(-13px)')} translateY(.8rem);
    }
`

const Navbar = styled.div `
    /* border: 2px solid white; */
    width: 85%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    transform: ${(props) => (props.clicked && props.showNav ? 'translateY(-50vh)' : 'none')};
    transition: transform 0.3s ease-in-out;

    ${media.mobile} {
        flex-direction: ${(props) => (props.clicked && props.showNav ? 'none' : 'column')};
        opacity: ${(props) => (props.clicked && props.showNav ? '0' : '1')};
    }
`

const Atags = styled.a `
    color: inherit;
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    font-weight: bold;
    transition: 0.3s ease-in-out all;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    & > span {
        color: #9338df;
        font-size: clamp(1rem, 2vw, 2rem);
        vertical-align: top;
    }
    &:hover {
        background-image: linear-gradient(45deg, #6303B1, #ff0099);
        background-clip: text;
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
    const [showNav, setShowNav] = useState(true);

    const handleClick = () => setExpand(!expand);

    const adjustNavOnScroll = () => {
        if(window.scrollY > 500) {
            setShowNav(false);
        } else {
            setShowNav(true);
        }
    }
    window.addEventListener('scroll', adjustNavOnScroll);

    return (
        <NavbarContainer clicked={expand} showNav={showNav}>
            <Menu onClick={() => handleClick()} showNav={showNav}>
                <Burger clicked={expand} showNav={showNav}></Burger>
            </Menu>
            <Navbar clicked={expand} showNav={showNav}>
                {links.map((link) => {
                    return (
                        <Link to={link.text} smooth={true} duration={1000} offset={-50}>
                            <Atags key={link.id}>
                                <span>0{link.id}</span>
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