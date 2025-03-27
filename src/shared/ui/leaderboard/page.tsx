import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { timerIcon } from './assets'
import LeaderCard from './leader-card'
import { leaders } from './leaders'
import './styles.scss'
import TimerCard from './timer-card'
import { times } from './times'

const Leaderboard = () => {
  return (
    <Box className="leaderboard-container">
      <Typography className="view-text">VIEW</Typography>
      <Typography className="leaderboard-text">LEADERBOARD</Typography>
      <Box className="leaders-container">
        {leaders.map((leader, index) => {
          return (
            <LeaderCard
              key={index}
              name={leader.name}
              avatar={leader.avatar}
              rank={leader.rank}
              amt_wagered={leader.amt_wagered}
              bonus={leader.bonus}
            />
          )
        })}
      </Box>
      <Box className="countdown">
        <Image src={timerIcon} alt="timer" className="timer" />
        <Typography className="tagline">
          HURRY UP! The winner will be decided when time's up!
        </Typography>
        <Box className='timer-container'>
          {times.map((timer, index) => {
            return <TimerCard text={timer.text} time={timer.time} key={index} />
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default Leaderboard
