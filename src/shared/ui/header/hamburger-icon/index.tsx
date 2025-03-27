import Image from 'next/image'
import { Box } from '@mui/material'
import { Close, Hamburger } from './assets'
import "./styles.scss"

const HamburgerAction = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box className="hamburger-icon">
      {!isOpen ? (
        <Image src={Hamburger} width={30} height={30} alt="open-icon" />
      ) : (
        <Image src={Close} alt="close-icon" width={30} height={30} />
      )}
    </Box>
  )
}

export default HamburgerAction
