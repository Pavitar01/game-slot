import React from 'react'
import Image from 'next/image'
import { fbIcon, instaIcon, kIcon, xIcon, youtubeIcon } from './assets'
import gambleAwareLogo from './assets/logos/gamble-aware.png'
import './styles.scss'

const groupTwoElements = ['Shop', 'Raffles', 'Leaderboard', 'Rewards']

const groupThreeElements = [
  'FAQ',
  'Contact',
  'Privacy Policy',
  'Terms of Service',
]

const icons = [kIcon, instaIcon, youtubeIcon, fbIcon, xIcon]

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="game-slot-gamble-aware-wrapper">
          <div className="game-slot-logo">
            <div className="rectangle">
              <p className="game-text">GAME</p>
            </div>
            <p className="slot-text">SLOT</p>
          </div>
          <Image
            className="gamble-aware-logo"
            src={gambleAwareLogo}
            alt="Gamble Aware"
          />
        </div>

        <div className="group">
          {groupTwoElements.map((value, index) => (
            <p key={index} className="group-text">
              {value}
            </p>
          ))}
        </div>
        <div className="group">
          {groupThreeElements.map((value, index) => (
            <p key={index} className="group-text">
              {value}
            </p>
          ))}
        </div>
        <div className="icon-container">
          {icons.map((icon, index) => (
            <Image key={index} src={icon} alt="icon" className="icon" />
          ))}
          <p className="copyright">© All rights reserved.</p>
        </div>
      </div>
      <p className="warning">
        18+ | Gamble Responsibly | BeGambleAware. Most people gamble for fun and
        enjoyment. Do not think of gambling as a way to make money. Only gamble
        with money you can afford to lose. Set a money and time limit in
        advance. Never chase your losses. Don't use gambling to distract
        yourself from everyday problems.
      </p>
    </div>
  )
}

export default Footer
