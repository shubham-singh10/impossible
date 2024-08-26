import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import FooterFORM from './footer-form'
import { Container } from '@mui/material'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 } }}>
              <Typography component="h2" variant="h1" sx={{ mb: 1, fontSize: "3rem" }}>
                iMpossible India
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 2, fontSize: "2rem" }}>
                +91-8740969452
              </Typography>
              <FooterSocialLinks />
              <FooterNavigation />
            </Box>
          </Grid>
          <Grid xs={12} md={6}>
            <FooterFORM />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
