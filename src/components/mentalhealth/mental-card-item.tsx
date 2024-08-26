import React, { FC, Fragment, useState } from 'react';
import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CircleIcon from '@mui/icons-material/Circle';
import { ArrowDownward, SquareOutlined } from '@mui/icons-material';
import { Avatar, Card, CardContent, Collapse, Grid } from '@mui/material';
const DynamicHomePopularTrust = dynamic(() => import('../home/trust'));

import { data } from '../mentalhealth/mental.data';

const MentalCardItem: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (): void => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <Box sx={{ px: 2, py: 3 }}>
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: "column", gap: 2 }}>
              <Box sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                p: 2,
              }}>
                <List component="nav">
                  <ListItem button>
                    <IconButton>
                      <CircleIcon style={{ color: '#1E88E5', fontSize: '20px' }} />
                    </IconButton>
                    <ListItemText primary="Performance Booster Sessions" primaryTypographyProps={{
                      style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textTransform: "uppercase" },
                    }} />
                  </ListItem>
                </List>
              </Box>

              <Box sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                p: 2,
                transform: { xs: 'scale(1)', md: 'scale(1.05)' },
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
              }}>
                <List component="nav">
                  <ListItem button>
                    <IconButton>
                      <CircleIcon style={{ color: '#1E88E5', fontSize: '20px' }} />
                    </IconButton>
                    <ListItemText primary="Mind & Body Healing Sessions" primaryTypographyProps={{
                      style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textTransform: "uppercase" },
                    }} />
                  </ListItem>
                </List>
              </Box>

              <Box sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                p: 2,
              }}>
                <List component="nav">
                  <ListItem button>
                    <IconButton>
                      <CircleIcon style={{ color: '#1E88E5', fontSize: '20px' }} />
                    </IconButton>
                    <ListItemText primary="Communication & Relationship Sessions" primaryTypographyProps={{
                      style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textTransform: "uppercase" },
                    }} />
                  </ListItem>
                </List>
              </Box>

              <Box sx={{
                backgroundColor: 'transparent',
                borderRadius: 2,
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
                p: 2,
              }}>
                <List component="nav">
                  <ListItem button onClick={handleClick}>
                    <ListItemText primary="Other Related Service" primaryTypographyProps={{
                      style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', textTransform: "uppercase" },
                    }} />
                    <IconButton>
                      <ArrowDownward style={{
                        color: '#1E88E5', fontSize: '20px',
                        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 1.3s'
                      }} />
                    </IconButton>
                  </ListItem>
                  <Collapse in={open}>
                    <List component="div" disablePadding>
                      {['Corporate Training', 'Coaching', 'Consulting'].map((service) => (
                        <ListItem key={service}>
                          <IconButton>
                            <CircleIcon style={{ color: '#e9af45', fontSize: '20px' }} />
                          </IconButton>
                          <ListItemText primary={service} style={{ color: "orange" }} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </List>
              </Box>
            </Box>
          </Grid>

          {/* Main Content Area */}
          <Grid item xs={12} md={8}>
            <Box sx={{ p: { xs: 2, md: 5 } }}>
              <Typography component="h2" variant="h2" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                {`“${data.heading}`}
              </Typography>
              <Typography component="h2" variant="h2" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                {`${data.heading2}”`}
              </Typography>
              <Divider sx={{
                width: '2cm',
                backgroundColor: 'orange',
                height: '4px',
                borderRadius: '2px',
                my: 2,
              }} />
              <Typography component="h3" variant="h5" sx={{ mb: 2, fontWeight: 800 }}>
                {data.header}
              </Typography>
              <Typography component={"p"} sx={{
                mb: 2, color: 'gray', textAlign: 'justify', paddingBottom: "1rem", lineHeight: "2rem",
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}>
                {data.description}
              </Typography>
              <Typography component={"p"} sx={{
                mb: 2, color: 'gray', textAlign: 'justify', paddingBottom: "1rem", lineHeight: "2rem",
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}>
                {data.description2}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{
        padding: { xs: '30px', sm: '50px' },
        marginTop: { xs: '-50px' },
        color: 'gray',
        textAlign: 'justify',
      }}>
        <h3 style={{ color: "black" }}>Issues We Address </h3>
        <p>People come to counselling when their attempts to deal with their concerns are no longer effective. It can be helpful in areas such as:</p>

        <ul>
          <li>Anger management</li>
          <li>Anxiety, fear</li>
          <li>Communication Issues</li>
          <li>Depression</li>
          <li>Eating disorders</li>
          <li>Grief</li>
          <li>Relationship difficulties including personal and professional.</li>
          <li>Sexual assault and Sexual Issues</li>
          <li>Stress management</li>
          <li>Thoughts of suicide or preoccupation with death</li>
          <li>Trauma</li>
          <li>Career and Goal Setting</li>
          <li>Business or Job related Issues</li>
        </ul>

        <h3 style={{ color: "black" }}>Our Sessions Caters</h3>
        <ul>
          <li>Individuals (Children, adolescents, adults)</li>
          <li>Couples</li>
          <li>Families</li>
          <li>Organizations (Corporate, SMEs, Govt./Private etc.)</li>
          <li>Patients</li>
        </ul>

        <h3 style={{ color: "black" }}>Other Counselling Supportive Services available online</h3>
        <ul>
          <li>Yoga & Meditation</li>
          <li>Legal Consultation</li>
          <li>Financial Consultation</li>
          <li>Medical Consultation</li>
          <li>Health and Nutrition Consultation</li>
          <li>Fitness Consultation</li>
          <li>Sexologist Consultation</li>
          <li>Neurolinguistic Programming Consultation</li>
          <li>Astrology & Vastushastra Consultation</li>
        </ul>

        <h3 style={{ color: "black" }}>Mind & Body Healing Sessions</h3>

        <p>Our special therapy sessions help people and patients restore their health from an unbalanced and diseased state. Our team of highly expert healers have successfully treated thousands of patients having Insomnia, Anxiety, Diabetes, Heart Ailments, Incurable body pains, Neurological Disorders, Cancer, etc. through various healing techniques used worldwide.</p>

        <Typography
          component="button"
          sx={{
            mb: 2,
            mt: 4,
            color: 'white',
            textAlign: 'center',
            padding: "1rem",
            alignItems: "center",
            backgroundColor: '#0c71c3',
            cursor: 'pointer',
            transition: 'color 0.3s ease',
            fontSize: '1.25rem',
            fontWeight: '800',
            border: 'none',
            display: 'inline-flex',
            justifyContent: 'center',
            gap: '0.50rem',
            '&:hover': {
              color: 'gold',
            },
          }}
        >
          {data.buttonName}
        </Typography>
      </Box>

      <Box sx={{
        background: 'linear-gradient(to bottom, #1e075f, #1f4ca7)',
        padding: '50px 0',
        color: 'white',
        textAlign: 'center',
      }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: '8px' }}>
          Try Our Trademarked Process
        </Typography>
        <Divider sx={{
          width: '2cm',
          backgroundColor: 'orange',
          height: '4px',
          borderRadius: '2px',
          margin: '0 auto',
          marginTop: '20px',
        }} />

        <Grid container spacing={4} justifyContent="center" alignItems="flex-end" marginTop={"5rem"}>
          {[
            { title: 'RESEARCH & ANALYSIS', zIndex: 1, translate: 'translateY(30px)', scale: 0.9 },
            { title: 'ROADMAP PLANNING', zIndex: 2, translate: 'translateY(-30px)', scale: 1.2 },
            { title: 'EXECUTE & MONITOR', zIndex: 1, translate: 'translateY(30px)', scale: 0.9 },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{
              transform: item.translate,
              zIndex: item.zIndex,
              // Make the scaling uniform for small screens
              '@media (max-width: 600px)': {
                transform: 'scale(0.9)',
              }
            }}>
              <Card sx={{
                minHeight: 250,
                transform: `scale(${item.scale})`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
                borderRadius: '8px',
                padding: '20px',
                backgroundColor: '#fff',
                color: '#000',
                // Ensure the card is responsive
                width: '100%',
                maxWidth: '400px',
              }}>
                <CardContent>
                  <Avatar sx={{
                    backgroundColor: '#f4b91f',
                    width: 56,
                    height: 56,
                    marginBottom: '20px',
                  }}>
                    <SquareOutlined />
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>



      </Box>

      <DynamicHomePopularTrust />
    </Fragment>
  );
};

export default MentalCardItem;
