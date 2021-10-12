import { Box, Typography } from '@mui/material'

const WhyPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Typography variant='h2' gutterBottom>
        404
      </Typography>
      <Typography variant='h6' color='text.secondary'>
        That page was not found :(
      </Typography>
    </Box>
  )
}

export default WhyPage
