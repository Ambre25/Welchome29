import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/app.css'
import Home from './pages/Home'
import Bourriche24 from './pages/products/fruits_de_mer/Bourriche24'
import Homard from './pages/products/fruits_de_mer/Homard'
import Langouste from './pages/products/fruits_de_mer/Langouste'
import Kayak from './pages/loisirs/sport_nautique/Kayak'
import Dorleac from './pages/products/vins/Dorleac'
import PlateauApero from './pages/products/apero/PlateauApero'
import Shop from './pages/Shop'
import Loisirs from './pages/Loisirs'
import Traiteur from './pages/Traiteur'
import Contact from './pages/Contact'
import FruitsDeMer from './pages/shop/FruitsDeMer'
import Apero from './pages/shop/Apero'
import Vins from './pages/shop/Vins'
import FruitsEtLegumes from './pages/shop/FruitsEtLegumes'
import PlateauDuons from './pages/products/fruits_de_mer/PlateauDuons'
import Bourriche12 from './pages/products/fruits_de_mer/Bourriche12'
import PanierLegumes from './pages/products/fruits_et_legumes/PanierLegumes'
import PanierLegumesBig from './pages/products/fruits_et_legumes/PanierLegumesBig'
import PlateauCallot from './pages/products/fruits_de_mer/PlateauCallot'
import PlateauLegumes from './pages/products/apero/PlateauLegumes'
import CoffretC3 from './pages/products/apero/CoffretC3'
import StGall from './pages/products/vins/StGall'
import Reuilly from './pages/products/vins/Reuilly'
import PlateauFruits from './pages/products/fruits_et_legumes/PlateauFruits'
import EntreeViviers from './pages/products/fruits_de_mer/EntreeViviers'
import PlateauMeloine from './pages/products/fruits_de_mer/PlateauMeloine'
import Bourriche50 from './pages/products/fruits_de_mer/Bourriche50'
import CoffretCallot from './pages/products/apero/CoffretCallot'
import PlateauRaclette from './pages/products/apero/PlateauRaclette'
import CoffretPorc from './pages/products/apero/CoffretPorc'
import Amaurigue from './pages/products/vins/Amaurigue'
import Chateaneuf from './pages/products/vins/Chateauneuf'
import Bollinger from './pages/products/vins/Bollinger'
import StEmilion from './pages/products/vins/StEmilion'
import Tariquet from './pages/products/vins/Tariquet'
import Muscadet from './pages/products/vins/Muscadet'
import Paddle from './pages/loisirs/sport_nautique/Paddle'
import Catamaran from './pages/loisirs/sport_nautique/Catamaran'
import Deriveur from './pages/loisirs/sport_nautique/Deriveur'
import Callot from './pages/loisirs/visite/Callot'
import Batz from './pages/loisirs/visite/Batz'
import Chateau from './pages/loisirs/visite/Chateau'
import PecheJournee from './pages/loisirs/peche/PecheJournee'
import PecheSoiree from './pages/loisirs/peche/PecheSoiree'
import PecheDemiJournee from './pages/loisirs/peche/PecheDemiJournee'
import Hydro from './pages/loisirs/bien_etre/Hydro'
import Zen from './pages/loisirs/bien_etre/Zen'
import Pause from './pages/loisirs/bien_etre/Pause'
import VeloBatz from './pages/loisirs/velo/VeloBatz'
import VeloCarantec from './pages/loisirs/velo/VeloCarantec'
import VeloMorlaix from './pages/loisirs/velo/VeloMorlaix'
import SportsNautiques from './pages/loisirs_category/SportsNautiques'
import Visites from './pages/loisirs_category/Visites'
import Peche from './pages/loisirs_category/Peche'
import Bienetre from './pages/loisirs_category/Bienetre'
import Velo from './pages/loisirs_category/Velo'
import Planche from './pages/loisirs/sport_nautique/Planche'
import Trimaran from './pages/loisirs/sport_nautique/Trimaran'
import Crete from './pages/loisirs/visite/Crete'
import Gr34 from './pages/loisirs/visite/Gr34'
import FormuleConfort from './pages/traiteur/breakfast/FormuleConfort'
import FormuleBrunch from './pages/traiteur/breakfast/FormuleBrunch'
import FormulePrivilege from './pages/traiteur/breakfast/FormulePrivilege'
import Cart from './pages/Cart'
import Order from './pages/Order'
import BottomMenu from './components/BottomMenu'
import OrderList from './components/OrderList'
import Breizhiflette from './pages/traiteur/takeaway/Breizhiflette'
import Pasta from './pages/traiteur/takeaway/Pasta'
import Pepicho from './pages/traiteur/takeaway/Pepicho'
import TakeAway from './pages/shop/TakeAway'
import Partners from './pages/Partners'
import Blog from './pages/Blog'
import FloatingButton from './components/FloatingButton'
import PecheAPied27102023 from './pages/blog/PecheAPied27102023'
import ForetMacroAlgues06102023 from './pages/blog/ForetMacroAlgues06102023'
import MorlaixArtsTour from './pages/blog/MorlaixArtsTour'
import ConcertJamesDigger from './pages/blog/ConcertJamesDigger'

function App() {
  const location = useLocation();
  const shouldRenderFloatingButton = location.pathname !== '/Infos%20locales';
  return (
    <>
      <Navbar />
      {shouldRenderFloatingButton && <FloatingButton />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Accueil' element={<Home />} />
        <Route path='/Shop' element={<Shop />} />
        <Route path='/Loisirs' element={<Loisirs />} />
        <Route path='/Traiteur' element={<Traiteur />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Fruits de mer' element={<FruitsDeMer />} />
        <Route path='/Apéro' element={<Apero />} />
        <Route path='/Vins' element={<Vins />} />
        <Route path='/Fruits et légumes' element={<FruitsEtLegumes />} />
        <Route path='/Plats préparés' element={<TakeAway />} />
        <Route path='/Plateau des Duons' element={<PlateauDuons />} />
        <Route path='/Plateau de Callot' element={<PlateauCallot />} />
        <Route path='/Plateau de la Méloine' element={<PlateauMeloine />} />
        <Route path='/Entrée des Viviers' element={<EntreeViviers />} />
        <Route path='/Bourriche de 12 huîtres' element={<Bourriche12 />} />
        <Route path='/Bourriche de 24 huîtres' element={<Bourriche24 />} />
        <Route path='/Bourriche de 50 huîtres' element={<Bourriche50 />} />
        <Route path='/Homard Vivant 1Kg - SELON PÊCHE' element={<Homard />} />
        <Route path='/Langouste Royale - SELON PÊCHE' element={<Langouste />} />
        <Route path='/Plateau Apéro' element={<PlateauApero />} />
        <Route path='/Plateau Raclette' element={<PlateauRaclette />} />
        <Route path='/Plateau tout légumes' element={<PlateauLegumes />} />
        <Route path='/Mix de Rillettes C3' element={<CoffretC3 />} />
        <Route path="/Mix de rillettes de l'île Callot" element={<CoffretCallot />} />
        <Route path="/Mix de rillettes de porc" element={<CoffretPorc />} />
        <Route path='/Château Dorléac' element={<Dorleac />} />
        <Route path='/Châteauneuf-du-pape les Cèdres' element={<Chateaneuf />} />
        <Route path='/St-Emilion Grand cru' element={<StEmilion />} />
        <Route path='/Reuilly les Pierres Plates AOP' element={<Reuilly />} />
        <Route path='/Tariquet Premières Grives' element={<Tariquet />} />
        <Route path='/Muscadet Jean Aubron AOP' element={<Muscadet />} />
        <Route path="/Domaine de l'Amaurigue" element={<Amaurigue />} />
        <Route path='/Champagne St Gall 75cL' element={<StGall />} />
        <Route path='/Champagne Bollinger 75cL' element={<Bollinger />} />
        <Route path='/Panier de Légumes' element={<PanierLegumes />} />
        <Route path='/Panier de Légumes 4P' element={<PanierLegumesBig />} />
        <Route path='/Plateau de fruits' element={<PlateauFruits />} />
        <Route path='/Breizhiflette' element={<Breizhiflette />} />
        <Route path='/Pasta à la Carbonara' element={<Pasta />} />
        <Route path='/Pépinettes au chorizo' element={<Pepicho />} />
        <Route path='/Sports nautiques' element={<SportsNautiques />} />
        <Route path='/Location de kayak' element={<Kayak />} />
        <Route path='/Kayak 1 place' element={<Kayak />} />
        <Route path='/Kayak 2 places' element={<Kayak />} />
        <Route path='/Location de paddle' element={<Paddle />} />
        <Route path='/Paddle 1 place' element={<Paddle />} />
        <Route path='/Paddle 2 places' element={<Paddle />} />
        <Route path='/Paddle 4 places' element={<Paddle />} />
        <Route path='/Location de catamaran' element={<Catamaran />} />
        <Route path='/Catamaran 1 place' element={<Catamaran />} />
        <Route path='/Catamaran sport' element={<Catamaran />} />
        <Route path='/Location de dériveur' element={<Deriveur />} />
        <Route path='/Dériveur' element={<Deriveur />} />
        <Route path='/Location de planche' element={<Planche />} />
        <Route path='/Planche à voile école' element={<Planche />} />
        <Route path='/Planche à voile monofilm' element={<Planche />} />
        <Route path='/Location de trimaran' element={<Trimaran />} />
        <Route path='/Trimaran' element={<Trimaran />} />
        <Route path='/Visites' element={<Visites />} />
        <Route path="/Visite île Callot" element={<Callot />} />
        <Route path="/Visite île de Batz" element={<Batz />} />
        <Route path="/Navette île de Batz" element={<Batz />} />
        <Route path="/Visite Château du Taureau" element={<Chateau />} />
        <Route path="/Château du taureau" element={<Chateau />} />
        <Route path="/Balade sur les crêtes" element={<Crete />} />
        <Route path="/Chemin GR34" element={<Gr34 />} />
        <Route path='/Pêche' element={<Peche />} />
        <Route path="/Pêche en mer 1 journée" element={<PecheJournee />} />
        <Route path="/Sortie pêche à la journée" element={<PecheJournee />} />
        <Route path="/Soirée Pêche en mer" element={<PecheSoiree />} />
        <Route path="/Sortie pêche en soirée" element={<PecheSoiree />} />
        <Route path="/Pêche en mer 1/2 journée" element={<PecheDemiJournee />} />
        <Route path="/Sortie pêche à la demi journée" element={<PecheDemiJournee />} />
        <Route path='/Bien-être' element={<Bienetre />} />
        <Route path="/Pause hydrosensorielle" element={<Hydro />} />
        <Route path="/Massage Zen" element={<Zen />} />
        <Route path="/Massage zen" element={<Zen />} />
        <Route path="/Pause de douceur" element={<Pause />} />
        <Route path="/Pause douceur" element={<Pause />} />
        <Route path='/Location de vélos' element={<Velo />} />
        <Route path="/Location de vélo (Batz)" element={<VeloBatz />} />
        <Route path="/Location de vélo île de Batz" element={<VeloBatz />} />
        <Route path="/Location de vélo (Carantec)" element={<VeloCarantec />} />
        <Route path="/Location de vélo à Carantec" element={<VeloCarantec />} />
        <Route path="/Location de vélo (Morlaix)" element={<VeloMorlaix />} />
        <Route path="/Location de vélo à Morlaix" element={<VeloMorlaix />} />
        <Route path="/Formule Confort" element={<FormuleConfort />} />
        <Route path="/Formule Brunch" element={<FormuleBrunch />} />
        <Route path="/Formule Privilège" element={<FormulePrivilege />} />
        <Route path="/Panier" element={<Cart />} />
        <Route path="/Partenaires" element={<Partners />} />
        <Route path="/Commande" element={<Order />} />
        <Route path="/Mes Commandes" element={<OrderList />} />
        <Route path="/Infos locales" element={<Blog />} />
        <Route path="/Pêche à pied à Carantec 27102023" element={<PecheAPied27102023 />} />
        <Route path="/Découverte forêt de macro-algues à Roscoff 06102023" element={<ForetMacroAlgues06102023 />} />
        <Route path="/Concert James Digger 24112023" element={<ConcertJamesDigger />} />
        <Route path="/Morlaix Arts Tour" element={<MorlaixArtsTour />} />
      </Routes>
      <BottomMenu />
    </>
  );
}

export default App;