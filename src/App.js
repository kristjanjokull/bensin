import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import PriceList from './components/priceList/PriceList';
import DetailBox from './components/detailBox/DetailBox';
import ErrorBox from './components/errorBox/ErrorBox';
import { AppContainer } from './App.styles';

function App() {
    const [data, setData] = useState([]);
    const [currencyData, setCurrencyData] = useState([]);
    const [detailBoxIsOpen, setDetailBoxIsOpen] = useState(false);
    const [activeBoxItem, setActiveBoxItem] = useState(null);

    const [errorMessage, setErrorMessage] = useState("");

    function sortByGasolinePrice(gData) {
        const gasolineSortedList = gData.sort((a, b) => parseFloat(a.bensin95) - parseFloat(b.bensin95));
        return gasolineSortedList;
    }

    function sortByDiselPrice(dData) {
        const dieselSortedList = dData.sort((a, b) => parseFloat(a.diesel) - parseFloat(b.diesel));
        return dieselSortedList;
    }

    function onTabChange(tab, items) {
        setData([]);
        let updatedList = null;
        if (tab === 'disel') {
            updatedList = sortByDiselPrice(items);
        } else {
            updatedList = sortByGasolinePrice(items);
        }
        setData(updatedList);
    }

    function onItemClick(item){
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
            const errorMessage = 'Villa í vefþjónustu. Vinsamlegast reynið aftur síðar';
            setErrorMessage(errorMessage);
        }
    }, []);

    useEffect(() => {
        fetchData('https://apis.is/petrol', 'gasoline');
        fetchData('https://apis.is/currency/lb', 'diesel');
    }, [fetchData]);

    return (
        <AppContainer>
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
    );
}

export default App;
