// CHÂTEAU DORLEAC DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Dorleac() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Château Dorléac' 
          title='GRAVES ROUGE - CHÂTEAU DORLÉAC - 2018' 
          showAddToCart={true}
          description='Très beau Graves à déguster dès à présent avec une belle viande rouge ou des fromages affinés.
                      Les tanins sont souples et le vin harmonieux.' 
        />
      </BodyPage>
    </>
  )
}