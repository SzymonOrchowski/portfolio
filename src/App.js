import './App.css';
import React from 'react';
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
    <div>
      <logo>
        <Logo />
      </logo>
      <menu>
        <MainMenuButton />
        <MainMenu />
      </menu>
      <main>
        <WelcomePage />
      </main>
    </div>
  );
}

export default App;
