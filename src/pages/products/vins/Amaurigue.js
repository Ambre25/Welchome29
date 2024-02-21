// AMAURIGUE DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Amaurigue() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName="Domaine de l'Amaurigue"
          showAddToCart={true}
          title='VIN ROSÉ - CÔTES DE PROVENCE AOP - FRANCE SUD-EST' 
          description='Quand c’est le moment de boire un Côtes de Provence Rosé alors vous savez que l’été est là… Rosé léger, aérien et aromatique.' 
        />
      </BodyPage>
    </>
  )
}