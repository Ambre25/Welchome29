// PRODUCT DETAIL HOMARD

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Homard() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails productName='Homard Vivant 1Kg - SELON PÊCHE' 
          title="HOMARD VIVANT D'ENVIRON 1Kg ~ SELON PÊCHE" 
          showAddToCart={true}
          description="Succombez à la délicatesse de la mer avec notre homard breton d'environ 1 kg ! 
                      D'une fraîcheur incomparable, ce trésor des eaux bretonnes est le choix parfait 
                      pour une expérience culinaire raffinée. Savourez la saveur exquise de ce crustacé 
                      haut de gamme, issu de nos côtes préservées. Commandez dès maintenant et 
                      offrez-vous un festin de luxe avec notre homard breton d'exception !" 
        />
      </BodyPage>
    </>
  )
}