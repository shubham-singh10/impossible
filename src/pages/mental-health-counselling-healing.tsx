import React, { FC, Fragment } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MentalCardItem } from '@/components/mentalhealth';

const MentalHealth: FC = () => {
    return (
        <Fragment>
            <Header />
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '70vh', // Adjusted height for the background section
                    overflow: 'hidden',
                    backgroundImage:
                        'linear-gradient(180deg, rgba(27, 31, 37, 0) 0%, #1b1f25 100%), url(/images/coaching/b.jpg)',
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover',
                    margin: '0 0 -2px',
                }}
            >
                {/* Overlay Text */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                        color: '#fff',
                        textAlign: 'center',
                        width: '100%',
                        px: 2,
                    }}
                >
                    <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 60 } }}>
                        Mental Health Counselling,<br></br>
                        Mind & Body Healing
                    </Typography>
                </Box>
            </Box>

            {/* Slider Content Section */}
            <Box
                sx={{
                    pt: {
                        xs: 6,
                        md: 8,
                    },
                    pb: {
                        xs: 8,
                        md: 12,
                    },
                    backgroundColor: '#ecf3f3',
                    minHeight: '30vh', // Ensure the section has minimum height
                }}
            >

                <MentalCardItem />

            </Box>
            <Footer />
        </Fragment >
    );
};

export default MentalHealth;
