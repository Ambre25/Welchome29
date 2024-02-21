import React from 'react'
import ShopNavBar from '../../components/ShopNavbar'
import BannerAnimate from '../../components/Banner'
import BodyPage from '../../components/BodyPage'
import ProductContainer from '../../components/ProductContainer'
import ProductMapping from '../../components/ProductMapping'
import Title from '../../components/Title'

export default function TakeAway() {
  return (
    <>
        <ShopNavBar />
        <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
        <BodyPage>
            <Title text="TOUS LES PLATS PRÉPARÉS" />
            <ProductContainer>
                <ProductMapping opt1='category' opt2='==' opt3='takeaway' showCategoryIcon={true} showAddToCartIcon={true} />
            </ProductContainer>
        </BodyPage>
    </>
  )
}
