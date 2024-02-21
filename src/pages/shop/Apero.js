import React from 'react'
import ShopNavBar from '../../components/ShopNavbar'
import BannerAnimate from '../../components/Banner'
import BodyPage from '../../components/BodyPage'
import ProductContainer from '../../components/ProductContainer'
import Title from '../../components/Title'
import ProductMapping from '../../components/ProductMapping'

export default function Apero() {
  return (
    <>
        <ShopNavBar />
        <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
        <BodyPage>
            <Title text="POUR L'APÉRO" />
            <ProductContainer>
                <ProductMapping opt1='category' opt2='==' opt3='apero' showCategoryIcon={true} showAddToCartIcon={true} />
            </ProductContainer>
        </BodyPage>
    </>
  )
}
