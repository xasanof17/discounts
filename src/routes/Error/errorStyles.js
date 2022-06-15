import styled from "styled-components";

export const ErrorWrapper = styled.section `
display: flex;
align-items: center;
justify-content: center;
height: 50vh;
`;

export const ErrorContent = styled.div `
font-size: 50px;
color: gray;
@media (max-width: 500px) {
    font-size: 30px;
}
@media (max-width: 375px) {
    font-size: 20px;
}
`;