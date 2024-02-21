// KAYAK DETAILS PAGE

import React from 'react'
import BannerAnimateLoisirs from '../../../components/BannerLoisirs'
import BodyPage from '../../../components/BodyPage'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import Title from '../../../components/Title'
import TableKayak from '../../../components/TableKayak'
import KayakCard from '../../../components/KayakCard'

export default function Kayak() {

  const durationOptions = [
    { value: 1, label: '1h' },
    { value: 2, label: '2h' },
    { value: 3, label: '3h' },
    { value: 4, label: '6h' },
  ]

  return (
    <>
      <LoisirsNavBar />
      <BannerAnimateLoisirs title='Kayaking' />
      <BodyPage>
        <Title text="LOCATION DE KAYAK À CARANTEC" />
        <TableKayak />
        <div style={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center', gap: '15px' }}>
          <KayakCard
            title='RÉSERVER UN KAYAK 1P'
            textNumber='Combien de kayaks 1 place souhaitez-vous ?'
            color='#B2C0BE'
            textDate='Quand voulez-vous louer vos kayaks ?'
            durationOptions={durationOptions}
            itemName='Kayak 1 place'
          />
          <KayakCard
            title='RÉSERVER UN KAYAK 2P'
            textNumber='Combien de kayaks 2-4 places souhaitez-vous ?'
            color='#DFE3D5'
            textDate='Quand voulez-vous louer vos kayaks ?'
            durationOptions={durationOptions}
            itemName='Kayak 2 places'
          />
        </div>
      </BodyPage>
    </>
  )
}