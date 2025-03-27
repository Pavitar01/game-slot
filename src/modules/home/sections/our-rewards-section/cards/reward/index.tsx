import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import BaseButton from '@/shared/ui/base-button'
import { RewardSectionProps } from '../rewards'
import './styles.scss'

const RewardCard = ({
  title,
  heading,
  description,
  imageUrl1,
  imageUrl2,
  bgcolor,
  color,
  borderAlign,
}: RewardSectionProps) => {
  return (
    <Box className="reward-card" color={bgcolor}>
      {imageUrl1 && (
        <Image src={imageUrl1} alt={title} className="title-image" />
      )}
      <Image src={imageUrl2} alt={title} className="big-image" />
      <Box className="content-wrapper">
        <Typography className="title" component="p" color="inherit">
          {title}
        </Typography>
        <Typography className="heading" component="h1" variant="h1">
          {heading}
        </Typography>
        <Typography className="description" component="p" color="inherit">
          {description}
        </Typography>
        <Box sx={{ width: '100%' }}>
          {borderAlign === 'left' && (
            <BaseButton
              sx={{
                bgcolor: `${bgcolor} !important`,
                color: `${color} !important`,
                width: '100% !important',
                height: '100px !important',
                fontSize: '20px !important',
              }}
              barWidth="130px !important"
              borderLeft={{ color: 'var(--global-color-secondary)' }}
              barColor="var(--global-color-secondary)"
            >
              CLAIM BONUS
            </BaseButton>
          )}
          {borderAlign === 'right' && (
            <BaseButton
              sx={{
                width: '100% !important',
                bgcolor: `${bgcolor} !important`,
                color: `${color} !important`,
                fontSize: '20px !important',
                height: '100px !important',
              }}
              barWidth="130px !important"
              borderRight={{ color: 'var(--global-color-secondary)' }}
              barColor="var(--global-color-secondary)"
            >
              CLAIM BONUS
            </BaseButton>
          )}
          {borderAlign === 'center' && (
            <BaseButton
              sx={{
                width: '100% !important',
                bgcolor: `${bgcolor} !important`,
                color: `${color} !important`,
                fontSize: '20px !important',
                height: '100px !important',
              }}
              barWidth="130px !important"
              barColor="var(--global-color-secondary)"
            >
              CLAIM BONUS
            </BaseButton>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default RewardCard
