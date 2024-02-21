// PAGE SHOP

import React from 'react'
import BodyPage from '../components/BodyPage'
import Title from '../components/Title'
import ProductMappingLoisirs from '../components/ProductMappingLoisirs'
import ProductContainer from '../components/ProductContainer'
import ButtonMoreCat from '../components/ButtonMoreCat'
import { blue, green, grey, red } from '@mui/material/colors'
import LoisirsNavBar from '../components/LoisirsNavbar'

export default function Loisirs() {
  return (
    <>
    <LoisirsNavBar />
    <BodyPage>
      <Title text='LES SPORTS NAUTIQUES' />
      <ButtonMoreCat bgCat={blue[500]} link="Sports nautiques" />
      <ProductContainer>
          <ProductMappingLoisirs opt1='vedettesportsnaut' opt2='==' opt3={true} />
      </ProductContainer>
      <Title text='EXCURSIONS ET VISITES' />
      <ButtonMoreCat bgCat={red[500]} link="Visites" />
      <ProductContainer>
          <ProductMappingLoisirs opt1='vedettevisite' opt2='==' opt3={true} />
      </ProductContainer>
      <Title text='SORTIES PÊCHE' />
      <ButtonMoreCat bgCat='#5f0937' link="Pêche" />
      <ProductContainer>
          <ProductMappingLoisirs opt1='vedettepeche' opt2='==' opt3={true} />
      </ProductContainer>
      <Title text='PRESTATIONS BIEN-ÊTRE' />
      <ButtonMoreCat bgCat={green[500]} link="Bien-être" />
      <ProductContainer>
          <ProductMappingLoisirs opt1='vedettebienetre' opt2='==' opt3={true} />
      </ProductContainer>
      <Title text='LOCATION DE VÉLO' />
      <ButtonMoreCat bgCat={grey[500]} link="Location de vélos" />
      <ProductContainer>
          <ProductMappingLoisirs opt1='vedettevelo' opt2='==' opt3={true} />
      </ProductContainer>
    </BodyPage>
    </>
  )
}
