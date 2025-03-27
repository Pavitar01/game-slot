'use client'

import Image from 'next/image'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import BaseButton from '@/shared/ui/base-button'
import { bgLand, leftGame, rightGame, Scroll } from '../../assets'
import './styles.scss'

const HeroSections = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box className="hero-section-container">
      <Image src={bgLand} alt="Hero Image" className="bg-land" />
      <Image src={bgLand} alt="Hero Image" className="bg-land" />
      <Image
        src={bgLand}
        alt="Hero Image"
        className="bg-land"
        style={{ width: '100%' }}
      />
      <Image
        src={bgLand}
        alt="Hero Image"
        className="bg-land"
        style={{ width: '100%' }}
      />
      <Image src={rightGame} alt="Hero Image" className="right-game" />
      <Image src={rightGame} alt="Hero Image" className="right-game" />
      <Image
        src={leftGame}
        alt="Hero Image"
        className="left-game"
      />
      <Image
        src={leftGame}
        alt="Hero Image"
        className="left-game"
      />
      <div className="overlay"></div>
      <Box className="content-container">
        <Typography variant="h1" className="hero-section-title">
          the realm of&nbsp;
          <Typography component="span" className="hero-section-span-title">
            VIP Rewards
          </Typography>
        </Typography>
        <Box className="button-wrapper">
          <BaseButton
            barWidth={isMobile ? '35% !important' : 'none'}
            className="button-1"
            barColor="var(--global-color-secondary)"
            borderLeft={{ color: 'var(--global-color-secondary)' }}
          >
            CLAIM BONUS
          </BaseButton>
          <BaseButton
            barWidth={isMobile ? '35% !important' : 'none'}
            className="button-2"
            barColor="var(--global-color-primary)"
            borderRight={{ color: 'var(--global-color-primary)' }}
          >
            CLAIM BONUS
          </BaseButton>
        </Box>
        <Box className="scroll-box">
          <Typography variant="body1" className="scroll">
            Scroll Down
          </Typography>
          <Image src={Scroll} alt="Hero Image" className="scroll-icon" />
        </Box>
      </Box>
    </Box>
  )
}

export default HeroSections
