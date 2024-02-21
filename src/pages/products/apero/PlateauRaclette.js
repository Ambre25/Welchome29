// PLATEAU RACLETTE DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function PlateauRaclette() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Plateau Raclette' 
          showAddToCart={true}
          title='PLATEAU DE CHARCUTERIE ET FROMAGE SPÉCIAL RACLETTE' 
          description="Dégustez notre plateau spécial raclette de charcuterie et fromages ! Commandez dès maintenant et 
                    profitez d'une sélection délicieuse pour une soirée raclette réussie !" 
        />
      </BodyPage>
    </>
  )
}