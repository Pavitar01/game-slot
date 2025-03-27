import { StaticImageData } from 'next/image'
import {
  csgo,
  csgo1,
  gamedom,
  goRoll,
  goRoll1,
  packDraw,
  packDraw1,
  roobet,
  roobet1,
  stake,
  stake1,
} from './reward/assets'

interface RewardSectionProps {
  title: string
  heading: string
  description: string
  imageUrl1?: StaticImageData
  imageUrl2: StaticImageData
  bgcolor: string
  color: string
  borderAlign: 'center' | 'right' | 'left'
}

export const rewards: RewardSectionProps[] = [
  {
    imageUrl2: gamedom,
    title: 'Bonus',
    heading: '100%',
    bgcolor: '#00FF86',
    description: 'Receive 100% deposit bonus upon registration',
    color:"var(--global-color-primary)",
    borderAlign: 'left',
  },
  {
    imageUrl1: roobet1,
    imageUrl2: roobet,
    title: 'Main Bonus',
    heading: 'Instant Max Rewards',
    description: '100k monthly leaderboard + more',
    bgcolor: '#FFDD15',
    color:"var(--global-color-secondary)",
    borderAlign: 'center',
  },
  {
    imageUrl1: goRoll1,
    imageUrl2: goRoll,
    title: 'Main Bonus',
    heading: '3 Free Boxes',
    description: '+5% Bonus For Every Deposit',
    bgcolor: 'red',
    color:"var(--global-color-secondary)",
    borderAlign: 'right',
  },
  {
    imageUrl1: packDraw1,
    imageUrl2: packDraw,
    title: 'Bonus',
    heading: '15% up to $200',
    description: 'Wager & Raffle Leaderboard',
    bgcolor: '#FCA612',
    color:"var(--global-color-primary)",
    borderAlign: 'left',
  },
  {
    imageUrl1: csgo1,
    imageUrl2: csgo,
    title: 'Main Bonus',
    heading: '3 Free Boxes',
    description: 'Wager & Raffle Leaderboard',
    bgcolor: '#FFDD15',
    color:"var(--global-color-secondary)",
    borderAlign: 'center',
  },
  {
    imageUrl1: stake1,
    imageUrl2: stake,
    title: 'Main Bonus',
    heading: '5% Up to $100',
    description: 'Cashback rewards on site',
    bgcolor: '#E2B470',
    color:"var(--global-color-secondary)",
    borderAlign: 'right',
  },
]

export type { RewardSectionProps }
