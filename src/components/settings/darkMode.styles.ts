import styled from "styled-components"

type SliderProps = {
    darkModeEnabled: boolean
}

export const Container = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 99;
`;

export const SwitchWrapper = styled.div`
    display: flex;
    align-items: center;
    em {
        margin-left: 10px;
        font-size: 0.9rem;
    }
`;

export const ThemeSwitch = styled.label`
    display: inline-block;
    height: 24px;
    position: relative;
    width: 50px;
`;

export const Input = styled.input`
    display: none;
`;

export const Slider = styled.div<SliderProps>`
    background-color: ${props => (props.darkModeEnabled ? "#66bb6a" : "#ccc")};
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
    border-radius: 24px;
    &:before {
        background-color: #fff;
        bottom: 4px;
        content: "";
        height: 16px;
        left: 4px;
        position: absolute;
        transition: .4s;
        width: 16px;
        border-radius: 50%;
        ${props => props.darkModeEnabled && `
            transform: translateX(26px);
        `}
    }
`;

export const Icon = styled.img`
    height: 25px;
`;

