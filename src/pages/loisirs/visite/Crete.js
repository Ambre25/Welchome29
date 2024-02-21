import React from 'react'
import mainBg from '../../../assets/bg-crete.jpg'
import Cabane from '../../../assets/crete_parcabout.jpg'
import Abbaye from '../../../assets/crete_abbaye.jpg'
import CreteCragou from '../../../assets/crete_cragou.jpg'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import Title from '../../../components/Title'
import VisitesContainer from '../../../components/VisitesContainer'

export default function Callot() {

    const paragraphMareeBasse = [
        "Profitez d'un parcours de 500m sur des filets tendus entre les arbres.",
        "Au domaine du Treuscoat, ses hébergements insolites porposent divers univers : cabanes perchées, yourtes, etc...",
        "Certains sont équipés d'un bain nordique privatif et d'un spa.",
    ];

    const paragraphMareeHaute = [
        "Une atmosphère reposante dans un cadre naturel au bord d'un étang.",
        "L'abbaye du Relec est l'une des rares abbayes cisterciennes en Bretagne.",
        "Son potager biologique est cultivé par les moines.",
    ];

    const paragraphCragou = [
        "Ce site est essentiellement constitué de landes et de tourbières.",
        "Vous pourrez y admirer une diversité parmi laquelle on retrouve des plantes et des animaux rares. ",
        "Une biodiversité unique que vous pourrez découvrir toute l'année grâce à un sentier de découverte.",
    ];

  return (
    <>
        <LoisirsNavBar />
        <img src={mainBg} alt='Île Callot' style={{ maxWidth: '100%', height: '100%', margin: 0, padding: 0 }} />
        <div style={{ marginTop: '25px' }}>
            <Title text="BALADE DANS LES MONTS D'ARRÉE" />
        </div>
        <VisitesContainer 
            title='Cabanes perchées au Parcabout' 
            img_url={Cabane} 
            img_url_alt='Parcabout'
            paragraphs={paragraphMareeBasse}
            reverseOrder={false}
        />
        <VisitesContainer 
            title='Visite du patrimoine' 
            img_url={Abbaye} 
            img_url_alt='Patrimoine'
            paragraphs={paragraphMareeHaute}
            reverseOrder={true}
        />
        <div style={{ marginBottom: '75px' }}>
              <VisitesContainer
                  title='Les landes du Cragou'
                  img_url={CreteCragou}
                  img_url_alt='Landes du Cragou'
                  paragraphs={paragraphCragou}
              />
        </div>
    </>
  )
}
