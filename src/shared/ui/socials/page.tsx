import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { platforms } from './platforms'
import './styles.scss'

const Socials = () => {
  return (
    <Box className="socials-container">
      <Box className="title-one">
        <Typography className="follow-text">FOLLOW</Typography>
      </Box>
      <Box className="title-two">
        <Typography className="socials-text">socials</Typography>
      </Box>
      <Box className="platforms-container">
        {platforms.map((platform, index) => {
          return (
            <Box key={index} className="platform-container">
              <Box className="platform-logo-container">
                <Image
                  src={platform.logo}
                  alt={`${platform.name}-logo`}
                  height={78.638}
                />
              </Box>
              <Typography className="platform-name">{platform.name}</Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Socials
