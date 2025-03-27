'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material'
import TemporaryDrawer from '../drawer'
import { actions } from './actions'
import Hamburger from './hamburger-icon'
import './styles.scss'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen((prev) => !prev)
  }

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev)
  }

  const isMobile = useMediaQuery('(max-width: 1081px)')
  return (
    <>
      <Box className="header-section">
        <Container maxWidth="xl" className="header-container">
          <Box className="app-name">
            <Typography variant="h4" className="title">
              &nbsp;Game
            </Typography>
            <Typography variant="h4" className="sub-title">
              Slot
            </Typography>
          </Box>
          {isMobile ? (
            <Box onClick={toggleHamburger}>
              <Hamburger isOpen={isOpen} />
            </Box>
          ) : (
            <>
              <Box className="action-links">
                {actions.map((action, index) => {
                  return (
                    <Box key={index} className="action-link">
                      <Image src={action.icon} alt={action.label} /> &nbsp;{' '}
                      <Typography variant="body1" className="title">
                        {action.label}
                      </Typography>
                    </Box>
                  )
                })}
              </Box>
              <Button variant="outlined" className="login-button">
                Login
              </Button>
            </>
          )}
        </Container>
      </Box>
     {isMobile &&  <TemporaryDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />}
    </>
  )
}

export default Header
