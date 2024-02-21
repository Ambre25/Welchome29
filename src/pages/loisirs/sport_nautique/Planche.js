// KAYAK DETAILS PAGE

import React from 'react'
import BannerAnimateLoisirs from '../../../components/BannerLoisirs'
import BodyPage from '../../../components/BodyPage'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import Title from '../../../components/Title'
import KayakCard from '../../../components/KayakCard'
import TablePlanche from '../../../components/TablePlanche'

export default function Planche() {

  const durationOptions = [
    { value: 1, label: '1h' },
    { value: 2, label: '2h' },
    { value: 3, label: '3h' },
  ]

  return (
    <>
      <LoisirsNavBar />
      <BannerAnimateLoisirs title='Navigation' />
      <BodyPage>
        <Title text="LOCATION DE PLANCHE À VOILE À CARANTEC" />
        <TablePlanche />
        <div style={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center', gap: '15px' }}>
          <KayakCard
            title='RÉSERVER UNE PLANCHE À VOILE ÉCOLE'
            textNumber='Combien de planches à voile souhaitez-vous ?'
            color='#B2C0BE'
            textDate='Quand voulez-vous louer vos planches à voile école ?'
            durationOptions={durationOptions}
            itemName='Planche à voile école'
          />
          <KayakCard
            title='RÉSERVER UNE PLANCHE À VOILE MONOFILM'
            textNumber='Combien de planches à voile souhaitez-vous ?'
            color='#B2C0BE'
            textDate='Quand voulez-vous louer vos planches à voile monofilm ?'
            durationOptions={durationOptions}
            itemName='Planche à voile monofilm'
          />
        </div>
      </BodyPage>
    </>
  )
}