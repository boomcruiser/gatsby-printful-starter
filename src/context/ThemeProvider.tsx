import React, { useEffect, useState } from 'react'
export const ThemeContext = React.createContext({ dark: false, setDark: null })

const ThemeProvider: React.FC<{}> = ({ children }) => {
    const [dark, setDark] = useState(Boolean(typeof window !== 'undefined' && window && localStorage?.dark === 'true'));

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark')
            localStorage.dark = 'true'

        } else {
            document.documentElement.classList.remove('dark')
            localStorage.dark = 'false'
        }

    }, [dark])
    return <ThemeContext.Provider value={{ dark, setDark }}>
        {children}
    </ThemeContext.Provider>
}
export default ThemeProvider;