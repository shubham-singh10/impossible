import React, { FC } from 'react';
import { Box, Grid, Typography, IconButton, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const containerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: 28.4595, // Replace with your latitude
    lng: 77.0266, // Replace with your longitude
};

const ContactPage: FC = () => {
    return (
        <Box sx={{ flexGrow: 1, height: '100vh' }}>
            <Grid container>
                {/* Left Side - Google Map */}
                <Grid item xs={12} md={6} sx={{ height: '100%' }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.4761182780726!2d77.04019487494837!3d28.404887044382907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22918f5aedaf%3A0x92adc9c511ceeb9d!2sBestech-Park%20View%20City%201!5e0!3m2!1sen!2sin!4v1724664370474!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Grid>

                {/* Right Side - Contact Info */}
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        background: 'linear-gradient(to top right, #1A237E, #0D47A1)',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 4,
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Contact Info
                    </Typography>

                    <Box sx={{ my: 2 }}>
                        <Typography variant="h6" display="flex" alignItems="center">
                            <LocationOnIcon sx={{ mr: 2 }} /> Our Office
                        </Typography>
                        <Typography>Sector 49, Bestech Park View, Sohna Road, Gurugram</Typography>
                    </Box>

                    <Box sx={{ my: 2 }}>
                        <Typography variant="h6" display="flex" alignItems="center">
                            <AccessTimeIcon sx={{ mr: 2 }} /> Open Office Hours
                        </Typography>
                        <Typography>Mon – Fri: 8AM – 6PM</Typography>
                        <Typography>Sat – Sun: 10AM – 4PM</Typography>
                    </Box>

                    <Box sx={{ my: 2 }}>
                        <Typography variant="h6" display="flex" alignItems="center">
                            <EmailIcon sx={{ mr: 2 }} /> Get in Touch
                        </Typography>
                        <Typography>Info@impossibleindia.com</Typography>
                        <Typography>+91-8740969452</Typography>
                    </Box>

                    {/* Social Icons */}
                    <Box sx={{ mt: 4 }}>
                        <IconButton color="inherit" component={Link} href="#">
                            <FacebookIcon />
                        </IconButton>
                        <IconButton color="inherit" component={Link} href="#">
                            <InstagramIcon />
                        </IconButton>
                        <IconButton color="inherit" component={Link} href="#">
                            <YouTubeIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactPage;
