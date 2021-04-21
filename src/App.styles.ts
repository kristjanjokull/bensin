import styled from "styled-components"

type AppContainerProps = {
    darkModeEnabled: boolean
}

export const AppContainer = styled.div<AppContainerProps>`
    padding: 0 1rem;
    background-color: ${props => (props.darkModeEnabled ? "black" : "white")};
`;
