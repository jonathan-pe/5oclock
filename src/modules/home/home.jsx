import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import styled from 'styled-components'
import ct from 'countries-and-timezones'
import { useEffect, useState } from 'react'
import moment from 'moment-timezone'
import 'react-clock/dist/Clock.css'
import _ from 'lodash'
import drinksData from './drinksData'

const HomeBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  const [fiveTime, setFiveTime] = useState(new Date())
  const [placesAt5, setPlacesAt5] = useState([])
  const [placeOfChoice, setPlaceOfChoice] = useState()
  const [drinkOfChoice, setDrinkOfChoice] = useState()

  const updateZones = () => {
    const allTimeZoneNames = moment.tz.names()
    console.log(ct.getTimezonesForCountry('US'))

    const places = []

    allTimeZoneNames.forEach(timezone => {
      const tz = moment.tz(new Date(), timezone)
      if (tz.hours() === 17) {
        const zoneName = tz.tz()

        const nameArray = zoneName.split('/')
        const country = ct.getCountryForTimezone(zoneName)
        if (nameArray.length > 1 && nameArray[0] !== 'Etc') {
          places.push({
            zoneName,
            place: nameArray[1].replaceAll('_', ' '),
            country: country && country.name,
          })
        }
      }
    })

    setPlacesAt5(places)
  }

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

  useEffect(() => {
    updateZones()
  }, [])

  useEffect(() => {
    findDrink(placesAt5)
  }, [placesAt5])

  const findDrink = () => {
    let place = placesAt5[_.random(0, placesAt5.length - 1)]
    let drink = null

    placesAt5.forEach(p => {
      if (drinksData.some(drink => drink.place === p.place)) {
        place = p
        drink = drinksData.find(drink => drink.place === p.place)
      }
    })

    setDrinkOfChoice(drink)
    setPlaceOfChoice(place)
  }

  return (
    <HomeBox>
      <Typography variant='h2' sx={{ mb: 5 }}>
        It's 5 O'Clock Somewhere
      </Typography>
      {placeOfChoice && (
        <Typography component='div' variant='h4' sx={{ mb: 5, color: 'text.secondary' }}>
          It's currently{' '}
          <Typography component='span' variant='h4' sx={{ ml: 1, mr: 1, color: 'secondary.main', fontWeight: '600' }}>
            {fiveTime.toLocaleString()}
          </Typography>{' '}
          in{' '}
          <Typography component='span' variant='h4' sx={{ ml: 1, mr: 1, fontWeight: '600', color: 'text.primary' }}>
            {placeOfChoice.place}, {placeOfChoice.country}
          </Typography>
        </Typography>
      )}
      <DataBox>
        {drinkOfChoice && (
          <Box sx={{ ml: 10 }}>
            <Typography>{drinkOfChoice.name}</Typography>
          </Box>
        )}
      </DataBox>
    </HomeBox>
  )
}

export default Home
