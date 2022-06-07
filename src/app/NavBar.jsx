import { AppBar, Button, Toolbar } from '@mui/material'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const HiddenButton = styled(Button)`
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.palette.text.primary};
  }
`

const NavBar = () => {
  const history = useHistory()
  const location = useLocation()

  return (
    <AppBar
      color='primary'
      sx={{ boxShadow: 'none', justifyContent: 'center', alignItems: 'flex-end', background: 'transparent' }}
    >
      <Toolbar>
        {location.pathname === '/' && (
          <HiddenButton variant='text' onClick={() => history.push('/why')}>
            Why?
          </HiddenButton>
        )}
        {location.pathname !== '/' && (
          <Button variant='text' sx={{ color: 'white' }} onClick={() => history.push('/')}>
            Home
          </Button>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
