// PEPINETTES CHORIZO DETAILS PAGE

import React from 'react'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Pepicho() {
  return (
    <>
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Pépinettes au chorizo' 
          title='PÉPINETTES AU CHORIZO (PLAT INDIVIDUEL 280G)' 
          description="Plongez dans les saveurs méditerranéennes avec nos Pépinettes au Chorizo, délicatement 
                    préservées dans un bocal en verre raffiné. Cette recette exquise marie des pépinettes tendres, 
                    du chorizo épicé finement tranché, une sauce tomate riche et des herbes aromatiques pour une 
                    explosion de goûts en bouche. Chaque conserve est un trésor de la cuisine du Sud, offrant un 
                    repas savoureux en un clin d'œil. Simplement réchauffez, servez et laissez-vous emporter par 
                    cette délicieuse escapade culinaire. Bon appétit !" 
          showAddToCart={true}
        />
      </BodyPage>
    </>
  )
}