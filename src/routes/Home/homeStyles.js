import styled from "styled-components";

export const HomeWrapper = styled.section `

`;

export const HomeContent = styled.div `
display: flex;
justify-content: space-between;
margin-bottom: 120px;
@media (max-width: 500px){
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
}
`;

export const HomeLeft = styled.div `
max-width: 640px;
min-height: 500px;
background: var(--blue);
box-shadow: 0px 4px 24px var(--boxShadow);
border-radius: 32px;
padding: 0px 60px;
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
margin-right: 30px;
flex: 1;
@media (max-width: 1440px) {
    margin-right: 15px;
}
@media (max-width: 1024px) {
    max-width: 500px;
min-height: 500px;
padding: 0px 40px;
}
@media (max-width: 768px) {
max-width: 345px;
min-height: 290px;
padding: 20px 25px;
margin-right: 0;
}
@media (max-width: 500px) {
    max-width: 100%;
}
@media (max-width: 425px) {
    min-height: 344px;
}
@media (max-width: 375px) {
    max-width: 327px;
    min-height: 344px;
}
`;

export const HomeTitle = styled.h1 `
font-weight: 700;
font-size: 36px;
line-height: 140%;
color: var(--white);
margin-bottom: 25px;
@media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
}
`;

export const HomeTxt = styled.p `
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: var(--white);
margin-bottom: 40px;
@media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 32px;
}
`;

export const HomeRight = styled.div `
flex: 1;
max-width: 640px;
min-height: 500px;
background: var(--white);
box-shadow: 0px 12px 28px var(--boxShadow);
border-radius: 32px;
padding: 0px 60px;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 1024px) {
max-width: 500px;
min-height: 500px;
padding: 0px 40px;
}
@media (max-width: 768px) {
max-width: 345px;
min-height: 290px;
padding: 20px 25px;
}
@media (max-width: 500px) {
    margin-bottom: 15px;
    max-width: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    img{
      width: calc(100% - 60px);
      height:100%;
    }
}
@media (max-width: 425px) {
    margin-bottom: 15px;
    max-width: 100%;
    img{
      width: 300px;
      height:100%;
    }
}
@media (max-width: 375px) {
    max-width: 330px;
    min-height: 280px;
    img{
      width: 100%;
      height:100%;
    }
}
`;

export const HomeImg = styled.img `
width: 100%;
height: 100%;
pointer-events: none;
`;

export const HomeCards = styled.div `
@media (max-width: 500px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
`;

export const HomeCardsTitle = styled.h2 `
text-align: center;
margin-bottom: 40px;
font-weight: 700;
font-size: 32px;
line-height: 140%;
color: var(--black);
@media (max-width: 375px) {
    font-size: 27px;
}
@media (max-width: 320px) {
    font-size: 24px;
}
`;

export const HomeCard = styled.div `
width: 100%;
background: var(--white);
box-shadow: 0px 4px 24px var(--boxShadow);
border-radius: 32px;
display: flex;
justify-content: space-between;
height: 340px;
margin-bottom: 30px;
@media (max-width: 1440px) {
    margin-bottom: 20px;
}
@media (max-width: 1024px) {
    height: 290px;
}
@media (max-width: 768px) {
    height: 200px;
}
@media (max-width: 500px) {
    flex-direction: column-reverse;
    height: 500px;
}
@media (max-width: 500px) {
    max-width: 480px;
    width: 100%;
}
@media (max-width: 320px) {
    width: 100%;
    height: 560px;
}
`;

export const HomeCardLeft = styled.div `
flex: 1;
padding: 50px;
@media (max-width: 768px) {
    padding: 50px 30px;
}
@media (max-width: 500px) {
padding: 30px 20px;
}
@media (max-width:375px) {
    button{
        width: 100%;
    }
}
`;

export const HomeCardTitle = styled.h3 `
font-weight: 600;
font-size: 26px;
line-height: 140%;
color: var(--black);
margin-bottom: 22px;
@media (max-width: 375px) {
text-align: start;
}
@media (max-width: 768px) {
    font-weight: 500;
font-size: 22px;
line-height: 140%;
}
@media (max-width: 320px) {
text-align: start;
font-size: 17px;
}

`;

export const HomeCardTxt = styled.p `
font-weight: 400;
font-size: 16px;
line-height: 150%;
color: var(--link);
margin-bottom: 90px;
@media (max-width: 1024px) {
    margin-bottom: 40px;
}
@media (max-width: 768px) {
    display: none;
}
@media (max-width: 500px) {
    display: block;
}
@media (max-width: 425px) {
margin-bottom: 30px;
}
@media (max-width: 375px) {
width: 287px;
}
@media (max-width: 320px) {
width: 100%;
}
`;

export const HomeCardRight = styled.div `
flex: 1;
max-width: 588px;
border-radius: 32px;
display: flex;
align-items: center;
justify-content: center;
background: var(--dark);
user-select: none;
&.spotify{
    background: var(--spotifybg);
}
&.youtube{
    background: var(--youtubebg);
}
@media (max-width: 768px) {
 width: 344px;
}
@media (max-width: 500px) {
    width: 100%;
}
`;

export const HomeCardRightImg = styled.img `
height: 270px;
pointer-events: none;
&.youtube{
    width: 320px;
    height: 60px;
}
@media (max-width: 1024px) {
width: 100%; 
&.netflix{
height: 220px;
}  
}
@media (max-width: 768px) {
&.netflix{
height: 170px;
}  
&.spotify{
width: 100%;
height: 190px;
}
&.youtube{
width: 100%;
height: 50px;
}
}
`;

export const HomeWorks = styled.div `
margin-top: 110px;
`;

export const HomeWorksContent = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;

export const HomeWorkCard = styled.div `
position: relative;
background: var(--white);
box-shadow: 0px 12px 28px var(--boxShadow);
border-radius: 32px;
max-width: 30.3%;
width: 100%;
min-height: 300px;
display: flex;
align-items: flex-start;
justify-content: flex-end;
flex-direction: column;
padding: 0 0 40px 40px;
@media (max-width: 991px) {
padding: 0 0 20px 20px; 
}
@media (max-width: 768px) {
padding: 20px 20px 20px 20px; 
max-width: 224px;
width: 100%;
min-height: 186px;
}
@media (max-width: 600px) {
    max-width: 100%;
    margin-bottom: 25px;
}
`;

export const HomeWorkCardImg = styled.img `
position: absolute;
top: 5px;
right: 15px;
width: 150px;
height: 150px;
pointer-events: none;
@media(max-width:768px) {
    width: 90px;
    height: 90px;
    top: 20px;
}
@media (max-width: 600px) {
    width: 140px;
    height: 140px;
}
@media (max-width: 375px) {
    width: 90px;
    height: 90px;
}
`;

export const HomeWorkCardTitle = styled.h3 `
font-weight: 700;
font-size: 22px;
line-height: 140%;
color: var(--black);
margin-bottom: 25px;
@media (max-width: 991px) {
margin-bottom: 10px; 
}
@media(max-width:768px) {
    margin-bottom: 25px;
}
@media (max-width: 600px) {
    margin-bottom: 15px;
}
@media (max-width: 375px) {
    margin-bottom: 45px;
}
@media (max-width: 320px) {
    margin-bottom: 15px;
}
`;

export const HomeWorkCardTxt = styled.p `
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: var(--dark);
max-width: 227px;
width: 100%;
@media(max-width:768px) {
    font-size: 17px;
}
`;

export const HomeWorkTitle = styled.h2 `
font-weight: 700;
font-size: 32px;
line-height: 140%;
color: var(--black);
text-align: center;
margin-bottom: 40px;
@media (max-width: 375px) {
    font-size: 25px;
}
`;

export const HomeAbout = styled.div `
margin-top: 120px;
@media (max-width: 768px) {
 margin-top: 100px;   
}
`;

export const HomeAboutTitle = styled.h2 `
font-weight: 700;
font-size: 32px;
line-height: 140%;
text-align: center;
color:var(--black);
margin-bottom: 40px;
`;

export const HomeAboutBox = styled.div `
display: flex;
justify-content: space-between;
@media (max-width: 600px){
    flex-direction: column-reverse;
    align-items: center;
}
`;

export const HomeAboutLeft = styled.div `
width: 49%;
background: var(--white);
box-shadow: 0px 4px 24px var(--boxShadow);
border-radius: 32px;
padding: 60px;
display: flex;
align-items: flex-start;
flex-direction: column;
@media (max-width: 1024px){
    padding: 40px;
}
@media (max-width: 768px){
    height: 412px;
    padding: 20px;
}
@media (max-width: 600px){
width: 100%;
}
@media (max-width: 320px){
width: 100%;
height: 430px;
}
`;

export const HomeAboutLeftImg = styled.img `
width: 130px;
height: 130px;
margin-bottom: 33px;
@media (max-width: 768px) {
width: 60px;
height: 60px;
margin-bottom: 20px;
pointer-events: none;
}
`;

export const HomeAboutLeftText = styled.p `
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: var(--link);
&.first{
    margin: 32px 0;
}
@media (max-width: 768px) {
    font-size: 17px;   
    &.first{
    margin: 16px 0;
}
}
@media (max-width: 600px) {
    font-size: 17px;
    &.first{
    margin: 40px 0;
}
}
@media (max-width: 375px) {
    &.first{
        margin: 16px 0;
    max-width: 300px;
    width: 100%;
}   
}
@media (max-width: 320px) {
    &.first{
margin: 11px 0;
    max-width: 270px;
    width: 100%;
}   
}
`;

export const HomeLeftText = styled.p `
font-weight: 700;
font-size: 18px;
line-height: 150%;
color: var(--black);
@media (max-width: 768px) {
    font-size: 16px;   
}
@media (max-width: 320px) {
    font-size: 15px;   
}
`;

export const HomeAboutRight = styled.div `
width: 49%;
height: 535px;
background: var(--white);
box-shadow: 0px 4px 24px var(--boxShadow);
border-radius: 32px;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
@media (max-width: 768px){
    height: 412px;
}
@media (max-width: 600px){
width: 100%;
margin-bottom: 15px;
}

`;

export const HomeAboutRightImg = styled.img `
width: calc(100% - 15%);
height: 100%;
@media (max-width: 1440px) {
width: calc(100% - 10%);
}
@media (max-width: 768px) {
    width: 344px;
    height: 412px;
    pointer-events: none;
}
@media (max-width: 600px) {
    width: 400px;
    height: 400px;
    pointer-events: none;
}   
@media (max-width: 425px) {
    width: 380px;
    height: 380px;
}   
@media (max-width: 375px) {
    width: 310px;
    height: 310px;
}   
@media (max-width: 320px) {
    width: 280px;
    height: 300px;
}   
`;