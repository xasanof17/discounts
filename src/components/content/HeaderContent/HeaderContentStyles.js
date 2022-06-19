import styled from "styled-components";

export const TitleBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 50px;
@media (max-width: 768px){
 margin-bottom: 30px;   
}
`;

export const Title = styled.h1`
font-weight: 700;
font-size: 36px;
line-height: 140%;
color: var(--black);
margin-bottom: 20px;
@media (max-width: 768px){
 margin-bottom: 15px;   
}
@media (max-width: 420px){
font-size: 28px;
}
@media (max-width: 320px){
font-size: 25px;
}
`;

export const Txt = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: var(--link);
margin-bottom: 20px;
@media (max-width: 320px){
font-size: 15px;
}
`;

export const TxtSpan = styled.span`
    color: var(--blue);
`;