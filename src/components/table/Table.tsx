import React from 'react';
import ISIcon from '../../images/iceland.svg';
import DKIcon from '../../images/denmark.svg';
import SEIcon from '../../images/sweden.svg';
import EUIcon from '../../images/europe.svg';
import USAIcon from '../../images/united-states.svg';
import UKIcon from '../../images/united-kingdom.svg';
import { PriceTable, TableHead, TableBody, TableRow, TableHeader, TableData, Flag } from './Table.styles'

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
    type: string,
    title: string,
    item: Item,
    currencyData: Array<any>
}


const Table: React.FC<Props> = ( { type, title, item, currencyData }) => {

    function perfromCurrencyCalculation(type: string, item: Item, currencyData: Array<CurrencyItem>, selectedCurrency: string): string {
        const iskPrice = (type === 'gasoline') ? item.bensin95: item.diesel;

        const calcObject = currencyData.find(obj => {
            return obj.shortName === selectedCurrency
        });

        if (calcObject) {
            const askValue = calcObject.askValue;
            const calcPrice = parseFloat(iskPrice) / askValue;
            const roundedNumber = calcPrice.toFixed(2);
            return roundedNumber;
        }
        return "0";
    }

    return(
        <PriceTable>
            <TableHead>
                <TableRow>
                    <TableHeader colSpan={2}>{title} (verð/l)</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableData><Flag src={ISIcon} alt="IS" /></TableData>
                    {type === 'gasoline' && (
                         <TableData>{item.bensin95} ISK</TableData>
                    )}
                    {type === 'diesel' && (
                         <TableData>{item.diesel} ISK</TableData>
                    )}
                </TableRow>
                <TableRow>
                    <TableData><Flag src={DKIcon} alt="DK" /></TableData>
                    <TableData>
                        {perfromCurrencyCalculation(type, item, currencyData, 'DKK')} DKK
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData><Flag src={SEIcon} alt="SE" /></TableData>
                    <TableData>
                        {perfromCurrencyCalculation(type, item, currencyData, 'SEK')} SEK
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData><Flag src={UKIcon} alt="UK" /></TableData>
                    <TableData>
                        {perfromCurrencyCalculation(type, item, currencyData, 'GBP')} GBP
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData><Flag src={EUIcon} alt="EU" /></TableData>
                    <TableData>
                        {perfromCurrencyCalculation(type, item, currencyData, 'EUR')} EUR
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData><Flag src={USAIcon} alt="USA" /></TableData>
                    <TableData>
                        {perfromCurrencyCalculation(type, item, currencyData, 'USD')} USD
                    </TableData>
                </TableRow>
            </TableBody>
        </PriceTable>
    )
}

export default Table
