import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const QPMO_THEMES = {
    designQuality: {
        primary: '#1E6BB8',
        light: '#4A99E0',
        dark: '#15507A',
        ultraLight: '#E8F2FC',
        text: 'text-[#1E6BB8]',
        border: 'border-[#1E6BB8]',
        bg: 'bg-[#1E6BB8]/10',
        gradient: 'from-[#1E6BB8] to-[#4A99E0]',
        fill: '#1E6BB8',
    },
    constructionQuality: {
        primary: '#6A2586',
        light: '#8B3AAD',
        dark: '#4A1A5E',
        ultraLight: '#F3E8F9',
        text: 'text-[#6A2586]',
        border: 'border-[#6A2586]',
        bg: 'bg-[#6A2586]/10',
        gradient: 'from-[#6A2586] to-[#8B3AAD]',
        fill: '#6A2586',
    },
    facilityExcellence: {
        primary: '#2E8B57',
        light: '#3DAF6E',
        dark: '#1F6B42',
        ultraLight: '#E6F5ED',
        text: 'text-[#2E8B57]',
        border: 'border-[#2E8B57]',
        bg: 'bg-[#2E8B57]/10',
        gradient: 'from-[#2E8B57] to-[#3DAF6E]',
        fill: '#2E8B57',
    },
    operationsMaintenance: {
        primary: '#E8772E',
        light: '#F59A56',
        dark: '#C25E1A',
        ultraLight: '#FDF0E4',
        text: 'text-[#E8772E]',
        border: 'border-[#E8772E]',
        bg: 'bg-[#E8772E]/10',
        gradient: 'from-[#E8772E] to-[#F59A56]',
        fill: '#E8772E',
    },
    qpmoIntegrated: {
        primary: '#C02C38',
        light: '#DC4F5A',
        dark: '#8E1F28',
        ultraLight: '#FCEBED',
        text: 'text-[#C02C38]',
        border: 'border-[#C02C38]',
        bg: 'bg-[#C02C38]/10',
        gradient: 'from-[#C02C38] to-[#DC4F5A]',
        fill: '#C02C38',
    },
};

export function ThemeProvider({ children }) {
    const [activeTheme, setActiveTheme] = useState('designQuality');

    const theme = QPMO_THEMES[activeTheme] || QPMO_THEMES.designQuality;

    return (
        <ThemeContext.Provider value={{
            theme,
            activeTheme,
            setActiveTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
