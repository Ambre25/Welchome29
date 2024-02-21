// ALGORITHME DE TRI DES PRODUITS PAR CATEGORIE

import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase-config'
import {  handleCatIcon } from './CategoryIconMapping'
import ProductCardLoisir from './ProductCardLoisir'

const ProductMappingLoisirs = ({ opt1, opt2, opt3 }) => {
    const [featuredLoisirs, setFeaturedLoisirs] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'Loisirs'), where(opt1, opt2, opt3));
        getDocs(q).then(querySnapshot => {
            const loisirs = [];
            querySnapshot.forEach(doc => {
                loisirs.push({
                    name: doc.data().name, 
                    description: doc.data().description,
                    img_url: doc.data().img_url,
                    price: doc.data().price,
                    ville: doc.data().ville,
                    category: doc.data().category,
                    prix: doc.data().prix,
                    id: doc.id,
                    pid: doc.data().pid,
                });
            });
            setFeaturedLoisirs(loisirs);
        })
        .catch(error => console.log(error));
    }, [opt1, opt2, opt3]);

    return (
        <>
            {featuredLoisirs.map((loisir) => {
                const catIcon = handleCatIcon(loisir.category);

                return (
                    <ProductCardLoisir key={loisir.id} name={loisir.name} city={loisir.ville} description={loisir.description} imgUrl={loisir.img_url} catIcon={catIcon} category={loisir.category} />
                )
            })}
        </>
    )
};

export default ProductMappingLoisirs;