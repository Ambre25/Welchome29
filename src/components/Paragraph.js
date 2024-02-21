// PARAGRAPH VISITS DETAILS

import { Typography } from '@mui/material'
import React from 'react'

const Paragraph = ({ text }) => {
    return (
        <Typography variant='body1' sx={{ alignSelf: 'center', marginLeft: '15px' }}>
            {text}<br /><br />
        </Typography>
    )
}

export default Paragraph;