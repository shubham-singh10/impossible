import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { SocialLink } from '@/interfaces/social-link'

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/indiaimpossible',
    icon: '/images/icons/facebook.svg',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/impossibleindia',
    icon: '/images/icons/instagram.svg',
  },
  {
    name: 'Linkedin',
    link: '#',
    icon: '/images/icons/linkedin.svg',
  },
  {
    name: 'YouTube',
    link: 'https://www.youtube.com/channel/UCQ9Yz3C_l9-f5mFoAKCQWrA',
    icon: '/images/icons/youtube.svg',
  }
]

interface SocialLinkItemProps {
  item: SocialLink
}

const SocialLinkItem: FC<SocialLinkItemProps> = ({ item }) => (
  <Box
    component="li"
    sx={{
      display: 'inline-block',
      color: 'primary.contrastText',
      mr: 0.5,
    }}
  >
    <Link
      target="_blank"
      sx={{
        lineHeight: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 36,
        height: 36,
        borderRadius: '50%',
        color: 'inherit',
        transition: 'background-color 0.3s, transform 0.3s',
        '&:hover': {
          backgroundColor: 'secondary.main',
          transform: 'scale(1.1)', // Slightly scales up the icon
        },
        '& img': {
          fill: 'currentColor',
          width: 22,
          height: 'auto',
        },
      }}
      href={item.link}
    >
      {/* eslint-disable-next-line */}
      <img src={item.icon} alt={item.name + ' icon'} />
    </Link>
  </Box>
)

// default
const SocialLinks: FC = () => {
  return (
    <Box sx={{ ml: -1 }}>
      <Box
        component="ul"
        sx={{
          m: 0,
          p: 0,
          lineHeight: 0,
          borderRadius: 3,
          listStyle: 'none',
        }}
      >
        {socialLinks.map((item) => (
          <SocialLinkItem key={item.name} item={item} />
        ))}
      </Box>
    </Box>
  )
}

export default SocialLinks
