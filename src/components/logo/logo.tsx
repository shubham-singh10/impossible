import React, { FC } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick }) => {
  return (
    <Box onClick={onClick}>

      <Image src={"/images/logo.png"} alt='logo' height={60} width={150} />

    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
