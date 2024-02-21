import React from 'react'
import ShopNavBar from '../../components/ShopNavbar'
import BannerAnimate from '../../components/Banner'
import BodyPage from '../../components/BodyPage'
import Title from '../../components/Title'
import ProductContainer from '../../components/ProductContainer'
import ProductMapping from '../../components/ProductMapping'

export default function Vins() {
  return (
    <>
        <ShopNavBar />
        <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
        <BodyPage>
            <Title text="NOTRE CAVE À VIN" />
            <ProductContainer>
                <ProductMapping opt1='category' opt2='==' opt3='vins' showCategoryIcon={true} showAddToCartIcon={true} />
            </ProductContainer>
        </BodyPage>
    </>
  )
}
