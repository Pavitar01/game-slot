import React, { ReactNode } from 'react'
import { Box } from '@mui/material'

const layout = ({ children }: { children: ReactNode }) => {
  return <Box className="layout">{children}</Box>
}

export default layout
