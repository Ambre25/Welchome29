// ST GALL DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function StGall() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Champagne St Gall 75cL' 
          title='CHAMPAGNE BRUT - DE SAINT-GALL - FRANCE' 
          showAddToCart={true}
          description="C’est le Champagne du quotidien. Sa fraîcheur en fait le compagnon idéal de l’apéritif 
                    ou des moments d’exception. Une belle robe or jaune, des parfums de fleurs blanches et une bouche 
                    dotée d’une belle finale." 
        />
      </BodyPage>
    </>
  )
}