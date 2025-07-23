import './App.css'
import MainPage from './fashionstore/Pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GentsFashion from './fashionstore/Pages/GentsFashion';
import LadiesFashion from './fashionstore/Pages/LadiesFashion';

import About from './fashionstore/Pages/About';
import Contact from './fashionstore/Pages/Contact';
import TermsConditions from './fashionstore/Pages/TermsConditions';
import TermsService from './fashionstore/Pages/TermsService';
import ExchangePolicy from './fashionstore/Pages/ExchangePolicy';
import ShippingPolicy from './fashionstore/Pages/ShippingPolicy';

import LoginForm from './fashionstore/Pages/LoginForm';
import Cart from './fashionstore/Pages/Cart';
import ForgotPassword from './fashionstore/Pages/ForgotPassword';
import SignUp from './fashionstore/Pages/SignUp';

import AllSarees from './fashionstore/Pages/AllSarees';
import SilkSarees from './fashionstore/Pages/SilkSarees';
import CottonSarees from './fashionstore/Pages/CottonSarees';
import Shirts from './fashionstore/Pages/Shirts';
import Tshirts from './fashionstore/Pages/Tshirts'
import KurtaSets from './fashionstore/Pages/KurtaSets'
import Jeans from './fashionstore/Pages/Jeans';
import Dresses from './fashionstore/Pages/Dresses';
import Boys from './fashionstore/Pages/Boys';
import Girls from './fashionstore/Pages/Girls';
import KurtiSet from './fashionstore/Pages/KurtiSet';
import DressMaterials from './fashionstore/Pages/DressMaterials';
import CottonDressMaterials from './fashionstore/Pages/CottonDressMaterial';
import MenShorts from './fashionstore/Pages/MenShorts';
import BoysJeans from './fashionstore/Pages/BoysJeans';
import BoysShirts from './fashionstore/Pages/BoysShirts';
import PlazoSets from './fashionstore/Pages/PlazoSets';
import CottonKurtiSets from './fashionstore/Pages/CottonKurtiSets';
const App = () => {
  return (

     <Router>
      
      <Routes>

      <Route path="/" element={<MainPage/>}/>

      <Route path='/gentsFashion' element={<GentsFashion/>}/>
      <Route path='/ladiesFashion' element={<LadiesFashion/>}/>

      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/conditions" element={<TermsConditions/>}/>
      <Route path="/service" element={<TermsService/>}/>
      <Route path="/exchangePolicy" element={<ExchangePolicy/>}/>
      <Route path="/shippingPolicy" element={<ShippingPolicy/>}/>
      <Route path="/loginForm" element={<LoginForm/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/allSarees" element={<AllSarees/>}/>
      <Route path="/silkSarees" element={<SilkSarees/>}/>
      <Route path="/cottonSarees" element={<CottonSarees/>}/>
      <Route path="/shirts" element={<Shirts/>}/>
      <Route path="/tShirts" element={<Tshirts/>}/>
      <Route path="/kurtaSets" element={<KurtaSets/>}/>
      <Route path='/jeans' element={<Jeans/>}/>
      <Route path='/dresses' element={<Dresses/>}/>
      <Route path='/boys' element={<Boys/>}/>
      <Route path='/girls' element={<Girls/>}/>
            <Route path='/Kurtis' element={<KurtiSet/>}/>
      <Route path='/cottonKurti' element={<CottonKurtiSets/>}/>
      <Route path='/allMaterials' element={<DressMaterials />}/>
      <Route path='/cottonMaterials' element={<CottonDressMaterials/>}/>
      <Route path='/shorts' element={<MenShorts/>}/>
      <Route path='/boysJeans' element={<BoysJeans/>}/>
      <Route path='/boysShirts' element={<BoysShirts/>}/>
      <Route path='/plazo' element={<PlazoSets/>}/>
v
      </Routes>

     </Router>


  
  )
}

export default App;