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
}

const BaseButton: React.FC<BaseButtonProps> = ({
  children,
  borderLeft,
  borderRight,
  barColor,
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
        <Box className="triangle-right" sx={{ bgcolor: borderRight.color }} />
      )}
      <Box className="bar" sx={{ bgcolor: barColor }} />
    </Box>
  )
}

export default BaseButton
