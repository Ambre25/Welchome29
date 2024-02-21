import React from 'react'
import mainBg from '../../../assets/bg-gr34.jpg'
import Cabane from '../../../assets/gr34_santec.jpg'
import Abbaye from '../../../assets/gr34_roscoff.jpg'
import CreteCragou from '../../../assets/gr34_carantec.jpg'
import GrMorlaix from '../../../assets/gr34_morlaix.jpg'
import LoisirsNavBar from '../../../components/LoisirsNavbar'
import Title from '../../../components/Title'
import VisitesContainer from '../../../components/VisitesContainer'

export default function Gr34() {

    const paragraphMareeBasse = [
        "À l'Ouest de Roscoff, le GR34 passera par la Côte des Sables.",
        "22km de plages de sable fin le long d'un sentier ouvert avec un dénivelé faible.",
        "Modelées par les courants et les vents, les dunes sableuses forment des balades incontournables dans la région.",
    ];

    const paragraphMareeHaute = [
        "Ici, le GR34 va longer l'intérieur de la Baie de Morlaix en passant par Saint-Pol de Léon et Plouénan pour enfin arriver à Carantec.",
        "De la chapelle Sainte-Barbe à Roscoff à l'îlot Saint-Anne à Saint-pol de Léon, vous découvrirez de magnifiques paysages tels que de petites criques, des formations rocheuses pour de jolis points de vue en hauteur, pour arriver à la pointe de Pen-an-Lann à Carantec, face au château du taureau.",
    ];

    const paragraphCragou = [
        "Longez le port de Morlaix et traversez la passerelle en face de l'IUT, une pause s'impose au bar le Tempo qui offre une vue imprenable sur Morlaix et son viaduc ainsi que sur le port.",
        "Plus loin, vous atteindrez aisément le coeur de ville. Visitez Morlaix et ses venelles étroites agrémentées de façades colorées des maisons à pans de bois.",
    ];

  return (
    <>
        <LoisirsNavBar />
        <img src={mainBg} alt='GR34' style={{ maxWidth: '100%', height: '100%', margin: 0, padding: 0 }} />
        <div style={{ marginTop: '25px' }}>
            <Title text="GR34 : LA BAIE DE MORLAIX À PIED" />
        </div>
        <VisitesContainer 
            title='Au départ de Santec' 
            img_url={Cabane} 
            img_url_alt='Parcabout'
            paragraphs={paragraphMareeBasse}
            reverseOrder={false}
        />
        <VisitesContainer 
            title='Au départ de Roscoff' 
            img_url={Abbaye} 
            img_url_alt='Patrimoine'
            paragraphs={paragraphMareeHaute}
            reverseOrder={true}
        />
        <VisitesContainer 
            title='Au départ de Carantec' 
            img_url={CreteCragou} 
            img_url_alt='Landes du Cragou'
            paragraphs={paragraphCragou}
        />
        <div style={{ marginBottom: '75px' }}>
              <VisitesContainer
                  title='Arrivée à Morlaix'
                  img_url={GrMorlaix}
                  img_url_alt='Landes du Cragou'
                  paragraphs={paragraphCragou}
              />
        </div>
    </>
  )
}
