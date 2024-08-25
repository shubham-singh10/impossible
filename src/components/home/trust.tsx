import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { data } from './popular-trust.data';
import TrustCardItem from '../trust/trust-card-item';


const HomePopularTrust: FC = () => {

  return (
    <Box
      id="popular-course"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: 'background.default',
        textAlign: 'center', // Centering the text horizontally
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          sx={{ mt: { xs: 0, md: -5 }, mb: 4, fontSize: { xs: 30, md: 48 } }} // Added mb for spacing below the title
        >
          Who Trusted us
        </Typography>

        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={12} md={3} key={item.id}>
              <TrustCardItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePopularTrust;
