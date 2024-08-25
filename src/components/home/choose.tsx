import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { data } from './popular-choose.data';
import { ChooseCardItem } from '../choose';


const HomePopularChoose: FC = () => {

  return (
    <Box
      id="popular-course"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: 'white',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          sx={{ mt: { xs: 0, md: -5 }, mb: 4, fontSize: { xs: 30, md: 48 } }} // Added mb for spacing below the title
        >
          Why Choose{""}  <Typography
            component="mark"
            sx={{
              position: 'relative',
              color: 'primary.main',
              fontSize: 'inherit',
              fontWeight: 'inherit',
              backgroundColor: 'unset',
            }}
          > iMpossible India</Typography>
        </Typography>

        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={12} md={3} key={item.id}>
              <ChooseCardItem item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePopularChoose;

