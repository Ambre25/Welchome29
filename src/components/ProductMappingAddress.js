// ALGORITHME DE TRI DES PRODUITS PAR CATEGORIE

import React, { useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase-config'
import {  handleCatIcon } from './CategoryIconMapping'
import ProductCardAddress from './ProductCardAdress'

const ProductMappingAddress = ({ opt1, opt2, opt3 }) => {
    const [featuredAddresses, setFeaturedAddresses] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'Adresses'), where(opt1, opt2, opt3));
        getDocs(q).then(querySnapshot => {
            const addresses = [];
            querySnapshot.forEach(doc => {
                addresses.push({
                    name: doc.data().name, 
                    description: doc.data().description,
                    img_url: doc.data().img_url,
                    category: doc.data().category,
                    ville: doc.data().ville,
                    tripAd: doc.data().tripAd,
                    id: doc.id,
                    pid: doc.data().pid,
                });
            });
            setFeaturedAddresses(addresses);
        })
        .catch(error => console.log(error));
    }, [opt1, opt2, opt3]);

    return (
        <>
            {featuredAddresses.map((address) => {
                const catIcon = handleCatIcon(address.category);

                return (
                    <ProductCardAddress key={address.id} name={address.name} city={address.ville} description={address.description} imgUrl={address.img_url} catIcon={catIcon} category={address.category} tripAd={address.tripAd} />
                )
            })}
        </>
    )
};

export default ProductMappingAddress;