import styled from "styled-components";

export const LoginWrapper = styled.section`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
background: rgba(23, 73, 179, 0.1);
backdrop-filter: blur(15px);
display: flex;
align-items: center;
justify-content: center;
padding: 30px 0;
`;
export const LoginBox = styled.div`
background: var(--white);
box-shadow: 0px 4px 24px var(--boxShadow);
border-radius: 32px;
padding: 40px;
`;