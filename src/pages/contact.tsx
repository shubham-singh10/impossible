import React, { FC, Fragment } from 'react';
import { Header } from '@/components/header';
import dynamic from 'next/dynamic'
import { Footer } from '@/components/footer';
import { Box, Container, Grid, Typography } from '@mui/material';
const DynamicHomePopularTrust = dynamic(() => import('../components/home/trust'))
const Contact: FC = () => {
    return (
        <Fragment>
            <Header />

            <Container sx={{ my: 4 }}>
                <Grid container spacing={4} sx={{ mb: 4 }}>
                    {/* Google Map Column */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: '400px',
                                width: '100%',
                                border: '1px solid #ddd',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.4761182780726!2d77.04019487494837!3d28.404887044382907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22918f5aedaf%3A0x92adc9c511ceeb9d!2sBestech-Park%20View%20City%201!5e0!3m2!1sen!2sin!4v1724664370474!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"></iframe>

                        </Box>
                    </Grid>

                    {/* Contact Details Column */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                p: 3,
                                height: '100%',
                                border: '1px solid #ddd',
                                borderRadius: '12px',
                                boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                                backgroundColor: '#4587ff',
                                color: '#fff'
                            }}
                        >
                            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#fff', textAlign: 'center', borderBottom: '2px solid #fff', borderBottomWidth: "2" }}>
                                Contact Us
                            </Typography>
                            <u><h3>Our Office</h3></u>
                            <Typography variant="body1" sx={{ mb: 2, color: '#fff' }}>
                                Sector 49, Bestech Park View, Sohna Road, Gurugram
                            </Typography>

                            <u><h3>Get in touch</h3></u>
                            <Typography variant="body1" sx={{ mb: 2, color: '#fff' }}>
                                +91-8740969452
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2, color: '#fff' }}>
                                Info@impossibleindia.com
                            </Typography>
                            <u><h3>Open Office Hours</h3></u>
                            <Typography variant="body1" sx={{ color: '#fff' }}>
                                Monday to Friday, 8:00 AM - 6:00 PM <br />
                                Saturday to Sunday, 10:00 AM - 4:00 PM
                            </Typography>
                        </Box>
                    </Grid>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1',
                        marginTop: '10px',
                        marginLeft: '20px'
                    }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '50px', color: 'blue' }}>
                            Call: +91-8740969452
                        </Typography>

                        <Typography sx={{ fontWeight: 'bold', fontSize: '40px', color: 'gray' }}>
                            We can&apos;t wait to make your ideas a reality
                        </Typography>
                    </Box>

                </Grid>
            </Container>
            <DynamicHomePopularTrust />
            <Footer />
        </Fragment>
    );
};

export default Contact;
