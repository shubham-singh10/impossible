import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Mentor } from '@/interfaces/mentor'

interface Props {
  item: Mentor
}

const TeamCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 5,
      }}
    >
      <Box
        sx={{
          p: 2,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            lineHeight: 0,
            overflow: 'hidden',
            borderRadius: '50%', // Make the container a perfect circle
            width: 150, // Set a fixed width
            height: 150, // Set a fixed height to make the container square
            mx: 'auto', // Center the avatar horizontally
            mb: 2,
          }}
        >
          <Image
            src={item.photo as string}
            width={150}
            height={150}
            alt={'Team ' + item.id}
            style={{ borderRadius: '50%' }} // Apply rounded corners to the image itself
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography component="h2" textAlign={"center"} variant="h4" sx={{ fontSize: '1.4rem' }}>
            {item.name}
          </Typography>
          <Typography textAlign={"center"} sx={{ mb: 2, color: 'text.secondary' }}>{item.category}</Typography>
          <Typography sx={{ mb: 2, color: 'text.secondary' }} variant="subtitle1">
            {item.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
export default TeamCardItem
