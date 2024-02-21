// KAYAK DETAILS PAGE

import React from 'react'
import BannerAnimateLoisirs from '../../../components/BannerLoisirs'
import BodyPage from '../../../components/BodyPage'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import Title from '../../../components/Title'
import KayakCard from '../../../components/KayakCard'
import TableTrimaran from '../../../components/TableTrimaran'

export default function Trimaran() {

  return (
    <>
      <LoisirsNavBar />
      <BannerAnimateLoisirs title='Navigation' />
      <BodyPage>
        <Title text="LOCATION DE TRIMARAN À CARANTEC" />
        <TableTrimaran />
        <div style={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center', gap: '15px' }}>
          <KayakCard
            title='RÉSERVER UN TRIMARAN'
            textNumber='Combien de trimaran souhaitez-vous ?'
            color='#B2C0BE'
            textDate='Quand voulez-vous louer vos trimarans ?'
            itemName='Trimaran'
          />
        </div>
      </BodyPage>
    </>
  )
}