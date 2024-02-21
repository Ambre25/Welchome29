import { Box, Typography } from '@mui/material';
import React from 'react'

const PartnerDetail=({ title, city, description, img_url, link }) => {
  return (
    <>
        <Box sx={{ display: 'flex', flexDirection: {xs: 'column', sm: 'row'},alignItems: 'center', width: '100%', justifyContent: 'center', gap: '25px', textAlign: {xs: 'center', sm: 'left'} }}>
            <img src={img_url} alt={title} style={{ width: 250, height: 250, borderRadius: '20px', boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', margin: {xs: '0 auto', sm: '0'} }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: {xs: '80%', sm: '40%'}, width: '100%' }}>
                <Typography variant='h4' sx={{ textTransform: 'uppercase' }}>
                    {title}
                </Typography>
                <Typography variant='h5' sx={{ color: 'grey' }}>
                    {city}
                </Typography>
                <br />
                <Typography variant='body1'>
                    {description}
                </Typography>
                <br />
                <a href={link} target='_blank' rel='noreferrer noopener' style={{ textDecoration: 'none', color: '#3089E1' }}>VISITER LE SITE DU PARTENAIRE</a>
            </Box>
        </Box>
    </>
  )
}

export default PartnerDetail;