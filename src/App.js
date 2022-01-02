import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Logo from './components/Logo';
import MainMenuButton from './components/MainMenuButton';
import MainMenu from './components/MainMenu';
import WelcomePage from './components/WelcomePage';
import WebDevPage from './components/WebDevPage';
import MusicPage from './components/MusicPage';
import DiscographyPage from './components/DiscographyPage';
import ContactPage from './components/ContactPage';
import useWindowDimensions from './utils/utils';

function App() {
  const [currentPage, setCurrentPage] = useState('WelcomePage')
  const params = useParams()
  window.addEventListener("hashchange", ()=>{console.log('change')}, false);
  return (
    <BrowserRouter>
      <div id='mainContainer'>
        {useWindowDimensions().width > 1000 ? 
        <div>
          <menu id='menu'>
            <div id='menu-logo'>
              <Logo currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
            <div id='menu-content'>
              <MainMenu currentPage={currentPage}/>
            </div>
          </menu>
        </div> 
        : null}
        <main id='main'>
          <Routes>
            <Route path='/' element={<WelcomePage setCurrentPage={setCurrentPage}/>} />
            <Route path='/webdev' element={<WebDevPage setCurrentPage={setCurrentPage}/>} />
            <Route path='/music' element={<MusicPage setCurrentPage={setCurrentPage}/>} />
            <Route path='/discography' element={<DiscographyPage setCurrentPage={setCurrentPage}/>} />
            <Route path='/contact' element={<ContactPage setCurrentPage={setCurrentPage}/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    );  
}

export default App;
