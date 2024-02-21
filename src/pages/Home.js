// PAGE D'ACCUEIL

import React from 'react'
import BannerAnimate from '../components/Banner'
import Title from '../components/Title'
import ProductMapping from '../components/ProductMapping'
import ProductContainer from '../components/ProductContainer'
import ProductMappingLoisirs from '../components/ProductMappingLoisirs'
import ProductMappingAddress from '../components/ProductMappingAddress'
import BodyPage from '../components/BodyPage'

export default function Home() {
  return (
    <>
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <Title text="NOS PRODUITS À L'HONNEUR" />
        <ProductContainer>
          <ProductMapping opt1='honneur' opt2='==' opt3={true} showCategoryIcon={true} showAddToCartIcon={true} />
        </ProductContainer>
        <Title text="LES NOUVEAUTÉS DU MOMENT" />
        <ProductContainer>
          <ProductMapping opt1='new' opt2='==' opt3={true} showCategoryIcon={true} showAddToCartIcon={true} />
        </ProductContainer>
        <Title text="ACTIVITÉS LES PLUS DEMANDÉES" />
        <ProductContainer>
          <ProductMappingLoisirs opt1='honneur' opt2='==' opt3={true} />
        </ProductContainer>
        <Title text="LES MEILLEURES ADRESSES" />
        <ProductContainer>
          <ProductMappingAddress opt1='vedette' opt2='==' opt3={true} />
        </ProductContainer>
      </BodyPage>
    </>
  )
}
