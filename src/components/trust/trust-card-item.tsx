import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import { Trust } from '@/interfaces/trust'

interface Props {
  item: Trust
}

const TrustCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 1,
      }}
    >
      <Box
        sx={{
          lineHeight: 0,
          overflow: 'hidden',
          borderRadius: 1,
          mb: 1,
        }}
      >
        <Image src={item.img} alt='trust' height={100} width={100} />
      </Box>
    </Box>
  )
}

export default TrustCardItem
