import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ThemeContext, useThemeProvider } from './hooks/useTheme'
import { I18nProvider } from './i18n/I18nProvider'

function Root() {
  const theme = useThemeProvider()
  return (
    <ThemeContext.Provider value={theme}>
      <I18nProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nProvider>
    </ThemeContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)