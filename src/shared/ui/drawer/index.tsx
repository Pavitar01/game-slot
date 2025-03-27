import * as React from 'react'
import Image from 'next/image'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { actions } from '../header/actions'
import './styles.scss'

interface TemporaryDrawerProps {
  isOpen: boolean
  toggleDrawer: (bool: boolean) => void
}
export default function TemporaryDrawer({
  isOpen,
  toggleDrawer,
}: TemporaryDrawerProps) {
  const DrawerList = (
    <Box
      className="drawer-container"
      sx={{ width: 250, zIndex: 15 }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <Box className="app-name">
        <Typography variant="h4" className="title">
          &nbsp;Game
        </Typography>
        <Typography variant="h4" className="sub-title">
          Slot
        </Typography>
      </Box>
      {actions.map((action, index) => {
        return (
          <List key={index} className="action-link">
            <Image src={action.icon} alt={action.label} /> &nbsp;{' '}
            <Typography variant="body1" className="title">
              {action.label}
            </Typography>
          </List>
        )
      })}
    </Box>
  )

  return (
    <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  )
}
