// PANIER DE LÉGUMES 4P DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function PanierLegumes() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails productName='Panier de Légumes 4P' 
          title='PANIER DE LÉGUMES DE SAISON' 
          showAddToCart={true}
          description="Découvrez les délices de la Bretagne avec notre panier de légumes de saison pour quatre personnes ! 
                      Frais, locaux et savoureux, ces légumes cultivés avec amour vous garantissent une expérience gustative 
                      authentique. Commandez dès maintenant et régalez-vous avec le meilleur de la nature bretonne !" 
        />
      </BodyPage>
    </>
  )
}
