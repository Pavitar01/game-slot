import React from 'react'
import Image from 'next/image'
import { Box, Button, Container, Typography } from '@mui/material'
import { actions } from './actions'
import './styles.scss'

const Header = () => {
  return (
 <Box className="header-section">
     <Container maxWidth="xl" className="header-container">
      <Box className="app-name">
        <Typography variant="h4" className="title">
          Game <span className='span'>&nbsp;Slot</span>
        </Typography>
      </Box>
      <Box className="action-links">
        {actions.map((action, index) => {
          return (
            <Box key={index} className="action-link">
              <Image src={action.icon} alt={action.label} /> &nbsp;{' '}
              <Typography variant="body1" className='title'>{action.label}</Typography>
            </Box>
          )
        })}
      </Box>
      <Button variant="outlined" className='login-button'>Login</Button>
    </Container>
 </Box>
  )
}

export default Header
