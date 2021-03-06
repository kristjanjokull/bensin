import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react'
import PriceList from './components/priceList/Pricelist'
import DetailBox from './components/detailBox/DetailBox'
import ErrorBox from './components/errorBox/ErrorBox'
import DarkMode from './components/settings/darkMode'
import { AppContainer } from './App.styles';
import { useRecoilValue } from 'recoil';
import { darkModeState } from './stateManager/atoms';

interface Item {
    name: string,
    company: string,
    bensin95: string,
    diesel: string,
    key: string
}

const App: React.FC = () => {

    const [data, setData] = useState<Array<Item>>([]);
    const [currencyData, setCurrencyData] = useState([]);
    const [detailBoxIsOpen, setDetailBoxIsOpen] = useState(false);
    const [activeBoxItem, setActiveBoxItem] = useState<Item | null>(null);

    // Global state
    const darkMode = useRecoilValue(darkModeState);

    const [errorMessage, setErrorMessage] = useState("");

    function sortByGasolinePrice(gData: Array<Item>) {
        const gasolineSortedList = gData.sort((a, b) => parseFloat(a.bensin95) - parseFloat(b.bensin95));
        return gasolineSortedList;
    }

    function sortByDiselPrice(dData: Array<Item>) {
        const dieselSortedList = dData.sort((a, b) => parseFloat(a.diesel) - parseFloat(b.diesel));
        return dieselSortedList;
    }

    function onTabChange(tab : string, items: Array<Item>) {
        setData([]);
        let updatedList = [];
        if (tab === 'disel') {
            updatedList = sortByDiselPrice(items);
        } else {
            updatedList = sortByGasolinePrice(items);
        }
        setData(updatedList);
    }

    function onItemClick(item: Item){
        setDetailBoxIsOpen(true);
        setActiveBoxItem(item);
    }

    function onDetailBoxClose(){
        setDetailBoxIsOpen(false);
        setActiveBoxItem(null);
    }

    const fetchData = useCallback(async (url, type) => {
        try {
            const result = await axios(url);
            if (type === 'gasoline') {
                setData(sortByGasolinePrice(result.data.results));
            } else {
                setCurrencyData(result.data.results);
            }
        } catch(e) {
            console.log('Error: ', e.message);
            const errorMessage = 'Villa ?? vef??j??nustu. Vinsamlegast reyni?? aftur s????ar.';
            setErrorMessage(errorMessage);
        }
    }, []);

    useEffect(() => {
        fetchData('https://apis.is/petrol', 'gasoline');
        fetchData('https://apis.is/currency/lb', 'diesel');
    }, [fetchData]);

    return (
        <AppContainer darkModeEnabled={darkMode}>
            <DarkMode />
            <PriceList 
                data={data} onTabChange={(a, b) => onTabChange(a,b)} 
                onItemClick={(item) => onItemClick(item)}
            />
            <DetailBox 
                isOpen={detailBoxIsOpen} 
                item={activeBoxItem} 
                onClose={onDetailBoxClose} 
                currencyData={currencyData} 
            />
            <ErrorBox message={errorMessage} onClick={() => setErrorMessage('')} />
        </AppContainer>
    )
}

export default App
