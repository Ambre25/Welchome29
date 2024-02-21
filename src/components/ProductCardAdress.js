// CARTE PRODUIT

import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { teal } from '@mui/material/colors'

const ProductCardAddress = ({ name, description, imgUrl, catIcon, city, tripAd}) => {

    const cardRef = useRef(null);

    useEffect(() => {
        const handleClick = () => {
            window.open(tripAd, '_blank');
        };

        const cardElement = cardRef.current;
        cardElement.addEventListener('click', handleClick);

        return () => {
            cardElement.removeEventListener('click', handleClick);
        };
    }, [tripAd]);

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
            ref={cardRef}
        >
            <CardHeader
                avatar={
                    <Tooltip>
                        <Avatar
                            sx={{
                                bgcolor: teal[500]
                            }}
                            aria-label='recipe'
                        >
                            {catIcon}
                        </Avatar>
                    </Tooltip>
                }
                action={
                    <>
                        <Tooltip
                            title="Voir sur Trip Advisor"
                            sx={{
                                cursor: 'pointer'
                            }}
                        >
                            <IconButton>
                                <ChevronRightIcon />
                            </IconButton>
                        </Tooltip>
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

export default ProductCardAddress;