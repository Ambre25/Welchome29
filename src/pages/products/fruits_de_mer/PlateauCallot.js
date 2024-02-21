// PLATEAU DE CALLOT DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function PlateauCallot() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails productName='Plateau de Callot' 
          title='PLATEAU DE CALLOT - FRUITS DES MERS' 
          showAddToCart={true}
          description="Découvrez le riche trésor des mers bretonnes avec notre plateau de Callot ! 
                    Ce festin maritime vous propose une sélection variée comprenant 6 huîtres creuses, 
                    8 langoustines, 6 crevettes roses, 150g de bigorneaux, 6 bullots, 6 palourdes, et 
                    au choix, 1/2 homard ou 1 tourteau. Chaque bouchée vous transportera vers les 
                    saveurs uniques de la Bretagne. Commandez dès maintenant et régalez-vous avec ce 
                    plateau exquis qui célèbre la fraîcheur et la diversité de nos océans bretons !" />
      </BodyPage>
    </>
  )
}
