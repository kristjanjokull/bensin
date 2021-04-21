import React from 'react';
import { Container, SwitchWrapper, ThemeSwitch, Input, Slider } from './darkMode.styles';
import { useRecoilState } from 'recoil';
import { darkModeState } from '../../stateManager/globalState';


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
                <em>Enable Dark Mode!</em>
            </SwitchWrapper>
        </Container>
    )
}

export default DarkMode
