import styled from "styled-components";

export const NetflixWrapper = styled.section `

`;

export const NetflixCards = styled.div `
display: flex;
/* align-items: center; */
justify-content: space-between;
margin-top: 65px;
width: 100%;
@media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
}
`;

export const Cart = styled.div `
width: 32%;
/* height: 532px; */
background: var(--white);
box-shadow: 0px 12px 28px var(--boxShadow);
border-radius: 32px;
@media (max-width: 425px) {
width: 98%;
margin-bottom: 15px;
&:last-child{
    margin-bottom: 0;
}
}
`;

export const CardTop = styled.div `
padding: 60px 0px 30px 0;
border-bottom: 1px solid #DBDBDB ;
`;

export const CardTopTxt = styled.h3 `
text-align:center;
font-weight: 700;
font-size: 32px;
line-height: 140%;
color: var(--black);
@media (max-width: 768px) {
    font-size: 25px;   
}
`;

export const CardBody = styled.div `
padding-top: 35px;
@media (max-width: 768px) {
    padding-top: 20px;   
}
`;

export const CardBodyList = styled.ul `
margin: 0 40px;
@media (max-width: 768px) {
    margin: 0 10px;
}
@media (max-width: 425px) {
    margin: 0px 20px;
}
`;

export const CardBodyListItem = styled.li `
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: var(--cardTxt);
margin: 10px 0;
display: flex;
align-items: center;
gap: 30px;
svg{
    margin-right: -20px;
    font-size: 18px;
}
@media (max-width: 768px) {
    font-size: 15px;
}
@media (max-width: 425px) {
    font-size: 17px;
}
`;

export const CardPriceDiv = styled.div `
display: flex;
align-items:center;
justify-content: center;
margin-top: 65px;
@media (max-width: 425px) {
    margin-top: 40px;
}
`;

export const CardDolor = styled.span `
font-weight: 700;
font-size: 26px;
line-height: 130%;
color: var(--black);
@media (max-width: 425px) {
    font-size: 20px;
}
`;

export const CardDolorText = styled.p `
font-weight: 700;
font-size: 50px;
line-height: 130%;
color: var(--black);
@media (max-width: 425px) {
    font-size: 40px;
}
`;

export const CardButton = styled.div `
display: flex;
justify-content: center;
margin-top: 20px;
padding-bottom: 40px;
button{
max-width: 309px;
width: 100%;
height: 54px; 
}
@media (max-width: 768px) {
    margin-bottom: 30px;
    button{
    max-width: 192px;
width: 100%;
height: 54px;} 
}
@media (max-width: 425px) {
    margin-bottom: 0;
    padding-bottom: 30px;
    button{
        max-width: 90%;
    }
}
`;

export const CardBtn = styled.button `
`;