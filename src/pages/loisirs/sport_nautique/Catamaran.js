// CATAMARAN DETAILS PAGE

import React from 'react'
import BannerAnimateLoisirs from '../../../components/BannerLoisirs'
import BodyPage from '../../../components/BodyPage'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import Title from '../../../components/Title'
import TableCata from '../../../components/TableCata'
import KayakCard from '../../../components/KayakCard'

export default function Catamaran() {

    const durationCata = [
        { value: 1, label: '1h' },
        { value: 2, label: '2h' },
        { value: 3, label: '3h' },
    ]

  return (
    <>
      <LoisirsNavBar />
      <BannerAnimateLoisirs title='Navigation' />
      <BodyPage>
        <Title text="LOCATION DE CATAMARAN À CARANTEC" />
        <TableCata />
        <div style={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center', gap: '15px' }}>
          <KayakCard
            title='RÉSERVER UN CATAMARAN'
            textNumber='Combien de catamarans souhaitez-vous ?'
            color='#B2C0BE'
            textDate='Quand voulez-vous louer vos Catamarans ?'
            durationOptions={durationCata}
            itemName='Catamaran 1 place'
          />
          <KayakCard
            title='RÉSERVER UN CATA SPORT '
            textNumber='Combien de catamarans sport souhaitez-vous ?'
            color='#DFE3D5'
            textDate='Quand voulez-vous louer vos catamarans sport ?'
            durationOptions={durationCata}
            itemName='Catamaran sport'
          />
        </div>
      </BodyPage>
    </>
  )
}