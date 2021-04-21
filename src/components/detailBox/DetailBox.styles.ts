import styled from "styled-components"

type ContainerProps = {
    isOpen: boolean
    darkModeEnabled: boolean
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 100vh;
    background-color: ${props => (props.darkModeEnabled ? "black" : "white")};
    color: ${props => (props.darkModeEnabled ? "white" : "black")};
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => (props.isOpen ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
`;


export const Icon = styled.img`
    display: inline-block;
    height: 1.2rem;
    cursor: pointer;
    position: absolute;
    top: 40px;
    left: 40px;
`;

export const InfoContainer = styled.div`
    width: 100%;
    max-width: 600px;
`;
export const Title = styled.h2`
    text-align: center;
`;
export const Company = styled.h3`
    text-align: center;
`;

export const TableContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;