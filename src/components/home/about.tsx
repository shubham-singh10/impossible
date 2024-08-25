import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const AboutFeature: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'white', textAlign: 'center', }}>
      <Container>

        <Typography
          variant="h1"
          sx={{ mt: { xs: 0, md: -1 }, mb: 4, fontSize: { xs: 30, md: 48 } }} // Added mb for spacing below the title
        >
          About Us
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <Image src="/images/about/about.png" width={950} height={678} quality={97} alt="about img" />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              iMpossible India- The First Ever One Stop Solution To Your Mental Health, Corporate Training, Coaching, Consulting.
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              iMpi is an innovative venture of experienced and committed team of Counsellors, Mental Health Therapists, Coaches, Corporate Trainers, Industry Experts who offer holistic solutions to the myriad problems faced by individuals and organisations. We provide effective services to ensure individual growth, work efficiency, mental health, physical fitness and emotional well being. Our customer-centric approach provides near perfect long lasting results and solutions.
            </Typography>

            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              Our Vision is to{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Make Life Stress Free <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
            </Typography>


          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutFeature
