// CONTENEUR DESCRIPTION VISITES

import { Box, Typography } from '@mui/material'
import React from 'react'
import Paragraph from './Paragraph'

const VisitesContainer = ({ title, img_url, img_url_alt, paragraphs, reverseOrder }) => {
    return (
        <>
            <Typography variant='h5' sx={{ marginTop: '50px', textAlign: 'center' }}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '25px', flexWrap: 'wrap' }}>
                <Box sx={{ order: reverseOrder ? 2 : 1 }}>
                    <img src={img_url} alt={img_url_alt} style={{ borderRadius: '20px' }} />
                </Box>
                <Box sx={{ maxWidth: 600, order: reverseOrder ? 1 : 2 }}>
                    {paragraphs.map((paragraph, index) => (
                        <Paragraph key={index} text={paragraph} />
                    ))}
                </Box>
            </Box>
            <hr style={{ background: 'grey', height: '3px', border: 'none', width: '70%', marginTop: '25px' }} />
        </>
    )
}

export default VisitesContainer;