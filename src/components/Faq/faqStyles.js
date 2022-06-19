import styled from "styled-components";

export const FaqSec = styled.div `
margin-top: 120px;
@media (max-width: 768px) {
    margin-top: 100px;
}
`;

export const FaqTitle = styled.h2 `
font-weight: 700;
font-size: 32px;
line-height: 130%;
text-align: center;
text-transform: uppercase;
color: var(--black);
margin-bottom: 40px;
@media (max-width: 768px) {
    margin-bottom: 30px;
}
`;

export const FaqContent = styled.div ``;

export const FaqAccordion = styled.div `
width: 100%;
padding: 30px 40px;
background: var(--white);
box-shadow: 0px 12px 28px var(--boxShadow);
border-radius: 32px;
margin-bottom: 15px;
&:last-child{
    margin-bottom: 0;
}
@media (max-width: 500px){
padding: 20px;
}
`;

export const FaqTop = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
`;

export const FaqAccTitle = styled.h3 `
font-weight: 600;
font-size: 18px;
line-height: 150%;
color: var(--black);
@media (max-width: 768px){
    font-weight: 500;
    font-size: 17px;
}
@media (max-width: 500px){
max-width: 226px;
width: 100%;
}
`;

export const FaqBtn = styled.button `
width: 40px;
height: 40px;
background: rgba(23, 23, 23, 0.05);
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
color: var(--dark);
font-size: 28px;
transition: .5s;
cursor: pointer;
&.active{
    svg{
        transform: rotate(180deg);
    }
}
svg{
    pointer-events: none;
    width: 100%;
}
`;

export const FaqBottom = styled.div `
padding-top: 12px;
display: none;
transform: translateY(-110%);
z-index: -1;
&.active{
transform: translateY(0%); display: block;   
}
`;

export const FaqBottomTxt = styled.p `
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: var(--link);
`;

export const FaqButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 40px;

`;