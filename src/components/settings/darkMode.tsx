import React from 'react';
import { Container, SwitchWrapper, ThemeSwitch, Input, Slider, Icon } from './darkMode.styles';
import { useRecoilState } from 'recoil';
import Moon from '../../images/moon.svg';
import { darkModeState } from '../../stateManager/atoms';


const DarkMode: React.FC = () => {

    const [darkMode, setDarkMode] = useRecoilState(darkModeState);

    return(
        <Container>
            <SwitchWrapper>
                <ThemeSwitch htmlFor="checkbox">
                    <Input type="checkbox" id="checkbox" />
                    <Slider 
                        onClick={() => setDarkMode(!darkMode)} 
                        darkModeEnabled={darkMode}></Slider>
                </ThemeSwitch>
                <em><Icon src={Moon} alt="UK" /></em>
            </SwitchWrapper>
        </Container>
    )
}

export default DarkMode
