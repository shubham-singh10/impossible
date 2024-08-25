import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { iconButtonClasses } from '@mui/material/IconButton'
import { Knowledege } from '@/interfaces/knowledge'

interface Props {
  item: Knowledege
}

const KnowledgeCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 4,
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
          dangerouslySetInnerHTML={{ __html: item.link }}
        >
        </Box>

      </Box>
    </Box>
  )
}

export default KnowledgeCardItem
