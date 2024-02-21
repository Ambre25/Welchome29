import React from 'react'
import BodyPage from '../../components/BodyPage'
import Title from '../../components/Title'
import ProductContainer from '../../components/ProductContainer'
import LoisirsNavBar from '../../components/LoisirsNavbar'
import ProductMappingLoisirs from '../../components/ProductMappingLoisirs'

export default function Visites() {
  return (
    <>
        <LoisirsNavBar />
        <BodyPage>
            <Title text="TOUTES LES EXCURSIONS ET VISITES" />
            <ProductContainer>
                <ProductMappingLoisirs opt1='category' opt2='==' opt3='visite' showCategoryIcon={true} showAddToCartIcon={true} />
            </ProductContainer>
        </BodyPage>
    </>
  )
}
