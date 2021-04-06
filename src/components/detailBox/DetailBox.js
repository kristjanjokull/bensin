import React from "react";
import CanselIcon from '../../images/cancel.svg';
import Table from '../table/Table';
import { Container, Icon, InfoContainer, TableContainer, Title, Company } from './Detailbox.styles';

const DetailBox = ({ isOpen, item, onClose, currencyData }) => {
    return (
        <Container isOpen={isOpen}>
            <Icon src={CanselIcon} onClick={onClose} />
            {item && (
                <InfoContainer>
                    <Title>{item.name}</Title>
                    <Company>{item.company}</Company>
                    <TableContainer>
                        <Table type="gasoline" title="Bensín" item={item} currencyData={currencyData} />
                        <Table type="diesel" title="Dísel" item={item} currencyData={currencyData} />
                    </TableContainer>
                </InfoContainer>
            )}
        </Container>
    )
}

export default DetailBox;
