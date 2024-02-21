// PLATEAU DE FRUITS DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function PlateauFruits() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails productName='Plateau de fruits' 
          title='PLATEAU DE FRUITS - 4 PERSONNES' 
          showAddToCart={true}
          description="Régalez-vous avec notre plateau de fruits frais pour 4 personnes ! Découvrez une sélection 
                    exquise de fruits juteux et savoureux, prêts à être dégustés. Chaque plateau est soigneusement 
                    composé pour offrir une variété de fruits frais et de saison, pour satisfaire tous les palais. 
                    Commandez dès maintenant et savourez une explosion de saveurs avec notre plateau de fruits frais, 
                    idéal pour toutes les occasions gourmandes à partager !" 
        />
      </BodyPage>
    </>
  )
}
