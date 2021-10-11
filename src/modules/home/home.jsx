import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import styled from 'styled-components'
import ct from 'countries-and-timezones'
import { useEffect, useState } from 'react'
import moment from 'moment-timezone'
import Clock from 'react-clock'
import 'react-clock/dist/Clock.css'

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

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [fiveTime, setFiveTime] = useState(new Date())
  const [placesAt5, setPlacesAt5] = useState([])

  const updateZones = () => {
    const allTimeZoneNames = moment.tz.names()

    const places = []

    allTimeZoneNames.forEach(timezone => {
      const tz = moment.tz(new Date(), timezone)
      if (tz.hours() === 17) {
        const zoneName = tz.tz()

        const nameArray = zoneName.split('/')
        if (nameArray.length > 1 && nameArray[0] !== 'Etc') {
          places.push({
            zoneName,
            place: nameArray[1].replace('_', ' '),
            country: ct.getCountryForTimezone(zoneName).name,
          })
        }
      }
    })

    setPlacesAt5(places)
    console.log(places)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currTime = new Date()
      const tempFiveTime = new Date()

      if (tempFiveTime.getHours !== 17) {
        tempFiveTime.setHours(17)
        updateZones()
      }
      setCurrentTime(currTime)
      setFiveTime(tempFiveTime)
    }, 900) // wasn't always updating the time every second when set at 1000

    return () => {
      clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    updateZones()
  }, [])
  return (
    <HomeBox>
      <Typography variant='h2'>It's 5 O'Clock Somewhere</Typography>
      <Typography>{currentTime.toLocaleString()}</Typography>
      <Clock value={currentTime} />
      <Typography>{fiveTime.toLocaleString()}</Typography>
      <Clock value={fiveTime} />
      <DataBox>
        <List>
          {placesAt5.map(place => {
            return (
              <ListItem key={place.zoneName}>
                <ListItemText>
                  {place.place}, {place.country}
                </ListItemText>
              </ListItem>
            )
          })}
        </List>
        <Typography>Drink photo here</Typography>
      </DataBox>
    </HomeBox>
  )
}

export default Home
