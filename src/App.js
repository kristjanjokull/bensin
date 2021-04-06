import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import PriceList from './components/priceList/PriceList';
import DetailBox from './components/detailBox/DetailBox';
import { AppContainer } from './App.styles';

function App() {
    const [data, setData] = useState([]);
    const [currencyData, setCurrencyData] = useState([]);
    const [detailBoxIsOpen, setDetailBoxIsOpen] = useState(false);
    const [activeBoxItem, setActiveBoxItem] = useState(null);

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


    const fetchData = useCallback(async () => {
        const result = await axios('https://apis.is/petrol');
        setData(sortByGasolinePrice(result.data.results));
    }, []);

    const fetchCurrencyData = useCallback(async () => {
        const result = await axios('https://apis.is/currency/lb');
        setCurrencyData(result.data.results);
    }, []);

    useEffect(() => {
        fetchData();
        fetchCurrencyData();
    }, [fetchData, fetchCurrencyData]);

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
        </AppContainer>
    );
}

export default App;
