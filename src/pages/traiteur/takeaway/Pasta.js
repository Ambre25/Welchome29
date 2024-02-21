// CARBONARA DETAILS PAGE

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
          productName='Pasta à la Carbonara' 
          title='PASTA À LA CARBONARA (PLAT INDIVIDUEL 280G)' 
          description="Découvrez la saveur authentique de l'Italie avec notre Pasta à la Carbonara, soigneusement 
                    conservée dans un élégant bocal en verre. Cette recette traditionnelle combine des pâtes al dente, 
                    des lardons croustillants, une sauce crémeuse à base de jaunes d'œufs et de parmesan, le tout saupoudré 
                    d'une touche de poivre noir fraîchement moulu. Chaque bocal capture l'essence de la cuisine italienne, 
                    garantissant un repas délicieux et rapide à préparer. Il suffit de réchauffer, de servir et de savourer 
                    un plat digne d'un restaurant, directement chez vous. Buon appetito!" 
          showAddToCart={true}
        />
      </BodyPage>
    </>
  )
}