// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import React from 'react'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
