import React from 'react'
import mainBg from '../../../assets/bg-callot.jpg'
import DownSea from '../../../assets/callot_maree_basse.jpg'
import UpSea from '../../../assets/callot_maree_haute.jpg'
import CallotMap from '../../../assets/map_callot.jpg'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import Title from '../../../components/Title'
import VisitesContainer from '../../../components/VisitesContainer'
import { Typography } from '@mui/material'

export default function Callot() {

    const paragraphMareeBasse = [
        "On estime qu'il est possible de commencer à traverser deux heures avant la marée basse. C'est le moment parfait pour pratiquer la pêche à pied, entre rochers et zones de sable. Ici ce sont les palourdes que l'on cueille.",
        "Attention à ne pas rester trop concentré sur sa pêche, 2 heures après la marée basse, il faut être revenu côté continent. Compter 20 minutes à pied à parcourir entre l'île et Carantec.",
        "Une fois sur l'île, vous pourrez explorer ses plages, ses falaises et sa faune et flore uniques. Il est conseillé d'emporter de l'eau, de la nourriture et des vêtements adaptés aux conditions météorologiques.",
    ];

    const paragraphMareeHaute = [
        "Si vous avez le temps, ou un bateau, l'île de deux kilomètres de long est alors cerclée par les flots, et l'on profite, isolé, de ses plages somptueuses dans une ambiance paisible et hors du temps.",
        "Pour celles et ceux qui veulent dormir sur place, l'ancienne école de l'île a été transformée en gîte. Plus d'informations en cliquant ci-dessous.",
    ];

  return (
    <>
        <LoisirsNavBar />
        <img src={mainBg} alt='Île Callot' style={{ maxWidth: '100%', height: '100%', margin: 0, padding: 0 }} />
        <div style={{ marginTop: '25px' }}>
            <Title text="VISITE DE L'ÎLE CALLOT" />
        </div>
        <VisitesContainer 
            title='~ À Marée basse ~' 
            img_url={DownSea} 
            img_url_alt='Île Callot à marée basse'
            paragraphs={paragraphMareeBasse}
            reverseOrder={false}
        />
        <VisitesContainer 
            title='~~~ À Marée haute ~~~' 
            img_url={UpSea} 
            img_url_alt='Île Callot à marée haute'
            paragraphs={paragraphMareeHaute}
            reverseOrder={true}
        />
        <Typography variant='h5' sx={{ marginTop: '50px', textAlign: 'center' }}>
            | Plan d'accès |
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '125px' }}>
            <a href='https://goo.gl/maps/TukKtQQqozUyznRw8' target='_blank' rel="noreferrer noopener">
                <img src={CallotMap} alt="Plan d'accès de l'île Callot" style={{ borderRadius: '20px', maxWidth: '100%', height: 'auto' }} />
            </a>
        </div>
    </>
  )
}
