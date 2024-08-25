import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { iconButtonClasses } from '@mui/material/IconButton';
import { Choose } from '@/interfaces/choose';
import ThumbUp from '@mui/icons-material/ThumbUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PeopleIcon from '@mui/icons-material/People';
import BalanceIcon from '@mui/icons-material/Balance';
import { Typography } from '@mui/material';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface Props {
  item: Choose;
}

// Create a mapping of icon names to components
const iconMap: { [key: string]: React.ComponentType<SvgIconProps> } = {
  ThumbUp,
  CheckCircleOutlineIcon,
  PeopleIcon,
  BalanceIcon,
};

const ChooseCardItem: FC<Props> = ({ item }) => {
  // Retrieve the component based on the item.icon value
  const IconComponent = iconMap[item.icon];

  return (
    <Box
      sx={{
        px: 2,
        py: 4,
        textAlign: 'center', // Centering text and icon horizontally
      }}
    >
      <Box
        sx={{
          p: 3,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
            [`& .${iconButtonClasses.root}`]: {
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              boxShadow: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: 3,
            mb: 2,
          }}
        >
          {IconComponent && <IconComponent sx={{ fontSize: 60 }} />}

        </Box>
        <Box sx={{ mb: 2 }}>
          {/* Adjust title size */}
          <Typography component="h2" variant="h4" sx={{ mb: 2, height: 56, overflow: 'hidden', fontSize: '1.5rem' }}>
            {item.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChooseCardItem;
