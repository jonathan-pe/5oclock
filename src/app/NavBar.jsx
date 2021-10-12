import { AppBar, Button, Toolbar } from '@mui/material'
import styled from 'styled-components'

const HiddenButton = styled(Button)`
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.palette.text.primary};
  }
`

const NavBar = () => {
  return (
    <AppBar color='primary' sx={{ boxShadow: 'none', justifyContent: 'center', alignItems: 'flex-end' }}>
      <Toolbar>
        <HiddenButton variant='text'>Why?</HiddenButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
