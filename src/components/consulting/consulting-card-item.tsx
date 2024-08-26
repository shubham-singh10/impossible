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
import { ArrowDownward } from '@mui/icons-material';
import { Collapse, Grid } from '@mui/material';
const DynamicHomePopularTrust = dynamic(() => import('../../components/home/trust'))

import { data } from '../consulting/consulting.data';
import Link from 'next/link';

const services = [
  { name: 'Corporate Training', path: '/#' },
  { name: 'Coaching', path: '/business-coaching' },
  { name: 'Consulting', path: '/business-management-consulting' },
];

const ConsultingCardItem: FC = () => {
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
                p: 2,
                transform: { xs: 'scale(1)', md: 'scale(1.05)' },
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
              }}>
                <List component="nav">
                  <ListItem button>
                    <IconButton>
                      <CircleIcon style={{ color: '#1E88E5', fontSize: '20px' }} />
                    </IconButton>
                    <ListItemText primary="management consulting" primaryTypographyProps={{
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
                    <ListItemText primary="startup consulting" primaryTypographyProps={{
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
                    <ListItemText primary="Other Related Service" primaryTypographyProps={{
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
                      {services.map(({ name, path }) => (
                        <ListItem key={name} component="div">
                          <Link href={path} passHref>
                            <IconButton>
                              <CircleIcon style={{ color: '#e9af45', fontSize: '20px' }} />
                            </IconButton>
                          </Link>
                          <Link href={path} passHref>
                            <ListItemText primary={name} style={{ color: "orange", cursor: 'pointer' }} />
                          </Link>
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
              <Typography
                component="button"
                sx={{
                  mb: 2,
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
          </Grid>
        </Grid>
      </Box>


      <DynamicHomePopularTrust />
    </Fragment>
  );
};

export default ConsultingCardItem;
