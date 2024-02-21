import React from 'react'
import BannerAnimate from '../components/Banner'
import BodyPage from '../components/BodyPage'
import TitleBanner from '../components/TitleBanner'
import Title from '../components/Title'
import ProductMapping from '../components/ProductMapping'
import ProductContainer from '../components/ProductContainer'

export default function Traiteur() {
  return (
    <>
        <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
        <TitleBanner text='SERVICE TRAITEUR' />
        <BodyPage>
           <Title text='LIVRAISON DE PETIT-DÉJEUNER' />
           <ProductContainer>
                <ProductMapping opt1='category' opt2='==' opt3='breakfast' />
           </ProductContainer>
           <Title text='LIVRAISON DE PLATS PRÉPARÉS' />
           <ProductContainer>
                <ProductMapping opt1='category' opt2='==' opt3='takeaway' showCategoryIcon={true} />
           </ProductContainer>
        </BodyPage>
    </>
  )
}
