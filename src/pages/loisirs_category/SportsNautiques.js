import React from 'react'
import BodyPage from '../../components/BodyPage'
import Title from '../../components/Title'
import ProductContainer from '../../components/ProductContainer'
import LoisirsNavBar from '../../components/LoisirsNavbar'
import ProductMappingLoisirs from '../../components/ProductMappingLoisirs'

export default function SportsNautiques() {
  return (
    <>
        <LoisirsNavBar />
        <BodyPage>
            <Title text="TOUS LES SPORTS NAUTIQUES" />
            <ProductContainer>
                <ProductMappingLoisirs opt1='category' opt2='==' opt3='sportnautique' showCategoryIcon={true} showAddToCartIcon={true} />
            </ProductContainer>
        </BodyPage>
    </>
  )
}
