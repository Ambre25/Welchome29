// MUSCADET DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Muscadet() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Muscadet Jean Aubron AOP' 
          showAddToCart={true}
          title='VIN BLANC SEC - MUSCADET AOP - VAL DE LOIRE' 
          description="Bouche franche vive et gouleyante. Un beau Muscadet bien équilibré et délicatement fruité.
                    Idéal en apéritif ou pour accompagner coquillages et poissons."
        />
      </BodyPage>
    </>
  )
}