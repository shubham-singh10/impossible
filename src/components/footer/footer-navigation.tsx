import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import { Typography } from '@mui/material'
import { FooterSectionTitle } from '@/components/footer'

const pageMenu = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Our Team',
    path: '/team',
  },
  {
    label: 'Counselling & Healing',
    path: '/mental-health-counselling-healing',
  },
  {
    label: 'Coaching',
    path: '/business-coaching',
  },
  {
    label: 'Consulting',
    path: '/business-management-consulting',
  },
  {
    label: 'Event & Testimonial',
    path: '#',
  },
  {
    label: 'Contact Us',
    path: '/contact'
  },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {


  return (
    <Grid container spacing={2} sx={{ mt: 2 }}>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>

      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Location" />
        <Typography component="div">
          Sector 49, Bestech Park View, Sohna Road, Gurugram
        </Typography>
        <Typography component="div" mt={5}>
          <FooterSectionTitle title="Email" />
          Info@impossibleindia.com
        </Typography>
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
