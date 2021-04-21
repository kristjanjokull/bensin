import { atom } from 'recoil';

const darkModeState = atom({
    key: 'darkMode',
    default: false
});

export  { darkModeState };