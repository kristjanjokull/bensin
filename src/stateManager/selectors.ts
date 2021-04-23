import { selector } from 'recoil'
import { darkModeState } from './atoms'

export const toggleDarkModeState = selector({
    key: 'darkModeState',
    get: ({ get }) => {
        const dm = get(darkModeState);
        return !dm;
    }
})