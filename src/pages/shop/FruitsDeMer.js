import React from 'react'
import BannerAnimate from '../../components/Banner'
import ShopNavBar from '../../components/ShopNavbar'
import BodyPage from '../../components/BodyPage'
import Title from '../../components/Title'
import ProductContainer from '../../components/ProductContainer'
import ProductMapping from '../../components/ProductMapping'

export default function FruitsDeMer() {
  return (
    <>
        <ShopNavBar />
        <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
        <BodyPage>
            <Title text="TOUS NOS FRUITS DE MER" />
            <ProductContainer>
                <ProductMapping opt1='category' opt2='==' opt3='fdm' showCategoryIcon={true} showAddToCartIcon={true} />
            </ProductContainer>
        </BodyPage>
    </>
  )
}
