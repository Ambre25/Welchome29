// PLATEAU DES DUONS DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function PlateauDuons() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails productName='Plateau des Duons' 
          title='PLATEAU DES DUONS - FRUITS DES MERS' 
          showAddToCart={true}
          description="Découvrez l'ultime expérience des saveurs marines avec le plateau de fruits de mer Des Duons. 
                      Plongez dans un festin océanique qui réunit les délices les plus exquis de nos côtes. 
                      Ce plateau soigneusement composé vous offre une variété de trésors marins pour éveiller 
                      tous vos sens. Les ingrédients : 6 huîtres creuses n°3, 4 langoustines, 6 crevettes roses, 
                      6 bullots, 6 palourdes, 1 araignée ou 1/2 tourteau." />
      </BodyPage>
    </>
  )
}
