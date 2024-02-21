// BOLLINGER DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Bollinger() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Champagne Bollinger 75cL' 
          title='BOLLINGER - CHAMPAGNE - FRANCE' 
          showAddToCart={true}
          description="Bollinger c'est un style : le style d'une maison familiale qui depuis 1829 a su 
                    préserver son indépendance, organiser son propre vignoble dans les meilleurs 
                    crus de champagne." 
        />
      </BodyPage>
    </>
  )
}