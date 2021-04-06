import React, { useState, useEffect } from "react"
import { Container, PriceItem, Left, Right, Title, Company, Price, Tabs, Tab } from './PriceList.styles'

const PriceList = ({ data, onTabChange, onItemClick }) => {
    const [petrolIsActive, setpetrolIsActive] = useState(true);
    const [isSticky, setSticky] = useState(false)

    const changeTab = (tabItem) => {
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
            {data.map((item, indx) => (
                <PriceItem key={item.key} onClick={() => onItemClick(item)}>
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

export default PriceList;