// BOURRICHE 24 HUÎTRES DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Bourriche24() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails productName='Bourriche de 24 huîtres' 
          title='BOURRICHE DE 24 HUÎTRES CREUSES n°3'
          showAddToCart={true} 
          description="Découvrez la perfection des saveurs marines avec notre bourriche de 24 huîtres creuses n°3, 
                      directement issues des viviers renommés de Prat-Ar-Coum à Carantec.
                      Soigneusement sélectionnées à la main, elles possèdent une chair tendre et savoureuse, 
                      caractérisée par une subtile douceur salée. Leur texture délicate et leur équilibre parfait en font 
                      un trésor culinaire à ne pas manquer." />
      </BodyPage>
    </>
  )
}
