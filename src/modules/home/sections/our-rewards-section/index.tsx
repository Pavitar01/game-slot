import { Box, Typography } from '@mui/material'
import RewardCard from './cards/reward'
import { rewards, RewardSectionProps } from './cards/rewards'
import './styles.scss'

const OurRewardsSection = () => {
  return (
    <Box className="our-rewards-section">
      <Box className="title">
        <Typography className="main" component="h3">
          OUR
        </Typography>
        <Typography className="sub" component="h1">
          Rewards
        </Typography>
      </Box>
      <Box className="rewards">
        {rewards.map((reward: RewardSectionProps, index: number) => {
          return (
            <RewardCard
              borderAlign={reward.borderAlign as 'right' | 'center' | 'left'}
              key={index}
              description={reward.description}
              heading={reward.heading}
              title={reward.title}
              imageUrl1={reward.imageUrl1}
              imageUrl2={reward.imageUrl2}
              bgcolor={reward.bgcolor}
              color={reward.color}
            />
          )
        })}
      </Box>
    </Box>
  )
}

export default OurRewardsSection
