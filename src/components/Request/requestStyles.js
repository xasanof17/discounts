import styled from "styled-components";

export const Req = styled.div`
margin-top: 120px;
padding: 40px 60px;
background: var(--blue);
box-shadow: 0px 4px 24px rgba(213, 216, 221, 0.2), 0px 4px 24px rgba(213, 216, 221, 0.2), 0px 12px 28px rgba(244, 245, 245, 0.2);
border-radius: 32px;
@media (max-width:768px) {
    margin-top: 100px;
    padding: 32px;
}
`;

export const ReqBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width: 600px) {
    flex-direction: column;
}
`;

export const ReqLeft = styled.div`
@media (max-width: 500px) {
    margin-bottom: 20px;
}`;

export const ReqTitle = styled.h2`
font-weight: 600;
font-size: 22px;
line-height: 140%;
color: var(--white);
margin-bottom: 20px;
`;

export const ReqTxt = styled.p`
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: var(--white);
`;

export const ReqRight= styled.div`
button{
    width: 296px;
}
@media (max-width:768px) {
    button{
    width: 239px;
    margin-left: 5px;
}
}
`;
