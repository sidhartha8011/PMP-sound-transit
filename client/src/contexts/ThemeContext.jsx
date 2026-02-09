import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const PMI_COLORS = {
    cyan: {
        primary: '#00A5D9',
        text: 'text-[#00A5D9]',
        border: 'border-[#00A5D9]',
        bg: 'bg-[#00A5D9]/10',
        gradient: 'from-[#00A5D9] to-[#0087B3]',
        fill: '#00A5D9'
    },
    orange: {
        primary: '#FF6A13',
        text: 'text-[#FF6A13]',
        border: 'border-[#FF6A13]',
        bg: 'bg-[#FF6A13]/10',
        gradient: 'from-[#FF6A13] to-[#E55A00]',
        fill: '#FF6A13'
    },
    purple: {
        primary: '#6A2586',
        text: 'text-[#6A2586]',
        border: 'border-[#6A2586]',
        bg: 'bg-[#6A2586]/10',
        gradient: 'from-[#6A2586] to-[#521C68]',
        fill: '#6A2586'
    }
};

export function ThemeProvider({ children }) {
    const [activeTheme, setActiveTheme] = useState('cyan');
    const [activeDirector, setActiveDirector] = useState(null);

    const getThemeFromColor = (hexColor) => {
        if (hexColor === '#00A5D9') return 'cyan';
        if (hexColor === '#FF6A13') return 'orange';
        if (hexColor === '#6A2586') return 'purple';
        return 'cyan';
    };

    const theme = PMI_COLORS[activeTheme];

    return (
        <ThemeContext.Provider value={{
            theme,
            activeTheme,
            setActiveTheme,
            activeDirector,
            setActiveDirector,
            getThemeFromColor
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
