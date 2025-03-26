import Image, { StaticImageData } from 'next/image'
import { Box, Typography } from '@mui/material'
import { crown } from './assets'
import './styles.scss'

const rankGradients: Record<number, string> = {
  1: 'linear-gradient(115deg, #8C421D -0.83%, #FBE67B 32.77%, #FBE67B 43.22%, #F7D14E 66.32%, #D4A041 86.39%)', // Gold
  3: 'linear-gradient(130deg, #BC6554 -10.51%, #A1503D 26.72%, #CA7561 48.61%, #AE7163 61.31%, #62362D 110.65%, #AA5946 128.9%)', // Bronze
  2: 'linear-gradient(311deg, #A8A8A6 5.87%, #DDDDC4 28.79%, #838383 50.27%, #838383 77.91%, #969696 92.19%, #7F7F7F 105.66%)', // Silver
}

const rankColors: Record<number, string> = {
  3: '#C26D5A',
  1: '#FFDD15',
  2: '#DBDBC3',
}

const LeaderCard = ({
  key,
  name,
  rank,
  avatar,
  amt_wagered,
  bonus,
}: {
  key: any
  name: string
  rank: string
  avatar: StaticImageData
  amt_wagered: string
  bonus: string
}) => {
  return (
    <Box
      className="leader-card-container"
      sx={{
        marginTop: parseInt(rank) === 1 ? '50px' : '159px',
      }}
    >
      {parseInt(rank) == 1 && (
        <Image src={crown} alt="crown" className="crown" />
      )}
      <Image src={avatar} alt={name} className="avatar" />
      <Box className="rank-container">
        <Typography className="rank" sx={{ color: rankColors[parseInt(rank)] }}>
          {rank}
        </Typography>
      </Box>
      <Typography className="name">{name}</Typography>
      <Typography className="wagered">WAGERED</Typography>
      <Typography className="amt-wagered">{amt_wagered}</Typography>
      <Box
        className="bonus-container"
        sx={{
          background: rankGradients[parseInt(rank)] || '#222',
        }}
      >
        <Typography className="bonus-amt">{bonus}</Typography>
      </Box>
    </Box>
  )
}

export default LeaderCard
