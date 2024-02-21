// PLATEAU APERO DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function PlateauApero() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Plateau Apéro' 
          showAddToCart={true}
          title='PLATEAU DE CHARCUTERIE ET FROMAGE' 
          description='Découvrez notre délicieux plateau de charcuterie et fromage, parfait pour les amateurs de 
                      saveurs fines et authentiques. Ce plateau soigneusement préparé offre une sélection exquise 
                      de charcuteries artisanales et de fromages affinés.' 
        />
      </BodyPage>
    </>
  )
}