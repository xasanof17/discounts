import styled from "styled-components";

export const FooterWrapper = styled.footer `
background: var(--blue);
`;

export const FooterContent = styled.div `
padding: 40px 0;
display: flex;
justify-content: space-between;
@media (max-width: 600px){
  flex-wrap: wrap;
}
`;

export const FooterInner = styled.div `
display: flex;
align-items: flex-start;
flex-direction: column;
@media (max-width: 600px){
 &:nth-child(1){
  width: 100%;
  margin-bottom: 30px;
 }
}
@media (max-width: 500px){
 &:nth-child(2),&:nth-child(3){
  width: 50%;
  margin-bottom: 40px;
 }
 &:nth-child(4){
  width: 100%;
 }
}
@media (max-width: 500px){
 &:nth-child(2),&:nth-child(3){
  width: 100%;
  margin-bottom: 30px;
 }}
`;

export const FooterLogo = styled.div `
display: flex;
align-items: center;
justify-content: center;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: var(--white);
margin-bottom: 50px;
span{
  pointer-events: none;
}
@media (max-width: 600px){
  margin-bottom: 20px;
}

`;

export const FooterLogoImg = styled.img `
  margin-right: 15px;
  pointer-events: none;
`;

export const FooterTxt = styled.p `
 font-weight: 400;
font-size: 16px;
line-height: 150%;
color: var(--white);
max-width: 179px;
width: 100%;
@media (max-width:425px){
  max-width: 100%;
}
`;

export const FooterTitle = styled.h3 `
font-weight: 600;
font-size: 18px;
line-height: 150%;
color: var(--white);
margin-bottom: 10px;
`;

export const FooterList = styled.ul `
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
`;

export const FooterListItem = styled.li ``;

export const FooterListItemLink = styled.a `
margin: 10px 0;
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: var(--white);
display: inline-block;
`;

export const FooterBlock = styled.div `
display: flex;
align-items: flex-end;
flex-direction: column;
@media (max-width:425px){
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
`;

export const FooterBlockFr = styled.div `
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 20px;
@media (max-width:425px){
  margin-bottom: 0;
}
`;

export const FooterBlockLink = styled.a `
display: flex;
align-items: center;
justify-content: center;
margin: 0px 10px;
color: var(--white);
transition: .5s;
cursor: pointer;
&:hover{
  color: var(--footerIcon);
}
&:focus{
  color: #F7F7F7;
}
svg{
  font-size: 35px;
  pointer-events: none;
  width: 100%;
  &.down{
    font-size: 15px;
  }
}
`;

export const FooterBottom = styled.div`
padding: 10px 0;
display: flex;
align-items: center;
justify-content: space-between;
font-weight: 300;
font-size: 16px;
line-height: 150%;
color: #D3D3D3;
border-top: 1px solid var(--lightBlue);
@media (max-width: 600px){
  padding: 15px 0;
  flex-direction: column;
  row-gap: 10px;
}
@media (max-width: 375px){
font-size: 15px;
}
`;

export const FooterBottomLink = styled.a`

`;

export const FooterBottomTxt = styled.p`

`;