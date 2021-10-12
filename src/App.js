import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { StylesProvider } from '@mui/styles'
import theme from './app/theme'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './app/globalStyles'
import '@fontsource/poppins'
import Router from './app/router/router'
import NavBar from './app/NavBar'

const App = () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={createTheme(theme)}>
          <CssBaseline />
          <NavBar></NavBar>
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </StylesProvider>
  )
}

export default App
