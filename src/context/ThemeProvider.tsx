import React, { useEffect, useState } from 'react'
export const ThemeContext = React.createContext({ dark: false, setDark: null })

const ThemeProvider: React.FC<{}> = ({ children }) => {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        if (localStorage != null) {
            const isDark = Boolean(localStorage.getItem('dark') === 'true');
            setDark(isDark);
        }
    }, [])
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('dark', 'true')

        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('dark', 'false')
        }

    }, [dark])
    return <ThemeContext.Provider value={{ dark, setDark }}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeProvider;