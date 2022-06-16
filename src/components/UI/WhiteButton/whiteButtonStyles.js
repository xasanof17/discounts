import styled from "styled-components";

export const WhiteBtn = styled.button `
background: var(--white);
padding: 16px 56px;
height: 54px;
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
font-family: 'GothamPro';
font-weight: 700;
font-size: 17px;
line-height: 130%;
color: var(--black);
border: 1px solid transparent;
transition: .5s;
&:hover{
background: transparent;
border: 1px solid var(--white);
color: var(--white);
}
&:focus{
border: 1px solid transparent;
background: rgba(255, 255, 255, 0.8);
color: var(--black);
}
@media (max-width: 425px) {
    width: 100%;
}
`;