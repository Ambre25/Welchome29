import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const SkeletonArticleBlog = ({ title, subtitle, img_url, text, icon1, textIcon1, icon2, textIcon2, icon3, textIcon3, icon4, textIcon4, icon5, textIcon5, icon6, textIcon6}) => {
  return (
    <Container maxWidth='lg' sx={{ paddingTop: '24px', marginTop: '50px', marginBottom: '100px' }}>
        <Typography variant='h4' sx={{ fontWeight: 800 }}>
            {title}
        </Typography>
        <Typography variant='h6' sx={{ fontWeight: 600, color: 'lightgray' }}>
            {subtitle}
        </Typography>
        <div style={{ width: '100%', overflow: 'hidden', marginTop: '25px', maxWidth: '500px' }}>
            <img src={img_url} alt={title} style={{ width: '100%', height: 'auto', borderRadius: '20px' }} />
        </div>
        <div style={{ marginTop: '50px' }}>
            <Typography variant='body' sx={{ fontWeight: 600 }}>
                {text}
            </Typography>
        </div>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '50px', gap: '15px' }}>
            <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                {icon1}
                <Typography variant='body2' color='grey'>
                    {textIcon1}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                {icon2}
                <Typography variant='body2' color='grey'>
                    {textIcon2}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                {icon3}
                <Typography variant='body2' color='grey'>
                    {textIcon3}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                {icon4}
                <Typography variant='body2' color='grey'>
                    {textIcon4}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                {icon5}
                <Typography variant='body2' color='grey'>
                    {textIcon5}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
                {icon6}
                <Typography variant='body2' color='grey'>
                    {textIcon6}
                </Typography>
            </Box>
        </Box>
    </Container>
  )
}

export default SkeletonArticleBlog;