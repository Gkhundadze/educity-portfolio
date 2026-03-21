import {useEffect, useMemo, useState, createContext} from 'react'


export const LanguageContext = createContext('en')




export function LanguageProvider ({children}) {
    const [language, setLanguage] = useState('en')

    const toggleLanguage = () => {
        setLanguage(prev => (prev === "en" ? "ge": "en"))
    }

    useEffect(() => {
        
        const savedLanguage = localStorage.getItem('language')
        if (savedLanguage) {
            setLanguage(savedLanguage)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("language", language)
    }, [language])

    const value = useMemo(() => {
        return {
            language,
            toggleLanguage
        }
    }, [language])

    return(
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}