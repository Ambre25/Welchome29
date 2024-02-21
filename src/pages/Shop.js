// PAGE SHOP

import React from 'react'
import ShopNavBar from '../components/ShopNavbar'
import BodyPage from '../components/BodyPage'
import BannerAnimate from '../components/Banner'
import Title from '../components/Title'
import ProductMapping from '../components/ProductMapping'
import ProductContainer from '../components/ProductContainer'
import ButtonMoreCat from '../components/ButtonMoreCat'
import { blue, blueGrey, green, red } from '@mui/material/colors'

export default function Shop() {
  return (
    <>
    <ShopNavBar />
    <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
    <BodyPage>
      <Title text='LES FRUITS DE MER' />
      <ButtonMoreCat bgCat={blue[500]} link="Fruits de mer" />
      <ProductContainer>
          <ProductMapping opt1='vedettefdm' opt2='==' opt3={true} showCategoryIcon={true} showAddToCartIcon={true} />
      </ProductContainer>
      <Title text='APÉRO' />
      <ButtonMoreCat bgCat={red[500]} link="Apéro" />
      <ProductContainer>
          <ProductMapping opt1='vedetteapero' opt2='==' opt3={true} showCategoryIcon={true} showAddToCartIcon={true} />
      </ProductContainer>
      <Title text='VINS' />
      <ButtonMoreCat bgCat='#5f0937' link="Vins" />
      <ProductContainer>
          <ProductMapping opt1='vedettevins' opt2='==' opt3={true} showCategoryIcon={true} showAddToCartIcon={true} />
      </ProductContainer>
      <Title text='FRUITS ET LÉGUMES' />
      <ButtonMoreCat bgCat={green[500]} link="Fruits et légumes" />
      <ProductContainer>
          <ProductMapping opt1='vedettefel' opt2='==' opt3={true} showCategoryIcon={true} showAddToCartIcon={true} />
      </ProductContainer>
      <Title text='PLATS PRÉPARÉS' />
      <ButtonMoreCat bgCat={blueGrey[800]} link="Plats préparés" />
      <ProductContainer>
          <ProductMapping opt1='category' opt2='==' opt3='takeaway' showCategoryIcon={true} showAddToCartIcon={true} />
      </ProductContainer>
    </BodyPage>
    </>
  )
}
