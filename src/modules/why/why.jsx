import { Box, Link, Typography } from '@mui/material'
import styled from 'styled-components'

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-left: 70px;
  margin-right: 70px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
`

const WhyPage = () => {
  return (
    <StyledBox>
      <Typography variant='h3' gutterBottom>
        Why?
      </Typography>
      <Typography sx={{ mt: 5 }}>
        Why did we make <strong>It's 5 O'Clock Somewhere</strong>? We honestly don't really know. It's just an idea that
        popped into our heads. Some might say we did it for practice. Others might say we did it for fun. Who knows?!
        The important thing is that you're here AND you found this magical page.{' '}
        <strong>It's 5 O'Clock Somewhere</strong> was built to aid <strong>YOU</strong> in choosing a beverage to enjoy,
        whatever the time of day might be! However, we strongly encourage you to{' '}
        <strong>drink mindfully and responsibly.</strong>
      </Typography>
      <Typography sx={{ mt: 5 }}>
        <strong>P.S.:</strong> We are aware of some of the shortcomings of the site. We're currently looking at better
        ways to display more relevant drinks and locations to you. However, doing this programmatically is difficult at
        the moment. Most of our data is hardcoded as there aren't really any APIs that consistently keep up with
        updating worldwide timezone information. Given those timezones, there also aren't any APIs that will tell us
        which cities/countries/states/provinces/etc. are most populated in those zones, so we have to manually add those
        ourselves so that we can display a drink and location that actually makes sense to you. If there are drinks or
        locations missing that you would like to see, or you find any bugs/issues, feel free to create an issue or
        create any Pull Requests in our{' '}
        <Link href='https://github.com/jonathan-pe/5oclock' color='secondary.main' target='_blank'>
          Github repo
        </Link>
        . That'll really help us out. We will work on any issues that pop up whenever we get to them :) In the meantime,
        feel free to enjoy the features of the site and enjoy your beverage(s)!
      </Typography>
    </StyledBox>
  )
}

export default WhyPage
