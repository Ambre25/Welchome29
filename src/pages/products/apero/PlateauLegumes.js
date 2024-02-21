// PLATEAU TOUT LEGUMES DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function PlateauLegumes() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Plateau tout légumes' 
          showAddToCart={true}
          title='PLATEAU DE LÉGUMES DE SAISON BIO POUR 4 PERSONNES' 
          description="Régalez-vous avec notre plateau de légumes bio locaux bretons pour 4 personnes ! 
                    Cultivés avec passion dans les terres fertiles de Bretagne, ces légumes frais et savoureux 
                    vous offrent une expérience culinaire saine et délicieuse. Profitez de la diversité des 
                    légumes de saison, soigneusement sélectionnés pour vous offrir des saveurs authentiques. 
                    Commandez dès maintenant ce plateau de légumes bio et découvrez la magie de la cuisine bretonne, 
                    directement dans votre assiette !" 
        />
      </BodyPage>
    </>
  )
}