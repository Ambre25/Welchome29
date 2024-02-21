// COFFRET C3 DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function CoffretC3() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Mix de Rillettes C3' 
          title='COFFRET MIX DE RILLETTES C3' 
          description="Découvrez les délices de la conserverie La Chikolodenn avec notre coffret de 4 rillettes 
                    bretonnes ! Savourez les saveurs uniques de Saint-Jacques, d'oursin, de bar et de langoustine, 
                    préparées avec passion. Commandez maintenant et délectez-vous de ces délicieuses rillettes 
                    de la conserverie La Chikolodenn !" 
          showAddToCart={true}
        />
      </BodyPage>
    </>
  )
}