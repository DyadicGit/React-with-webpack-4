import React, { useState } from 'react';
import { TestJsxSyntaxSugar } from './test-jsx-sugar';
import './test-styles.css';

const themes = {
  blue: 'theme-blue',
  red: 'theme-red'
};

export const ThemeContext = React.createContext(themes.blue);

const useTheme = (initialState) => {
  const [state, setState] = useState(initialState);
  function dispatch(themeId) {
    setState(themes[themeId]);
  }
  return [state, dispatch];
};


const ThemeSwitch = ({ theme, setTheme }) => {
  const themeHandler = (e) => setTheme(e.target.value);
  console.log('%c ThemeRadio',"background-color: black; color: red; font-weight: 900;");

  return (
    <div className={`${theme} radio`}>
      <input type="radio" id="blue" name="theme" value="blue" onClick={themeHandler} />
      <label htmlFor="blue">blue</label>
      <input type="radio" id="red" name="theme" value="red" onClick={themeHandler} />
      <label htmlFor="red">red</label>
    </div>
  );
};

const TestPage = () => {
  const [theme, setTheme] = useTheme(themes.blue);
  return (
    <ThemeContext.Provider value={theme}>
      {ThemeSwitch({theme, setTheme})}
      <TestJsxSyntaxSugar />
    </ThemeContext.Provider>
  );
};

export { TestPage };
