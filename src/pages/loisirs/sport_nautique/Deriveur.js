// KAYAK DETAILS PAGE

import React from 'react'
import BannerAnimateLoisirs from '../../../components/BannerLoisirs'
import BodyPage from '../../../components/BodyPage'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import Title from '../../../components/Title'
import KayakCard from '../../../components/KayakCard'
import TableDeriveur from '../../../components/TableDeriveur'

export default function Deriveur() {

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
        <Title text="LOCATION DE DÉRIVEUR À CARANTEC" />
        <TableDeriveur />
        <div style={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center', gap: '15px' }}>
          <KayakCard
            title='RÉSERVER UN DÉRIVEUR'
            textNumber='Combien de dériveur souhaitez-vous ?'
            color='#B2C0BE'
            textDate='Quand voulez-vous louer vos dériveurs ?'
            durationOptions={durationOptions}
            itemName='Dériveur'
          />
        </div>
      </BodyPage>
    </>
  )
}