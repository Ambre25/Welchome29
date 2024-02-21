// TARIQUET DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Tariquet() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName='Tariquet Premières Grives' 
          title='VIN BLANC MOELLEUX - CÔTES DE GASCOGNE AOP' 
          showAddToCart={true}
          description="Superbe robe or clair. Le nez est très expressif, typé, aux accents citronnés qui évoluent
                     à l'air vers un caractère exotique très gourmand. La bouche est pleine. Elle possède une 
                     grande fraîcheur qui dynamise l'ensemble."
        />
      </BodyPage>
    </>
  )
}