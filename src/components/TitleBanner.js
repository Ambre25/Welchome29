import { Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import React from 'react'

const TitleBanner = ({ text }) => {
    return (
        <div style={{ backgroundColor: blueGrey[900], color: 'white', fontSize: '1.2rem' }}>
            <Typography 
                variant='h5'
                sx={{
                    fontWeight: 500,
                    letterSpacing: '10px',
                    textAlign: 'center',
                    paddingY: '1.2rem'
                }}
            >
                {text}
            </Typography>
        </div>
    )
}

export default TitleBanner;