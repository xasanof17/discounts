import styled from "styled-components"

export const Container = styled.div`
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    padding: 0px 12px;
    @media (max-width: 991px) {
        padding: 0px 15px;
    }
    @media (max-width: 320px) {
        padding: 0px 15px;
    }
`;