// PADDLE DETAILS PAGE

import React from 'react'
import BannerAnimateLoisirs from '../../../components/BannerLoisirs'
import BodyPage from '../../../components/BodyPage'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import Title from '../../../components/Title'
import TablePaddle from '../../../components/TablePaddle'
import KayakCard from '../../../components/KayakCard'

export default function Paddle() {

    const durationPaddle1P2P = [
        { value: 1, label: '1h' },
        { value: 2, label: '2h' },
        { value: 3, label: '3h' },
    ]

    const durationPaddle4P10P = [
        { value: 1, label: '1h' },
        { value: 2, label: '2h' },
    ]

  return (
    <>
      <LoisirsNavBar />
      <BannerAnimateLoisirs title='Paddling' />
      <BodyPage>
        <Title text="LOCATION DE PADDLE À CARANTEC" />
        <TablePaddle />
        <div style={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center', gap: '15px' }}>
          <KayakCard
            title='RÉSERVER UN PADDLE 1P'
            textNumber='Combien de paddle 1 place souhaitez-vous ?'
            color='#B2C0BE'
            textDate='Quand voulez-vous louer vos paddles ?'
            durationOptions={durationPaddle1P2P}
            itemName='Paddle 1 place'
          />
          <KayakCard
            title='RÉSERVER UN PADDLE 2P'
            textNumber='Combien de paddle 2-4 places souhaitez-vous ?'
            color='#DFE3D5'
            textDate='Quand voulez-vous louer vos paddles ?'
            durationOptions={durationPaddle1P2P}
            itemName='Paddle 2 places'
          />
          <KayakCard
            title='RÉSERVER UN PADDLE 4P'
            textNumber='Combien de paddle 4-10 places souhaitez-vous ?'
            color='#B4B2BE'
            textDate='Quand voulez-vous louer vos paddles ?'
            durationOptions={durationPaddle4P10P}
            itemName='Paddle 4 places'
          />
        </div>
      </BodyPage>
    </>
  )
}