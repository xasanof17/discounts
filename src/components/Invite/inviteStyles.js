import styled from "styled-components";

export const InviteWrapper = styled.div `
margin-top: 15px;
width: 100%;
min-height: 200px;
padding: 40px 80px;
background: var(--blue);
box-shadow: 0px 4px 24px var(--boxShadow);
border-radius: 32px;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 1024px) {
    padding: 40px 40px;
}

@media (max-width: 768px) {
    padding: 30px;
}

@media (max-width: 600px) {
flex-direction: column;
}

@media (max-width: 425px) {
padding: 30px 20px 20px 20px;
}

@media (max-width: 375px) {
padding: 20px;
}
`;

export const InviteLeft = styled.div `
@media (max-width: 1024px) {
    margin-right: 20px;
}
@media (max-width: 600px) {
margin-right: 0;
margin-bottom: 30px;
}
`;

export const InviteRight = styled.div `
width: 445px;
height: 123px;
@media (max-width: 600px) {
    width: 100%;
    height: 100%;
}
`;

export const InviteBox = styled.div `
background: #F1F4F8;
border-radius: 16px;
width: 100%;
height: 100%;
padding: 30px 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
.bottom{
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (max-width: 768px) {
width: 336px;
height: 100px;
}
@media (max-width: 600px) {
    width: 100%;
}
@media (max-width: 425px) {
    height: 100%;
}
@media (max-width: 375px) {
padding: 20px;
}
`;

export const InviteBoxText = styled.p `
font-weight: 400;
font-size: 20px;
line-height: 140%;
color: var(--black);
margin-bottom: 10px;
`;

export const InviteBoxlink = styled.a `
font-weight: 600;
font-size: 20px;
text-transform: uppercase;
color: var(--blue);
display: flex;
align-items: flex-end;
justify-content: center;
position: relative;
cursor: pointer;
&::before{
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--blue);
}
@media (max-width: 375px) {
font-size: 16px;
}
`;

export const InviteBoxBtn = styled.button `
width: 20px;
height: 23px; 
display: flex;
align-items: center;
justify-content: center;
margin-left: 10px;
font-size: 27px;
&:hover{
cursor: pointer; 
color: var(--blue);
}
svg{
pointer-events: none;
width: 100%;
}
`;

export const InviteTitle = styled.h2 `
font-weight: 500;
font-size: 26px;
line-height: 140%;
color: var(--white);
margin-bottom: 25px;
`;

export const InviteTxt = styled.p `
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: var(--white);
max-width: 508px;
width: 100%;
`;