import { StaticImageData } from 'next/image'
import { fbLogo, instaLogo, kLogo, xLogo, ytLogo } from './assets'

export const platforms: { name: string; logo: StaticImageData }[] = [
  {
    name: 'Kick',
    logo: kLogo,
  },
  {
    name: 'Instagram',
    logo: instaLogo,
  },
  {
    name: 'Youtube',
    logo: ytLogo,
  },
  {
    name: 'Facebook',
    logo: fbLogo,
  },
  {
    name: 'Twitter',
    logo: xLogo,
  },
]
