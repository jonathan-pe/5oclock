import { Box, Divider, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import moment from 'moment-timezone'
import drinksData from '../../drinksData'
import timezoneCityData from '../../timezoneCityData'
import { useNavigate } from 'react-router-dom'
import citiesToDrinksMap from '../../citiesToDrinksMap'

const HomeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-left: 30px;
  margin-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`

const DataBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  const navigate = useNavigate()
  const initTime = new Date()
  initTime.setHours(17)

  const [fiveTime, setFiveTime] = useState(initTime)
  const [timezonesAt5, setTimeZonesAt5] = useState([])
  const [placeOfChoice, setPlaceOfChoice] = useState()
  const [drink, setDrink] = useState()

  const transformDrinkData = drink => {
    return {
      drinkId: drink.idDrink,
      img: drink.strDrinkThumb,
      name: drink.strDrink,
      ingredients: [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        drink.strIngredient4,
        drink.strIngredient5,
        drink.strIngredient6,
        drink.strIngredient7,
        drink.strIngredient8,
        drink.strIngredient9,
        drink.strIngredient10,
        drink.strIngredient11,
        drink.strIngredient12,
        drink.strIngredient13,
        drink.strIngredient14,
        drink.strIngredient15,
      ],
      instructions: drink.strInstructions,
    }
  }

  const findTimeZonesForFiveOClock = () => {
    const allTimeZoneNames = moment.tz.names()

    let places = []

    allTimeZoneNames.forEach(timezone => {
      const tz = moment.tz(new Date(), timezone)
      console.log(tz.hours() === 17)

      if (tz.hours() === 17 && timezoneCityData[timezone] != null) {
        const zoneName = tz.tz()

        const nameArray = zoneName.split('/')

        if (nameArray.length > 1 && nameArray[0] !== 'Etc') {
          places = [...places, ...timezoneCityData[timezone].cities]
        }
      }
    })

    setTimeZonesAt5(places)
  }

  // update zones every second
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date()
      time.setHours(17)

      if (time.getMinutes() === 0 && time.getSeconds() === 0) {
        findTimeZonesForFiveOClock()
      }
      setFiveTime(time)
    }, 900) // wasn't always updating the time every second when set at 1000

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    findTimeZonesForFiveOClock()
  }, [])

  // query a drink from a random timezone
  useEffect(() => {
    // Fetch drink suggestions
    const getDrinkSuggestion = async place => {
      const drink = citiesToDrinksMap[place]
      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        const responseJson = await response.json()

        // If no drinks are found, grab a drink from hardcoded drink data
        if (!responseJson.drinks || responseJson.drinks.length === 0) {
          const fallbackDrink = drinksData.find(d => d.name.toLowerCase() === drink.toLowerCase())
          setDrink(fallbackDrink)
          return
        }

        const randomIndex = Math.floor(Math.random() * responseJson.drinks.length)
        setDrink(transformDrinkData(responseJson.drinks[randomIndex]))
      } catch (error) {
        const fallbackDrink = drinksData.find(d => d.name.toLowerCase() === drink.toLowerCase())
        setDrink(fallbackDrink)
        console.error('Error fetching drink', error)
      }
    }

    if (timezonesAt5.length > 0) {
      const randomIndex = Math.floor(Math.random() * timezonesAt5.length)
      const randomCity = timezonesAt5[randomIndex]

      setPlaceOfChoice(randomCity)
      getDrinkSuggestion(randomCity)
    }
  }, [timezonesAt5])

  return (
    <HomeBox>
      <Typography variant='h3' sx={{ mb: 5 }}>
        It's 5 O'Clock Somewhere
      </Typography>
      {placeOfChoice && (
        <Typography component='div' variant='h5' sx={{ mb: 5, color: 'text.secondary' }}>
          It's currently{' '}
          <Typography component='span' variant='h5' sx={{ ml: 1, mr: 1, color: 'secondary.main', fontWeight: '600' }}>
            {fiveTime.toLocaleTimeString()}
          </Typography>{' '}
          in{' '}
          {
            <Typography component='span' variant='h5' sx={{ ml: 1, mr: 1, fontWeight: '600', color: 'text.primary' }}>
              {placeOfChoice}
            </Typography>
          }
        </Typography>
      )}

      {drink && (
        <>
          <Divider sx={{ width: '80%' }} />
          <DataBox>
            <Box>
              <Typography variant='h5' sx={{ mb: 5, mt: 5 }}>
                Enjoy a
              </Typography>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea onClick={() => navigate(`/drinks/${drink.drinkId}`)}>
                  {drink.img && (
                    <CardMedia component='img' height='240' image={drink.img} alt={`image of a ${drink.name}`} />
                  )}
                  <CardContent sx={{ backgroundColor: 'white', color: 'black' }}>
                    <Typography variant='h5' component='div' fontWeight='600'>
                      {drink.name}
                    </Typography>
                    {drink.funFact && (
                      <Typography variant='body2' sx={{ mt: 1 }}>
                        {drink.funFact}
                      </Typography>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </DataBox>
        </>
      )}
    </HomeBox>
  )
}

export default Home
