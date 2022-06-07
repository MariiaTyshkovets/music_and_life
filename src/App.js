import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import Main from './Components/Main';

function App () {

  const [appTheme, setAppTheme] = useState(
    localStorage.getItem('theme')
  );

  useEffect (() => {
    const themeFromLocalStorage = localStorage.setItem(
      'theme', appTheme
    );
    if (themeFromLocalStorage === null) {
      setAppTheme('white')
    }
  }, [appTheme])

  const changeSystem = (theme) => {
    if (theme === 'white') {
      setAppTheme('dark');
    } else {
      setAppTheme('white')
    }
  }

  changeSystem.bind(this);

  return (
    <>
      <div className={appTheme}>
        <Header changeSystem={changeSystem} theme={appTheme}/>
        <Main/>
      </div>
    </>
  );
}

export default App;