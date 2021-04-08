import styled from "styled-components"

export const Container = styled.div`
    background-color:  #f9f9f9;
    color: #666;
    padding: 2rem;
    border-radius: 10px;
    position: fixed;
    top: 50px;
    right: 45px;

    @media only screen and (max-width: 680px) {
        left: 0;
        top: 0;
        width: 100%;
        border-radius: 0;
    }

`;

export const Info = styled.div`
    position: relative;
`;

export const Title = styled.h4``;
export const Text = styled.p``;

export const Icon = styled.img`
    width: 12px;
    height: 12px;
    position: absolute;
    top: -15px;
    right: -15px;
    cursor: pointer;
`;

