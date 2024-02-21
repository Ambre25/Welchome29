// PRODUCT DETAIL LANGOUSTE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Langouste() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails productName='Langouste Royale - SELON PÊCHE' 
          title="LANGOUSTE ROYALE VIVANTE ~ SELON PÊCHE" 
          showAddToCart={true}
          description="Succombez au luxe des langoustes royales ! D'une fraîcheur inégalée, ces crustacés délicats et 
                    raffinés vous offrent une expérience culinaire d'exception. Chaque langouste est soigneusement 
                    sélectionnée pour sa taille généreuse et sa chair succulente. Commandez dès maintenant et offrez-vous 
                    un festin royal avec nos langoustes fraîches, garantissant une dégustation digne des plus fins palais !" 
        />
      </BodyPage>
    </>
  )
}