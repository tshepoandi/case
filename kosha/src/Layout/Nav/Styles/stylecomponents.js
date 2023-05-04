import styled from "styled-components";


export const HeadlineText = styled.h1 `
    color: white;
`;
export const Logo = styled.div `
    display: flex;
    margin-left:1em;
`;

export const NavMenu = styled.div ``;

export const NavMenuList = styled.div `
    list-style-type: none;
    display:flex;
    flex-direction: row;
    justify-content: center;

`;

export const NavItem = styled.a `
    margin-top: 2rem;
    padding:1rem;
    color:white;
    &:hover {
        background-color: white;
        color:black;
        border-radius:10px;
    }
`;

export const SocialMediaIcons = styled.div `
    padding:0.5em;
`;

export const SocialIconList = styled.div `
    padding: 1.5em;
    display: flex;
    justify-content: center;
    align-items:center;
`;

export const HeadingDiv = styled.div `
    width:90%;
`;
export const HeadingContainer = styled.div `
    align-items:center;
`;