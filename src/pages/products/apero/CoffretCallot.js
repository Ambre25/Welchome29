// COFFRET CALLOT DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function CoffretCallot() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName="Mix de rillettes de l'île Callot"
          title="COFFRET MIX DE RILLETTES DE L'ÎLE CALLOT"
          description="Découvrez le Coffret de l'île Callot de la conserverie La Chikolodenn à Carantec ! 
                    Une sélection irrésistible de rillettes vous attend. Sardine, maquereau, cabillaud et 
                    rouget se réunissent pour une symphonie de saveurs. Commandez maintenant et savourez 
                    ce coffret de rillettes, un véritable délice pour les amateurs de poissons !"
          showAddToCart={true} 
        />
      </BodyPage>
    </>
  )
}