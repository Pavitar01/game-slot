'use client'

import { Box, Button, ButtonProps } from '@mui/material'
import './styles.scss'

interface BaseButtonProps extends ButtonProps {
  children: React.ReactNode
  borderLeft?: {
    color: string
  }
  borderRight?: {
    color: string
  }
  barColor?: string
  barWidth?: string
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  borderLeft,
  borderRight,
  barColor,
  barWidth,
  variant = 'contained',
  ...props
}) => {
  return (
    <Box className="base-button-container">
      {borderLeft && (
        <Box className="triangle-left" sx={{ bgcolor: borderLeft.color }} />
      )}
      <Button
        {...props}
        id="base-button"
        variant={variant}
        disableElevation
        suppressHydrationWarning
      >
        {children}
      </Button>
      {borderRight && (
        <Box
          className="triangle-right"
          sx={{
            background: `linear-gradient(to left, ${borderRight.color} 100%, transparent 50%)`,
          }}
        />
      )}
      <Box className="bar" sx={{ bgcolor: barColor, width: barWidth }} />
    </Box>
  )
}

export default BaseButton
