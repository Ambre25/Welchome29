// ENTREE DES VIVIERS DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function EntreeViviers() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails productName='Entrée des Viviers' 
          title='ENTRÉE DES VIVIERS - FRUITS DES MERS' 
          showAddToCart={true}
          description="Succombez à notre irrésistible entrée des viviers, composée avec soin : 3 huîtres n°3, 150g de bigorneaux,
                     6 bullots, 3 crevettes roses et 3 langoustines. Plongez dans l'univers des fruits de mer bretons en commandant 
                     dès maintenant cette délicieuse sélection pour une expérience gustative inoubliable !" 
        />
      </BodyPage>
    </>
  )
}
