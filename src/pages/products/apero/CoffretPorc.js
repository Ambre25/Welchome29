// COFFRET PORC DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function CoffretPorc() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName="Mix de rillettes de porc"
          title="COFFRET MIX DE RILLETTES DE PORC"
          description="Découvrez notre coffret de mix de rillettes de porc de la conserverie La Chikolodenn
                     à Carantec ! Ce coffret vous propose une sélection savoureuse de rillettes de porc. 
                     Appréciez la terrine de porc à l'échalote, celle au lambig, et la nature. 
                     Plongez dans ces délicieuses rillettes préparées avec soin. 
                     Commandez dès maintenant et régalez-vous !"
          showAddToCart={true}
        />
      </BodyPage>
    </>
  )
}