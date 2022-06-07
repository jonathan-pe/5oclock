import { Card, CardMedia, CardContent, Box, Typography, Divider, List, ListItem } from '@mui/material'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import drinksData from '../../drinksData'

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-left: 70px;
  margin-right: 70px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
`

const DrinkDetailsPage = () => {
  const { drinkId } = useParams()
  const drinkOfChoice = drinksData.find(drink => drink.drinkId === drinkId)

  return (
    <StyledBox>
      <Box sx={{ maxHeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia component='img' height='240' image={drinkOfChoice.img} alt='green iguana' />
          <CardContent sx={{ backgroundColor: 'white', color: 'black', textAlign: 'center' }}>
            <Typography variant='h5' component='div' fontWeight='600'>
              {drinkOfChoice.name}
            </Typography>
            {drinkOfChoice.funFact && (
              <Typography variant='body2' sx={{ mt: 1 }}>
                {drinkOfChoice.funFact}
              </Typography>
            )}
          </CardContent>
        </Card>
        {drinkOfChoice.ingredients?.length > 0 && (
          <>
            <Divider orientation='vertical' flexItem sx={{ marginLeft: 10, marginRight: 10 }} />
            <List>
              {drinkOfChoice.ingredients.map(ingredient => (
                <ListItem>{ingredient}</ListItem>
              ))}
            </List>
          </>
        )}
      </Box>
    </StyledBox>
  )
}

export default DrinkDetailsPage
