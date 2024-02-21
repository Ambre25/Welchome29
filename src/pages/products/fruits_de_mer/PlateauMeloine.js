// PLATEAU DE LA MELOINE DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function PlateauMeloine() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails productName='Plateau de la Méloine' 
          title='PLATEAU DE LA MÉLOINE - FRUITS DES MERS' 
          showAddToCart={true}
          description="Découvrez le plateau de la Méloine, une symphonie de saveurs marines ! Ce plateau exquis 
                    comprend une sélection raffinée de fruits de mer, notamment 4 huîtres creuses n°3, 4 langoustines, 
                    6 crevettes roses, 150g de bigorneaux et 2 pinces de tourteaux. Plongez dans l'océan de délices et 
                    savourez ces trésors de la mer issus des côtes bretonnes. Commandez dès maintenant et offrez-vous un 
                    festin digne des plus fins gourmets avec le plateau de la Méloine !" />
      </BodyPage>
    </>
  )
}
