import React, { useState, useEffect, createContext } from 'react';

const ThemeContext = createContext([]);

const ThemeProvider = ({children}) => {
  var themeSet = 'light'; 

  const [theme, setTheme] = useState(themeSet);

  // This use effect is needed because Next.js renders the server side first and
  // localStorage is only accessable to the client side
  useEffect(() => {
    if (localStorage.getItem('theme') != null) {
    themeSet = localStorage.getItem('theme');
  }
    }, [])

  // Everytime the theme changes the theme state is changed
  useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

ThemeProvider.context = ThemeContext;

export default ThemeProvider;