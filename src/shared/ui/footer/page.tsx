import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import gambleAwareLogo from './assets/logos/gamble-aware.png'
import { groupThreeElements } from './groupThreeElements'
import { groupTwoElements } from './groupTwoElements'
import { icons } from './icons'
import './styles.scss'

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-container">
        <Box className="game-slot-gamble-aware-wrapper">
          <Box className="game-slot-logo">
            <Box className="rectangle">
              <Typography className="game-text">GAME</Typography>
            </Box>
            <Typography className="slot-text">SLOT</Typography>
          </Box>
          <Image
            className="gamble-aware-logo"
            src={gambleAwareLogo}
            alt="Gamble Aware"
          />
        </Box>
        <Box className="group">
          {groupTwoElements.map((value, index) => (
            <Typography key={index} className="group-text">
              {value}
            </Typography>
          ))}
        </Box>
        <Box className="group">
          {groupThreeElements.map((value, index) => (
            <Typography key={index} className="group-text">
              {value}
            </Typography>
          ))}
        </Box>
        <Box className="icon-container">
          {icons.map((icon, index) => (
            <Image key={index} src={icon} alt="icon" className="icon" />
          ))}
          <Typography className="copyright">© All rights reserved.</Typography>
        </Box>
      </Box>
      <Typography className="warning">
        18+ | Gamble Responsibly | BeGambleAware. Most people gamble for fun and
        enjoyment. Do not think of gambling as a way to make money. Only gamble
        with money you can afford to lose. Set a money and time limit in
        advance. Never chase your losses. Don't use gambling to distract
        yourself from everyday problems.
      </Typography>
    </Box>
  )
}

export default Footer
