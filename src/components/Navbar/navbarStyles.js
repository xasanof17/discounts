import styled from "styled-components";

export const NavbarWrapper = styled.nav `
position: sticky;
top: 0;
left: 0;
width: 100%;
background: var(--white);
box-shadow: var(--boxShadow);
border-bottom: 1px solid #cccc;
`;

export const NavContent = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 0px;
`;

export const NavLogo = styled.a `
display: flex;
align-items: center;
justify-content: center;
img{
    margin-right: 10px;
    pointer-events: none;
    width: 100%;
}
`;

export const NavList = styled.ul `
display: flex;
`;

export const NavItem = styled.li `
margin: 0px 20px;
.nav-link{
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: var(--link);
}
`;

export const NavBlock = styled.div `
display: flex;
align-items: center;
`;

export const NavBlockLink = styled.a `
display: flex;
align-items: center;
justify-content: center;
margin: 0px 8px;
&:hover{
    color: var(--blue);
}
svg{
    font-size: 25px;
    pointer-events: none;
    width: 100%;
}
&:nth-child(3){
    margin: 0px 40px;
    svg{
        font-size: 17px;
        margin-left: 8px;
    }
}
`;

