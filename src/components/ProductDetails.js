// ALGORITHME DE TRI DES PRODUITS PAR CATEGORIE

import React, { useContext, useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase-config'
import { Button, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { blueGrey, grey } from '@mui/material/colors'
import QuantityControl from './QuantityControl'
import { CartContext } from './CartContext'
import { calculateDiscountedPrice } from './ProductCard'

let theme = createTheme()
theme = responsiveFontSizes(theme)

const theme2 = createTheme({
    typography: {
        fontFamily: 'Dancing Script, cursive', // Remplacez 'MaPolice' par le nom de la police que vous voulez utiliser
    },
});


const ProductDetails = ({ productName, title, description, showAddToCart, showTypo  }) => {

    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const q = query(collection(db, 'Products'), where('name', '==', productName));
        getDocs(q).then(querySnapshot => {
            const products = [];
            querySnapshot.forEach(doc => {
                products.push({
                    name: doc.data().name,
                    price: doc.data().price,
                    prix: doc.data().prix,
                    img_url: doc.data().img_url,
                    hasPromotion: doc.data().hasPromotion,
                    partner: doc.data().partner,
                });
            });
            setFeaturedProducts(products);
        })
        .catch(error => console.log(error));
    }, [productName]);

    const renderPrice = (product) => {
        if (product.hasPromotion) {
            return (
                <div>
                    <span style={{ textDecoration: 'line-through', fontWeight: 'bold', color: 'red' }}>{product.price}</span>
                    {' '}
                    <span style={{ color: 'green', fontWeight: 'bold' }}>{calculateDiscountedPrice(product.price, product.hasPromotion)}</span>
                </div>
            );
        } else {
            return <strong>{product.price}</strong>;
        }
    };

    const handleAddToCart = (product) => {
        const newPriceAfterPromotionStr = calculateDiscountedPrice(product.price, product.hasPromotion);
        const newPriceAfterPromotion = parseFloat(newPriceAfterPromotionStr.replace(' €', '')); // Convertir la chaîne en nombre
        const productToAdd = { ...product, newPriceAfterPromotion, quantity };
        if (productToAdd.hasPromotion === undefined) {
            delete productToAdd.hasPromotion;
        }

        addToCart(productToAdd);
    };

    return (
        <>
            {featuredProducts.map((product, index) => {
                return (
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px', paddingInline: '5%' }} key={index}>
                         <img src={product.img_url} alt={product.name} style={{ borderRadius: '70px', width: 450, height: 450 }} />
                         <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <ThemeProvider theme={theme}>
                                <Typography variant='h5' sx={{ textTransform: 'uppercase', letterSpacing: '5px', fontWeight: 900, color: grey[700] }}>
                                    {title}
                                </Typography>
                                <ThemeProvider theme={theme2}>
                                    <Typography variant='h6' style={{ fontWeight: 'bold' }}>
                                        <strong>{product.partner}</strong>
                                    </Typography>
                                </ThemeProvider>
                                <br />
                                <Typography variant='h5' sx={{ letterSpacing: '5px', fontWeight: 900 }}>
                                    {renderPrice(product)}
                                </Typography>
                                <br />
                                <br />
                                <Typography variant='body' sx={{ maxWidth: 500, color: grey[700], fontWeight: 500, lineHeight: '35px' }}>
                                    {description}
                                </Typography>
                                <br />
                                <br />
                                {showAddToCart && (
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <QuantityControl quantity={quantity} setQuantity={setQuantity} />
                                        <Button 
                                            variant='contained' 
                                            sx={{ 
                                                bgcolor: blueGrey[900], 
                                                color: 'white', 
                                                paddingY: '0.8rem', 
                                                marginLeft: '25px' 
                                            }}
                                            onClick={() => handleAddToCart({ id: product.name, ...product, quantity })}
                                        >
                                            Ajouter au panier
                                        </Button>
                                    </div>
                                )}
                                <br />
                                <br />
                                {showTypo && (
                                    <Typography variant='body' sx={{ maxWidth: 500, color: grey[700], fontWeight: 500, lineHeight: '35px', fontStyle: 'italic' }}>
                                        * Photo non contractuelle
                                    </Typography>
                                )}
                            </ThemeProvider>
                         </div>
                    </div>
                )
            })}
        </>
    )
};

export default ProductDetails;