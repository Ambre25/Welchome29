import React from 'react'
import PartnerDetail from '../components/PartnerDetail'
import { Box } from '@mui/material'

export default function Partners() {
  return (
    <>
        <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '50px', gap: '50px', marginBottom: '125px' }}>
        <PartnerDetail 
            title='La Chikolodenn' 
            city='Carantec' 
            description='La Chikolodenn est une conserverie bretonne artisanale située à Carantec spécialisée dans 
                        les produits du terroir. Élaborées avec des produits locaux, les recettes de La Chikolodenn 
                        se veulent largement d’inspiration culinaire bretonne. Plats cuisinés tels que le kig ha farz, 
                        le cassoulet breton ou les soupes de poisson et langoustines, petits pâtés bretons, rillettes de la mer, 
                        tartare d’algues et tartinables de légumes… C’est au coeur de la Bretagne que chaque recette puise 
                        ses ingrédients.'
            img_url='https://i.ibb.co/b70qbLB/chiko.jpg'
            link='https://www.conserveslachikolodenn.com/' 
        />
        <hr style={{ background: 'lightgray', height: '3px', border: 'none', width: '60%', marginTop: '25px' }} />
        <PartnerDetail 
            title='Cerise et Basilic' 
            city='Morlaix' 
            description="Cette épicerie propose des fruits et légumes de la même qualité que sur le marché mais avec une plus grande 
                        disponibilité pour les clients.
                        La mise en place de circuits courts permet de proposer des produits régionaux de producteurs et 
                        de saison dans de bonnes conditions grâce à un approvisionnement fréquent. Dans un espace accueillant, les fruits et 
                        légumes de pays côtoient l'épicerie fine avec de nombreux 
                        produits régionaux, des fruits secs, des épices, des herbes aromatiques, un tourniquet à olives, 
                        des fruits exotiques, de la crémerie et des fromages"
            img_url='https://i.ibb.co/2dX1q3y/ceretbas.jpg' 
            link='https://www.facebook.com/ceriseetbasilic/?locale=fr_FR'
        />
        <hr style={{ background: 'lightgray', height: '3px', border: 'none', width: '60%', marginTop: '25px' }} />
        <PartnerDetail 
            title='Prat Ar Coum' 
            city='Carantec' 
            description="Depuis 1898, la famille Madec , cultive la mer comme d'autres, plus loin, cultivent la terre, les pieds dans 
                        les parcs à huîtres installés sur l'Estran en Baie de Morlaix à Carantec dans le Finistère en Bretagne.
                        Gages de qualité et d’excellence, fruits d’un savoir-faire plus que centenaire transmis de père en fils, 
                        les huîtres d’Alain Madec ne connaissent pas de frontière et sont largement accueillis à la table des 
                        connaisseurs et des gourmets...
                        Aujourd'hui, grâce au travail d’Alain Madec, c'est à la 5ème génération que revient l’honneur d’entretenir ce 
                        patrimoine familial constitué contre vents et marées, et d’y apporter sa sensibilité et sa signature."
            img_url='https://i.ibb.co/qgyxbSg/prat.jpg' 
            link='https://huitres.bzh/'
        />
        <hr style={{ background: 'lightgray', height: '3px', border: 'none', width: '60%', marginTop: '25px' }} />
        <PartnerDetail 
            title='Les Viviers de Carantec' 
            city='Carantec' 
            description="Sandra et Romain Gicquel ont inauguré Les viviers de Carantec au Varquez, à l'endroit où se trouvait autrefois 
                        l'entreprise Willmann. Ce nouvel établissement offre une variété de coquillages, crustacés et poissons saisonniers 
                        à l'achat, ainsi qu'une option de dégustation. Le duo a aménagé deux terrasses avec des tables et des chaises, 
                        dont l'une offre une vue sur la Penzé et les bassins dédiés à l'ostréiculture."
            img_url='https://i.ibb.co/WHdG6pn/viviers.jpg' 
            link='https://www.facebook.com/profile.php?id=100091953859927'
        />
        <hr style={{ background: 'lightgray', height: '3px', border: 'none', width: '60%', marginTop: '25px' }} />
        <PartnerDetail 
            title='Wine and Beer Supermarket' 
            city='Roscoff' 
            description="Avec 1 million de bouteilles vendues cette année, cette cave se classe parmi les 5 meilleures en Bretagne. 
                        Fort de 25 ans d'expérience, il a repris l'enseigne roscovite en 2003 et l'a modernisée en 2015. Le magasin 
                        propose 1000 vins, 260 bières et 400 spiritueux."
            img_url='https://i.ibb.co/CvWrMWf/wine.jpg' 
            link='https://www.winebeersupermarket.com/newlang_2.html'
        />
        <hr style={{ background: 'lightgray', height: '3px', border: 'none', width: '60%', marginTop: '25px' }} />
        <PartnerDetail 
            title='Centre nautique' 
            city='Carantec' 
            description="Située sur la plage du Kelenn, la base nautique est en position centrale au cœur de la destination Baie de Morlaix - 
                        Côte de granit rose. Elle s’ouvre sur l’île Callot, les îlots de la baie et l'île de Batz. En deux bords, 
                        vous êtes à l’île Louët et au château du Taureau. Les paysages de la Bretagne nord et du Finistère s'offrent à vous.
                        Dans cet environnement naturel d'exception, Carantec nautisme vous propose un large panel de sports nautiques : 
                        Voile, plongée, kayak, stand up paddle, wingfoil, windfoil et marche aquatique."
            img_url='https://i.ibb.co/SnM4ZG5/naut.jpg' 
            link='https://www.carantec-nautisme.com/'
        />
        </Box>
    </>
  )
}
