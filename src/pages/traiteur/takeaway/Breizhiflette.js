// BREIZHIFLETTE DETAILS PAGE

import React from 'react'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Breizhiflette() {
  return (
    <>
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Breizhiflette' 
          title='BREIZHIFLETTE (PLAT INDIVIDUEL 280G)' 
          description="Inspirée de sa cousine savoyarde, notre Breizhiflette (en bocal individuel de 280g) vous propose 
                    de délicieuses pommes de terre fondantes à la saucisse bretonne gratinées à la véritable Tome de Rhuys 
                    et au reblochon, un plat copieux et généreux. Une recette comme à la maison, artisanale et naturelle, 
                    sans conservateur, ni colorant." 
          showAddToCart={true}
        />
      </BodyPage>
    </>
  )
}