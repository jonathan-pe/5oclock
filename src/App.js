import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { StylesProvider } from '@mui/styles'
import theme from './app/theme'
import { RouterProvider } from 'react-router-dom'
import GlobalStyle from './app/globalStyles'
import '@fontsource/poppins'
import Router from './app/router/router'
import NavBar from './app/NavBar'

const App = () => {
  return (
    <StylesProvider>
      <GlobalStyle />
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <RouterProvider router={Router}>
          <NavBar></NavBar>
        </RouterProvider>
      </ThemeProvider>
    </StylesProvider>
  )
}

export default App
