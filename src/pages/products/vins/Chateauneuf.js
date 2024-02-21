// CHATEAUNEUF DETAILS PAGE

import React from 'react'
import ShopNavBar from '../../../components/ShopNavbar'
import BannerAnimate from '../../../components/Banner'
import BodyPage from '../../../components/BodyPage'
import ProductDetails from '../../../components/ProductDetails'

export default function Chateaneuf() {
  return (
    <>
      <ShopNavBar />
      <BannerAnimate tween1="DÉCOUVREZ NOS PRODUITS LOCAUX" tween2='LA LIVRAISON EST OFFERTE' />
      <BodyPage>
        <ProductDetails 
          productName="Châteauneuf-du-pape les Cèdres"
          title='VIN ROUGE - CHÂTEAUNEUF DU PAPE AOP - VALLÉE DU RHÔNE' 
          showAddToCart={true}
          description="Découvrez le Châteauneuf-du-Pape Les Cèdres, un vin d'exception ! Sa robe rubis soutenue 
                    et ses larmes denses captivent le regard. Son bouquet complexe révèle des arômes de petits 
                    fruits rouges macérés, d'épices douces et de garrigue en finale. En bouche, son attaque 
                    puissante laisse place à des notes épicées et chaudes. Parfaitement assorti à des plats 
                    comme les noisettes de chevreuil, le cœur de filet de bœuf et les rognons de veau sautés. 
                    Servez-le entre 15 et 17°C. À consommer dans les 10 à 20 ans."
        />
      </BodyPage>
    </>
  )
}