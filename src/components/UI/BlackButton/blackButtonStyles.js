import styled from "styled-components";

export const BlackBtn = styled.button `
width: 243px;
height: 54px;
display: flex;
align-items: center;
justify-content: center;
background: var(--link);
border-radius: 16px;
font-weight: 700;
font-size: 17px;
line-height: 130%;
color: var(--white);
transition: .5s ease;
border: 1px solid transparent;
cursor: pointer;
&:hover{
border: 1px solid var(--link);
background: transparent;
color: var(--black);
}
&:focus{
border: 1px solid transparent;
background: #606060;color: var(--white);    
}

`;