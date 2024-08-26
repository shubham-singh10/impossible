import React, { FC, Fragment, useState } from 'react';
import dynamic from 'next/dynamic'
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
const DynamicHomePopularTrust = dynamic(() => import('../home/trust'))

import { data } from '../consulting/consulting.data';

const ConsultingCardItem: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (): void => {
    setOpen(!open);
  };
  return (
    <Fragment>
      <Box sx={{ display: 'flex', flexDirection: "row", px: 2, py: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: "column", gap: 2 }}>
          {/* Sidebar */}
          <Box
            sx={{
              width: '450px',
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
              p: 2,
            }}
          >
            <List component="nav">
              <ListItem button>
                <IconButton>
                  <CircleIcon style={{ color: '#1E88E5', fontSize: '20px' }} />
                </IconButton>
                <ListItemText
                  primary="business consulting"
                  primaryTypographyProps={{
                    style: {
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      textTransform: "uppercase"
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>

          <Box
            sx={{
              width: '450px',
              backgroundColor: '#fff',
              borderRadius: 2,
              p: 2,
              transform: 'scale(1.05)',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',

            }}
          >
            <List component="nav">
              <ListItem button>
                <IconButton>
                  <CircleIcon style={{ color: '#1E88E5', fontSize: '20px' }} />
                </IconButton>
                <ListItemText
                  primary="management consulting"
                  primaryTypographyProps={{
                    style: {
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      textTransform: "uppercase"
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>

          <Box
            sx={{
              width: '450px',
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
              p: 2,
            }}
          >
            <List component="nav">
              <ListItem button>
                <IconButton>
                  <CircleIcon style={{ color: '#1E88E5', fontSize: '20px' }} />
                </IconButton>
                <ListItemText
                  primary="startup consulting"
                  primaryTypographyProps={{
                    style: {
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      textTransform: "uppercase"
                    },
                  }}
                />
              </ListItem>
            </List>
          </Box>

          <Box
            sx={{
              width: '450px',
              backgroundColor: '#c9c1w3',
              borderRadius: 2,
              boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
              p: 2,
            }}
          >
            <List component="nav">
              <ListItem button onClick={handleClick}>
                <ListItemText
                  primary="Other Related Service"
                  primaryTypographyProps={{
                    style: {
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      textTransform: "uppercase"
                    },
                  }}
                />
                <IconButton>
                  <ArrowDownward style={{ color: '#1E88E5', fontSize: '20px', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 1.3s' }} />
                </IconButton>
              </ListItem>
              <Collapse in={open}>
                <List component="div" disablePadding>
                  <ListItem>
                    <IconButton>
                      <CircleIcon style={{ color: '#e9af45', fontSize: '20px' }} />
                    </IconButton>
                    <ListItemText primary="Corporate Training" style={{ color: "orange" }} />
                  </ListItem>
                  <ListItem>
                    <IconButton>
                      <CircleIcon style={{ color: '#e9af45', fontSize: '20px' }} />
                    </IconButton>
                    <ListItemText primary="Counseling & Healing" style={{ color: "orange" }} />
                  </ListItem>
                  <ListItem>
                    <IconButton>
                      <CircleIcon style={{ color: '#e9af45', fontSize: '20px' }} />
                    </IconButton>
                    <ListItemText primary="Consulting" style={{ color: "orange" }} />
                  </ListItem>

                </List>
              </Collapse>
            </List>
          </Box>

        </Box>

        {/* Main Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            p: 5
          }}
        >
          <Typography component="h2" variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            {`“${data.heading}`}
          </Typography>
          <Typography component="h2" variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            {`${data.heading2}”`}
          </Typography>
          <Divider
            sx={{
              width: '2cm',
              backgroundColor: 'orange',
              height: '4px', // Adjust the thickness to make it bold
              borderRadius: '2px', // Optional: to make the divider edges rounded
              my: 2, // Optional: to add vertical spacing around the divider
            }}
          />
          <Typography component="h3" variant="h5" sx={{ mb: 2, fontWeight: 800 }}>
            {data.header}
          </Typography>
          <Typography
            component={"p"}
            sx={{
              mb: 2,
              color: 'gray',
              textAlign: 'justify',
              paddingBottom: "1rem",
              lineHeight: "2rem"
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
      </Box>

      <Box
        sx={{
          background: 'linear-gradient(to bottom, #1e075f, #1f4ca7)',
          padding: '50px 0',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ marginBottom: '8px' }}>
          Try Our Trademarked Process
        </Typography>
        <Divider
          sx={{
            width: '2cm',
            backgroundColor: 'orange',
            height: '4px',
            borderRadius: '2px',
            margin: '0 auto', // Center the divider
            marginTop: '20px', // Add space below the divider
          }}
        />
        <Grid container spacing={4} justifyContent="center" alignItems="flex-end" marginTop={"5rem"}>
          {[
            { title: 'RESEARCH & ANALYSIS', zIndex: 1, translate: 'translateY(30px)', scale: 0.9 },
            { title: 'ROADMAP PLANNING', zIndex: 2, translate: 'translateY(-30px)', scale: 1.1 },
            { title: 'EXECUTE & MONITOR', zIndex: 1, translate: 'translateY(30px)', scale: 0.9 },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ transform: item.translate, zIndex: item.zIndex }}>
              <Card
                sx={{
                  minHeight: 250,
                  transform: `scale(${item.scale})`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
                  borderRadius: '8px',
                  padding: '20px',
                  position: 'relative',
                  backgroundColor: '#fff',
                }}
              >
                <CardContent style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Avatar
                    sx={{
                      backgroundColor: '#1f4ca7',
                      width: 56,
                      height: 56,
                      marginBottom: '20px',
                    }}
                  >
                    <SquareOutlined sx={{ color: 'white', fontSize: '28px' }} />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
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

export default ConsultingCardItem;
