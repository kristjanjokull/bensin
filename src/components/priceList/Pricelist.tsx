import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Placeholder from '../placeHolder/Placeholder';
import { Container, PriceItem, Left, Right, Title, Company, Price, Tabs, Tab } from './PriceList.styles';

interface Item {
    name: string,
    company: string,
    bensin95: string,
    diesel: string,
    key: string
}

interface Props {
    data: Array<Item>,
    onTabChange: (petrolType: string, data: Array<Item>) => void,
    onItemClick: (item: Item) => void
}

const PriceList: React.FC<Props> = ( { data, onTabChange, onItemClick }) => {

    const [petrolIsActive, setpetrolIsActive] = useState(true);
    const [isSticky, setSticky] = useState(false)

    const changeTab = (tabItem: string) => {
        if(tabItem === 'gasoline' && !petrolIsActive) {
            setpetrolIsActive(!petrolIsActive);
            onTabChange('gasoline', data);
        } else if (tabItem === 'disel' && petrolIsActive) {
            setpetrolIsActive(!petrolIsActive);
            onTabChange('disel', data);
        }
    }

    const handleScroll = () => {
        const userHasScrolled =
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80;
        setSticky(userHasScrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        }
    }, [])

    return (
        <Container>
            <Tabs sticky={isSticky}>
                <Tab 
                    onClick={() => changeTab('gasoline')} 
                    isActive={petrolIsActive}>
                        Bensín
                </Tab>
                <Tab
                    onClick={() => changeTab('disel')} 
                    isActive={!petrolIsActive}>
                        Dísel
                </Tab>
            </Tabs>

            {data.length === 0 && (
                <Placeholder />
            )}

            {data.map((item, indx: number) => (
                <PriceItem 
                    key={item.key} 
                    onClick={() => onItemClick(item)}
                    darkModeEnabled={false}
                >
                    <Left>
                        <Title>{indx+1}. {item.name}</Title>
                        <Company>{item.company}</Company>
                    </Left>
                    <Right>
                        {petrolIsActive && (
                            <Price>{item.bensin95} kr/l</Price>
                        )}
                        {!petrolIsActive && (
                            <Price>{item.diesel} kr/l</Price>
                        )}
                    </Right>
                </PriceItem>
            ))}
        </Container>
    )
}

export default PriceList
