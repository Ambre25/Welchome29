// ALGORITHME DE TRI DES PRODUITS PAR CATEGORIE

import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase-config'
import ProductCard from './ProductCard';
import { handleCatIcon } from './CategoryIconMapping';

const ProductMapping = ({ opt1, opt2, opt3, showCategoryIcon, showAddToCartIcon }) => {
    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'Products'), where(opt1, opt2, opt3));
        getDocs(q).then(querySnapshot => {
            const products = [];
            querySnapshot.forEach(doc => {
                products.push({
                    name: doc.data().name, 
                    description: doc.data().description,
                    img_url: doc.data().img_url,
                    price: doc.data().price,
                    category: doc.data().category,
                    prix: doc.data().prix,
                    id: doc.id,
                    pid: doc.data().pid,
                    partner: doc.data().partner,
                    hasPromotion: doc.data().hasPromotion,
                });
            });
            setFeaturedProducts(products);
        })
        .catch(error => console.log(error));
    }, [opt1, opt2, opt3]);

    return (
        <>
            {featuredProducts.map((product) => {
                const catIcon = handleCatIcon(product.category);

                return (
                    <ProductCard 
                        key={product.id} 
                        name={product.name} 
                        price={product.price} 
                        description={product.description} 
                        imgUrl={product.img_url} 
                        catIcon={catIcon} 
                        category={product.category}
                        showCategoryIcon={showCategoryIcon}
                        showAddToCartIcon={showAddToCartIcon}
                        partner={product.partner}
                        hasPromotion={product.hasPromotion}
                    />
                )
            })}
        </>
    )
};

export default ProductMapping;