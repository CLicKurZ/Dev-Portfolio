import React, { useState } from 'react';
// import logo from './assets/logo.svg';
import './App.css';
import Card from './Card.jsx';
import GithubLink from './GithubLink.jsx';
import DisplayModeSwitch from './DisplayModeSwitch.jsx';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {

  const [darkMode, setDarkMode] = useState(true);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <DisplayModeSwitch />
        <Card />
        <GithubLink />
      </ThemeProvider>
    </div>
  );
}

export default App;
