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

export const NavLogoWrapper = styled.div ``;

export const NavLogo = styled.div `
display: flex;
align-items: center;
justify-content: center;
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

`;
export const NavLogoImg = styled.img `
    margin-right: 10px;
    @media (max-width: 425px) {
    margin-right: 0;}
`;

export const NavList = styled.ul `
display: flex;
@media (max-width: 991px){
    display: none;
}
`;

export const NavItem = styled.li `
margin: 0px 20px;
&:nth-child(1){
    position: relative;
    margin-right: 30px;
}
`;

export const Navlink = styled.a `
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: var(--link);
position: relative;
transition: .5s;
cursor: pointer;
&:nth-child(1){
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
        margin-left: 10px;
        pointer-events: none;
    }
}
`;

export const DropDownBlock = styled.div `
position: absolute;
bottom: 0;
left: -15%;
width: 210px;
background: var(--white);
box-shadow: 0px 20px 48px var(--boxShadow);
border-radius: 16px;
transform: translateY(-175px);
transition: .5s;
&.active{
transform: translateY(175px);    
display: block;
}
`;

export const DropDownList = styled.ul `
padding: 15px 0 15px 20px;
`;

export const DropDownItem = styled.li `
margin: 10px 0;`;

export const DropDownLink = styled.a `
width: 100%;
display: block;
font-weight: 400;
font-size: 17px;
line-height: 150%;
letter-spacing: 0.01em;
color: var(--black);
&:hover{
    color: var();
}
`;

export const NavBlock = styled.div `
display: flex;
align-items: center;
@media (max-width: 991px){
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
font-size: 25px;
svg{
    pointer-events: none;
    width: 100%;
}

`;

export const NavSelect = styled.select `
    color: var(--dark);
    cursor: pointer;
    margin: 0px 40px;
    position: relative;
    font-size: 17px;
    svg{
        margin-left: 8px;
    }
    @media (max-width: 1024px){
        display: none;
    }
`;

export const LangBox = styled.div `
position: absolute;
bottom: 0;
left: 0px;
width: 115px;
background: var(--white);
box-shadow: 0px 20px 48px var(--boxShadow);
border-radius: 16px;
z-index: -1;
transform: translateY(50px);
`;

export const SmallScreen = styled.div `
display: none;
/* padding: 0px 25px; */
.menu-btn{
    color: #070033;
    font-size: 32px;
    cursor: pointer;
    svg{
        pointer-events: none;
    }
    
    &.close{
        color: var(--blue);
        font-size: 35px;
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 17px;
    svg{
        pointer-events: none;
    }
    }
}
@media (max-width: 991px) {
    display: flex;
}

`;

export const SmallList = styled.ul `
user-select: none;
width: 80%;
background: #FFFFFF;
box-shadow: 0px 12px 28px rgba(177, 177, 177, 0.2);
border-radius: 12px;
padding: 30px;
&:nth-of-type(2){
    margin-top: 40px;
}
`;

export const SmallItem = styled.a `
display: flex;
align-items: center;
padding: 12px 12px 12px 22px;
height: 60px;
transition: .5s ease;
background: transparent;
&.active{
background: #F7F7F7;
border-radius: 8px;}

svg{
    width: 30px;
    height: 30px;
    color: #9C99AD;
    transition: .5s;
}
&:hover{
    background: #F7F7F7;
border-radius: 8px;
svg{
    color: var(--blue);
}
}
`;

export const SmallLink = styled.span `
font-weight: 400;
font-size: 20px;
line-height: 150%;
color: var(--black);

display: block;
flex: 1;
padding-left: 15px;

`;

export const SmallScreenOverlay = styled.div `
position: fixed;
top: 0;
right: 0;
width: 50%;
height: 100vh;
background: var(--body);
backdrop-filter: blur(50px);
transition: .5s ease;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
z-index: 5;
@media (max-width: 990px) {
    width: 100%;
}
@media only screen and (max-width: 400px) {
    padding-top: 25px;
}
@media (max-width: 399px) {
    padding-top: 0;
}
`;

export const SmallBtns = styled.div `
display: flex;
flex-direction: column;
margin-top: 60px;
width: 80%;
row-gap: 20px;
`;

export const SmallBtn = styled.button `
margin-bottom: 10px;

font-weight: 700;
font-size: 15px;
line-height: 130%;
letter-spacing: 0.01em;
color: var(--blue);
&:nth-of-type(1){
    background:transparent;
    
}
`;