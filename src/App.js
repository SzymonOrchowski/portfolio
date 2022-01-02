import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './components/Logo';
import MainMenuButton from './components/MainMenuButton';
import MainMenu from './components/MainMenu';
import WelcomePage from './components/WelcomePage';
import WebDevPage from './components/WebDevPage';
import MusicPage from './components/MusicPage';
import DiscographyPage from './components/DiscographyPage';
import ContactPage from './components/ContactPage';
import useWindowDimensions from './utils/utils';

const minimalWidthToShowMenu = 1000
let mainWidth
window.innerWidth > minimalWidthToShowMenu ? mainWidth = `${window.innerWidth - 150}px` : mainWidth = '100vw'

function App() {
  const [currentPage, setCurrentPage] = useState('WelcomePage')

  return (
    <BrowserRouter>
      <MainContainer>
        {useWindowDimensions().width > minimalWidthToShowMenu ? 
          <Menu>
            <div id='menu-logo'>
              <Logo currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            </div>
            <div id='menu-content'>
              <MainMenu currentPage={currentPage}/>
            </div>
          </Menu>
        : null}
          <Main>
            <Routes>
              <Route path='/' element={<WelcomePage setCurrentPage={setCurrentPage}/>} />
              <Route path='/webdev' element={<WebDevPage setCurrentPage={setCurrentPage}/>} />
              <Route path='/music' element={<MusicPage setCurrentPage={setCurrentPage}/>} />
              <Route path='/discography' element={<DiscographyPage setCurrentPage={setCurrentPage}/>} />
              <Route path='/contact' element={<ContactPage setCurrentPage={setCurrentPage}/>} />
            </Routes>
          </Main>
      </MainContainer>
    </BrowserRouter>
    );  
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Menu = styled.div`
  width: 150px;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  border-style: solid;
  border-color: blue;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
`

let Main = styled.div`
  border-style: solid;
  border-color: red;
  border-width: 1px;
  width: ${mainWidth};
`

export default App;
