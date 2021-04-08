import React from "react";
import CanselIcon from '../../images/cancel.svg';
import { Container, Info, Title, Text, Icon } from './ErrorBox.styles';

const ErrorBox = ({ message, onClick }) => {
    if (message !== "") {
        return (
            <Container>
                <Info>
                    <Title>Ath</Title>
                    <Text>{message}</Text>
                    <Icon src={CanselIcon} onClick={onClick} />
                </Info>
            </Container>
        )
    }
    return null;
}

export default ErrorBox;
