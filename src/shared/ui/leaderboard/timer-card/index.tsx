import React from 'react'
import { Box, Typography } from '@mui/material'
import './styles.scss'

const TimerCard = ({ time, text }: { time: string; text: string }) => {
  return (
    <Box className="timer-card">
      <Typography className="time">{time}</Typography>
      <Typography className="text">{text}</Typography>
    </Box>
  )
}

export default TimerCard
