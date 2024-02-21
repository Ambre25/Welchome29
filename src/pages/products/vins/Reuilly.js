// REUILLY DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Reuilly() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Reuilly les Pierres Plates AOP' 
          title='VIN BLANC - REUILLY AOP - VAL DE LOIRE' 
          showAddToCart={true}
          description="Le Reuilly est un Sauvignon Blanc du Val de Loire. Belle fraîcheur en attaque à dominante
                     d’agrumes avec une évolution en milieu de bouche vers des arômes de fruits exotiques et cédrat. 
                     Complexité liée à une belle concentration." 
        />
      </BodyPage>
    </>
  )
}