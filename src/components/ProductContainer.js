// CONTENEUR PRODUITS

import { Box } from '@mui/material'
import React from 'react'

const ProductContainer = ({ children }) => {
  return (
    <Box maxWidth='100%' sx={{ display: 'flex', justifyContent: 'center', gap: '100px', flexWrap: 'wrap' }}>
        {children}
    </Box>
  )
}

export default ProductContainer;