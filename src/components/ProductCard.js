// CARTE PRODUIT

import { Avatar, Card, CardContent, CardHeader, CardMedia, Tooltip, Typography, createTheme } from '@mui/material'
import React from 'react'
import { blue, blueGrey, green, orange, red } from '@mui/material/colors'
import { useNavigate } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import '../styles/ruban.css'

const theme = createTheme({
    typography: {
        fontFamily: 'Dancing Script, cursive', // Remplacez 'MaPolice' par le nom de la police que vous voulez utiliser
    },
});

function calculateDiscountedPrice(originalPrice, discountString) {
    console.log('Original Price:', originalPrice); // Affiche le prix original
    console.log('Discount String:', discountString); // Affiche la chaîne de réduction

    const originalPriceValue = parseFloat(originalPrice.replace(' €', '').replace(',', '.'));

    if (!isNaN(originalPriceValue)) {
        // Vérifiez que discountString est défini et est de type string
        if (discountString && typeof discountString === 'string' && discountString.endsWith('%')) {
            const discountPercentage = Math.abs(parseFloat(discountString.replace('%', '').replace(',', '.'))); // Prendre la valeur absolue de la remise
            if (!isNaN(discountPercentage)) {
                const discountedPrice = originalPriceValue - (originalPriceValue * discountPercentage / 100);
                return `${discountedPrice.toFixed(2)} €`;
            }
        }
    }

    return originalPrice; // En cas de valeurs non valides, retournez le prix initial
}

const ProductCard = ({ name, price, description, imgUrl, catIcon, category, showCategoryIcon, partner, hasPromotion}) => {

    const categoryColors = {
        'fdm': blue[500],
        'apero': red[500],
        'fel': green[500],
        'vins': '#5f0937',
        'ptitdej': orange[500],
        'takeaway': blueGrey[800],
    };

    const categoriesLink = {
        'fdm': 'Fruits de mer',
        'apero': 'Apéro',
        'fel': 'Fruits et légumes',
        'vins': 'Vins',
        'takeaway': 'Plats préparés',
    }

    const avatarColor = categoryColors[category];
    const linkCat = categoriesLink[category];
    const navigate = useNavigate();
    
    function redirectLink(event) {
        event.stopPropagation();
        navigate(`/${name}`);
    }

    function redirectCat(event) {
        event.stopPropagation();
        navigate(`/${linkCat}`);
    }

    const descriptionWords = description.split(' ');
    const shortDescriptionWords = descriptionWords.slice(0, 20);
    const shortDescription = shortDescriptionWords.join(' ') + (descriptionWords.length > 20 ? '...' : '');

    return (
        <Card
            sx={{
                width: 350,
                height: 400,
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                borderRadius: '30px',
                cursor: 'pointer',
                position: 'relative'
            }}
            onClick={redirectLink}
            className='promotion-card'
        >
            <CardHeader
                avatar={
                    showCategoryIcon && (
                        <Tooltip title='Accéder à la catégorie'>
                            <Avatar
                                sx={{
                                    bgcolor: avatarColor,
                                    cursor: 'pointer'
                                }}
                                aria-label='recipe'
                                onClick={redirectCat}
                            >
                                {catIcon}
                            </Avatar>
                        </Tooltip>
                    )
                }
                title={name}
                subheader={
                    hasPromotion ? (
                        <div>
                            <span style={{ textDecoration: 'line-through', fontWeight: 'bold', color: red[500] }}>{price}</span>
                            {' '}
                            <span style={{ color: green[700], fontWeight: 'bold' }}>{calculateDiscountedPrice(price, hasPromotion)}</span>
                        </div>
                    ) : (
                        <strong>{price}</strong>
                    )
                }
            />
            <CardMedia
                component='img'
                height='194'
                image={imgUrl}
                alt={name}
            />
            <CardContent>
                <ThemeProvider theme={theme}>
                    <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                        <strong>{partner}</strong>
                    </Typography>
                </ThemeProvider>
                <Typography variant='body2' color='text.secondary'>
                    {shortDescription}
                </Typography>
            </CardContent>
            {hasPromotion && (
                <div className="ribbon-wrapper">
                    <div className="ribbon" style={{ backgroundColor: categoryColors[category] }}>
                        {hasPromotion}
                    </div>
                </div>
            )}
        </Card>
    )
}

export default ProductCard;
export { calculateDiscountedPrice };