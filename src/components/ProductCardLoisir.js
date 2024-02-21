// CARTE PRODUIT

import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ name, description, imgUrl, city, catIcon}) => { 

    const navigate = useNavigate();
    
    function redirectLink() {
        navigate(`/${name}`);
    }

    return (
        <Card
            sx={{
                maxWidth: 350,
                minWidth: 350,
                height: 400,
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                borderRadius: '30px',
                cursor: 'pointer',
            }}
            onClick={redirectLink}
        >
            <CardHeader
                action={
                    <>
                        {catIcon}
                    </>
                }
                title={name}
                subheader={city}
            />
            <CardMedia
                component='img'
                height='194'
                image={imgUrl}
                alt={name}
            />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductCard;