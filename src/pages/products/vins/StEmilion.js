// ST EMILION DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function StEmilion() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='St-Emilion Grand cru' 
          title='VIN ROUGE - SAINT-EMILION GRAND CRU AOP - BORDEAUX'
          showAddToCart={true} 
          description="Grande harmonie, richesse et finesse, avec un bouquet de, raisins secs, mûres et baies sauvages, nuancé de notes de pain grillé, moka et légèrement boisé.
                    Puissant mais exceptionnellement bien équilibré, avec une bonne persistance. Très impressionnant.
                    Élevage de 18 mois en fûts de chêne." 
        />
      </BodyPage>
    </>
  )
}