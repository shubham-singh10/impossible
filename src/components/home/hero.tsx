import React, { FC } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Typography from '@mui/material/Typography';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'We help you to start and never quit” - Coaching with iMpi',
    imgPath: '/images/home/1.jpg',
  },
  {
    label: 'Upgrade your Skills, modify your Dreams” - Training and Workshops with iMpi',
    imgPath: '/images/home/2.jpg',
  },
  {
    label: 'Grow with us like never before” - Consulting with iMpi',
    imgPath: '/images/home/3.jpg',
  },
  {
    label: 'Learn how to take charge of your emotions & act” - Counselling & Mental Health Therapy with iMpi',
    imgPath: '/images/home/4.jpg',
  },
];

const HomeHero: FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number): void => {
    setActiveStep(step);
  };

  return (
    <Box id="hero" sx={{ position: 'relative', overflow: 'hidden', width: '100vw' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 && (
              <Box
                component="img"
                sx={{
                  width: '100vw',
                  height: '100vh',
                  objectFit: 'cover',
                  display: 'block',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            )}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}
        >
          {images[activeStep].label}
        </Typography>
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default HomeHero;
