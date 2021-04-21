import React from 'react'
import CanselIcon from '../../images/cancel.svg'
import Table from '../table/Table'
import { useRecoilValue } from 'recoil';
import { darkModeState } from '../../stateManager/globalState';
import { Container, Icon, InfoContainer, TableContainer, Title, Company } from './DetailBox.styles'

interface Item {
    name: string,
    company: string,
    bensin95: string,
    diesel: string
}

interface CurrencyItem {
    askValue: number,
    bidValue: number,
    changeCur: number,
    longName: string,
    shortName: string,
    value: number
}

interface Props {
    isOpen: boolean,
    item: Item | null,
    onClose: () => void,
    currencyData: Array<CurrencyItem>
}

const DetailBox: React.FC<Props> = ({ isOpen, item, onClose, currencyData}) => {
    const darkMode = useRecoilValue(darkModeState);
    return(
        <Container isOpen={isOpen} darkModeEnabled={darkMode}>
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

export default DetailBox
