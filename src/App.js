import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';
import MainMenuButton from './components/MainMenuButton';
import MainMenu from './components/MainMenu';
import WelcomePage from './components/WelcomePage';
import WebDevPage from './components/WebDevPage';
import MusicPage from './components/MusicPage';
import DiscographyPage from './components/DiscographyPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <logo>
          <Logo />
        </logo>
        <menu>
          <MainMenuButton />
          <MainMenu />
        </menu>
        <main>
          <Routes>
            <Route path='/' element={<WelcomePage/>} />
            <Route path='/webdev' element={<WebDevPage/>} />
            <Route path='/music' element={<MusicPage/>} />
            <Route path='/discography' element={<DiscographyPage/>} />
            <Route path='/contact' element={<ContactPage/>} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    );  
}

export default App;
