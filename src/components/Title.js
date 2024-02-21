// TITRES DES ENSEMBLES PRODUITS

import { ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Title = ({ text }) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: 'fit-content', margin: '0 auto' }}>
        <Typography
          variant='h5'
          sx={{
            fontWeight: 500,
            letterSpacing: '3px',
            textAlign: 'center',
            border: '3px solid black',
            borderRadius: '40px',
            paddingX: '1.5rem',
            paddingY: '1rem'
          }}
        >
          {text}
        </Typography>
      </div>
    </ThemeProvider>
  );
};

export default Title;