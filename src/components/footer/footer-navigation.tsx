import React, { FC, useState } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import { Box, Button, TextField, Typography } from '@mui/material'
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Add form submission logic here
    console.log("formData", formData);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Location" />
        <Typography component="div"> {/* Use "div" to avoid <p> nesting */}
          Sector 49, Bestech Park View, Sohna Road, Gurugram
        </Typography>
        <Typography component="div" mt={5}> {/* Use "div" to avoid <p> nesting */}
          <FooterSectionTitle title="Email" />
          Info@impossibleindia.com
        </Typography>
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Menu" />
        {pageMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
      <Grid item xs={12} md={3}>
        <FooterSectionTitle title="Contact Us" />
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              InputLabelProps={{
                style: { color: '#ffffff' },
              }}
              InputProps={{
                style: { color: '#ffffff', borderColor: '#ffffff' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffffff',
                  },
                },
              }}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              InputLabelProps={{
                style: { color: '#ffffff' },
              }}
              InputProps={{
                style: { color: '#ffffff', borderColor: '#ffffff' },
              }}
              sx={{
                mt: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffffff',
                  },
                },
              }}
            />

            <TextField
              fullWidth
              label="Your Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              InputLabelProps={{
                style: { color: '#ffffff' },
              }}
              InputProps={{
                style: { color: '#ffffff', borderColor: '#ffffff' },
              }}
              sx={{
                mt: 2, // Margin-bottom added to create a gap between text fields and button
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&:hover fieldset': {
                    borderColor: '#ffffff',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#ffffff',
                  },
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2, // Margin-top added to create a gap between text fields and button
                backgroundColor: '#ffffff',
                color: '#127C71',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              Send Message
            </Button>
          </Grid>
        </Box>


      </Grid>
    </Grid>
  )
}

export default FooterNavigation
