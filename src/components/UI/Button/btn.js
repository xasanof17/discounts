import styled from "styled-components";

export const Btn = styled.button `
font-family: 'GothamPro';
border-radius: 12px;
background: var(--blue);
padding: 10px 40px;
font-size: 17px;
font-weight: 700;
line-height: 130%;
color: var(--white);
transition: .5s;
border: 1px solid transparent;
cursor: pointer;
&:hover{
    color: var(--black);
    background: transparent;
    border: 1px solid var(--blue);
}
&:focus{
    border: 1px solid transparent;
    background: var(--lightBlue);
    color: var(--white);
}
`;