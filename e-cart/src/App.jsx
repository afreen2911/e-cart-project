import React from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Landingpage from './components/Pages/Landingpage'
import MobilesPage from './components/Pages/MobilesPage'
import TabletPage from './components/Pages/TabletPage'
import TvPage from './components/Pages/TvPage'
import MenPage from './components/Pages/MenPage'
import WomenPage from './components/Pages/WomenPage'
import KidsPage from './components/Pages/KidsPage'
import HomekitchenPage from './components/Pages/HomekitchenPage'
import FurniturePage from './components/Pages/FurniturePage'
import BooksPage from './components/Pages/BooksPage'
import AcPage from './components/Pages/AcPage'
import RefrigeratorPage from './components/Pages/RefrigeratorPage'
import ComputersPage from './components/Pages/ComputersPage'
import WatchesPage from './components/Pages/WatchesPage'
import SpeakersPage from './components/Pages/SpeakersPage'
import BeautyPage from './components/Pages/BeautyPage'
import MobileSingle from './singles/MobileSingle'
import WomenSingle from './singles/WomenSingle'
import SingleTablet from './singles/SingleTablet'
import SingleTv from './singles/SingleTv'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<Landingpage />} />
        <Route path='/mobilespage' element={<MobilesPage />} />
        <Route path='/tabletspage' element={<TabletPage />} />
        <Route path='/tvpage' element={<TvPage />} />
        <Route path='/menpage' element={<MenPage />} />
        <Route path='/womenpage' element={<WomenPage />} />
        <Route path='/kidspage' element={<KidsPage />} />
        <Route path='/homekitchenpage' element={<HomekitchenPage />} />
        <Route path='/computerspage' element={<ComputersPage />} />
        <Route path='/watchespage' element={<WatchesPage/>} />
        <Route path='/furniturepage' element={<FurniturePage />} />
        <Route path='/refrigeratorpage' element={<RefrigeratorPage/>} />
        <Route path='/bookspage' element={<BooksPage />} />
        <Route path='/acpage' element={<AcPage />} />
        <Route path='/speakerspage' element={<SpeakersPage  />} />
        <Route path='/beautypage' element={<BeautyPage />} />
        <Route path='/mobilespage/:id' element={<MobileSingle/>} />
        <Route path='/womenpage/:id' element={<WomenSingle/>} />
        <Route path='/tabletspage/:id' element={<SingleTablet/>} />
        <Route path='/tvpage/:id' element={<SingleTv/>} />
       </Routes>
    </div>
  )
}
export default App
