import React from 'react'
import BodyPage from '../../components/BodyPage'
import Title from '../../components/Title'
import ProductContainer from '../../components/ProductContainer'
import LoisirsNavBar from '../../components/LoisirsNavbar'
import ProductMappingLoisirs from '../../components/ProductMappingLoisirs'

export default function Peche() {
  return (
    <>
        <LoisirsNavBar />
        <BodyPage>
            <Title text="LOCATION DE VÉLOS" />
            <ProductContainer>
                <ProductMappingLoisirs opt1='category' opt2='==' opt3='velo' showCategoryIcon={true} showAddToCartIcon={true} />
            </ProductContainer>
        </BodyPage>
    </>
  )
}
