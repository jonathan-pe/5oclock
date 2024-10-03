import { Box, Divider, Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'
import styled from 'styled-components'
import ct from 'countries-and-timezones'
import { useEffect, useState } from 'react'
import moment from 'moment-timezone'
import _ from 'lodash'
import drinksData from '../../drinksData'
import timezoneCityData from '../../timezoneCityData'
import { useNavigate } from 'react-router-dom'

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

/**
 * TODO: moment.js (and perhaps moment-timezone) has gone into legacy mode
 * so we might have to redo calculations to determine when it's 5pm in certain
 * timezones. I've already pre-emptively added /lib/isDST.js but might have to
 * eventually transition into calculating local times using UTC offsets
 *
 * We still need to find better ways to really programmatically drill down into
 * specific countries/cities that exist within these time zones. Best way is probably
 * just to hardcode them like we're doing now.
 *
 */

const Home = () => {
  const navigate = useNavigate()
  const initTime = new Date()
  initTime.setHours(17)

  const [fiveTime, setFiveTime] = useState(initTime)
  const [placesAt5, setPlacesAt5] = useState([])
  const [placeOfChoice, setPlaceOfChoice] = useState()
  const [drinkOfChoice, setDrinkOfChoice] = useState()

  const updateZones = () => {
    const allTimeZoneNames = moment.tz.names()

    let places = []

    allTimeZoneNames.forEach(timezone => {
      const tz = moment.tz(new Date(), timezone)
      console.log(timezoneCityData[timezone], tz.hours())
      if (tz.hours() === 17 && timezoneCityData[timezone] != null) {
        console.log(timezone)
        const zoneName = tz.tz()

        const nameArray = zoneName.split('/')

        if (nameArray.length > 1 && nameArray[0] !== 'Etc') {
          places = [...places, ...timezoneCityData[timezone].cities]
        }
      }
    })

    setPlacesAt5(places)
  }

  // update zones every second
  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date()
      time.setHours(17)

      if (time.getMinutes() === 0 && time.getSeconds() === 0) {
        updateZones()
      }
      setFiveTime(time)
    }, 900) // wasn't always updating the time every second when set at 1000

    return () => {
      clearInterval(interval)
    }
  }, [])

  // update zones on init()
  useEffect(() => {
    updateZones()
  }, [])

  // choose place/drink
  useEffect(() => {
    if (placesAt5.length > 0) {
      const place = placesAt5[_.random(0, placesAt5.length - 1)]
      const drinks = drinksData.filter(drink => drink.zoneNames.includes(place.zoneName))
      // helps with creating new drink data for zones
      console.log(place.zoneName)
      console.log(placesAt5)
      drinks.length > 0 ? setDrinkOfChoice(drinks[_.random(0, drinks.length - 1)]) : setDrinkOfChoice(null)
      setPlaceOfChoice(place)
    }
  }, [placesAt5])

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
          {drinkOfChoice ? (
            <Typography component='span' variant='h5' sx={{ ml: 1, mr: 1, fontWeight: '600', color: 'text.primary' }}>
              {drinkOfChoice.place}, {drinkOfChoice.country}
            </Typography>
          ) : (
            <Typography component='span' variant='h5' sx={{ ml: 1, mr: 1, fontWeight: '600', color: 'text.primary' }}>
              {placeOfChoice.place}, {placeOfChoice.country}
            </Typography>
          )}
        </Typography>
      )}

      {drinkOfChoice && (
        <>
          <Divider sx={{ width: '80%' }} />
          <DataBox>
            <Box>
              <Typography variant='h5' sx={{ mb: 5, mt: 5 }}>
                Enjoy a
              </Typography>
              <Card sx={{ maxWidth: 350 }}>
                <CardActionArea onClick={() => navigate(`/drinks/${drinkOfChoice.drinkId}`)}>
                  <CardMedia component='img' height='240' image={drinkOfChoice.img} alt='green iguana' />
                  <CardContent sx={{ backgroundColor: 'white', color: 'black' }}>
                    <Typography variant='h5' component='div' fontWeight='600'>
                      {drinkOfChoice.name}
                    </Typography>
                    {drinkOfChoice.funFact && (
                      <Typography variant='body2' sx={{ mt: 1 }}>
                        {drinkOfChoice.funFact}
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
