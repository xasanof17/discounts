import styled from "styled-components";

export const NavbarWrapper = styled.nav `
position: sticky;
top: 0;
left: 0;
width: 100%;
z-index: 100;
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

export const NavLogo = styled.div `
display: flex;
align-items: center;
justify-content: center;

a{
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
flex: 1;
font-weight: 600;
font-size: 16px;
line-height: 130%;
color: var(--black);
@media (max-width: 425px) {
    span{
        display: none;
    }
}
}
img{
    margin-right: 10px;
    pointer-events: none;
    width: 100%;
    @media (max-width: 425px) {
    margin-right: 0;
}
}
`;

export const NavList = styled.ul `
display: flex;
@media (max-width: 600px){
    display: none;
}
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
@media (max-width: 900px){
    display: none;
}
`;

export const NavBlockLink = styled.a `
display: flex;
align-items: center;
justify-content: center;
margin: 0px 8px;
color: var(--link);
&:hover{
    color: var(--blue);
}
&:focus{
    color: var(--lightBlue);
}
svg{
    font-size: 25px;
    pointer-events: none;
    width: 100%;
}
&:nth-child(3){
    color: var(--dark);
    cursor: pointer;
    margin: 0px 40px;
    svg{
        font-size: 17px;
        margin-left: 8px;
    }
}
`;