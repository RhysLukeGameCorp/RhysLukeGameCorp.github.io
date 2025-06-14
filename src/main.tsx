import { createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ddd',
    }
  },
  typography: {
    fontFamily: [
      "Nunito Sans", 
      "sans-serif"
    ].join(','),
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
