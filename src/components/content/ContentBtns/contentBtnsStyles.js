import styled from "styled-components";

export const BtnsWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const BtnsWrapperInner = styled.div`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid var(--blue);
border-radius: 12px;
height: 60px;
width: 360px;
`;

export const Btn= styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 50%;
height: 100%;
background: transparent;
font-weight: 400;
font-size: 18px;
line-height: 150%;
color: var(--black);
cursor: pointer;
transition: .5s ease;
&.active{
    background: var(--blue);
    color: var(--white);
border-radius: 8px 0px 0px 8px;
}
&:nth-child(2){
    &:hover,&.active{
    background: var(--blue);
    color: var(--white);
border-radius: 0px 8px 8px 0px;
}  
}
`;

export const BtnsWrappegr = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;