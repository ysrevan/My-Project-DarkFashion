import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();
export const ThemeProvider =({children})=>{
    const [theme,setTheme] = useState(localStorage.getItem('theme'))
    useEffect(()=>{
        if (localStorage.getItem('theme')===null) {
            localStorage.setItem('theme',"light")
        }
    },[])
    return(
        <ThemeContext.Provider value={[theme,setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}