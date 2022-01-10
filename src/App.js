import './App.css';
import React, { useState, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './components/Logo';
import MenuFooter from './components/MenuFooter';
import MainMenuButton from './components/MainMenuButton';
import MainMenu from './components/MainMenu';
import WelcomePage from './components/WelcomePage';
import WebDevPage from './components/WebDevPage';
import MusicPage from './components/MusicPage';
import DiscographyPage from './components/DiscographyPage';
import ContactPage from './components/ContactPage';
import {useWindowDimensions} from './utils/utils';

const minimalWidthToShowMenu = 1000
let mainWidth
window.innerWidth > minimalWidthToShowMenu ? mainWidth = `${window.innerWidth - 150}px` : mainWidth = '100vw'

function App() {
  const [currentPage, setCurrentPage] = useState('WelcomePage')
  const [fullScreenMenuIsVisible, setFullScreenMenuIsVisible] = useState(false)

  const webDevAboutMe = useRef(null)
  const projects = useRef(null)
  const education = useRef(null)
  const skills = useRef(null)
  const webDevContact = useRef(null)

  const musicAboutMe = useRef(null)
  const myWorks = useRef(null)
  const myMusic = useRef(null)
  const myDiscography = useRef(null)
  const musicForMarketing = useRef(null)
  const filmScoring = useRef(null)
  const soundDesign = useRef(null)
  const musicContact = useRef(null)

  const refs = {webDevAboutMe, projects, education, skills, webDevContact, musicAboutMe, myWorks, myMusic, myDiscography, musicForMarketing, filmScoring, soundDesign, musicContact}


  return (
    <BrowserRouter>
      <MainContainer>
        {useWindowDimensions().width > minimalWidthToShowMenu ? 
          <Menu>
            <div id='menu-logo'>
              <Logo currentPage={currentPage} setCurrentPage={setCurrentPage} fullScreenMenuIsVisible={fullScreenMenuIsVisible} setFullScreenMenuIsVisible={setFullScreenMenuIsVisible}/>
            </div>
            <div id='menu-content'>
              <MainMenu 
                currentPage={currentPage}
                refs={refs}
                fullScreenMenuIsVisible={fullScreenMenuIsVisible}
                setFullScreenMenuIsVisible={setFullScreenMenuIsVisible}
              />
            </div>
            <div id='menu-footer'>
              <MenuFooter />
            </div>
          </Menu>
        : <div>
          {!fullScreenMenuIsVisible ? <MainMenuButton fullScreenMenuIsVisible={fullScreenMenuIsVisible} setFullScreenMenuIsVisible={setFullScreenMenuIsVisible}/> : <>
          <MainMenuButton fullScreenMenuIsVisible={fullScreenMenuIsVisible} setFullScreenMenuIsVisible={setFullScreenMenuIsVisible}/>
          <FullScreenMenu>
          <div id='menu-logo'>
              <Logo currentPage={currentPage} setCurrentPage={setCurrentPage} fullScreenMenuIsVisible={fullScreenMenuIsVisible} setFullScreenMenuIsVisible={setFullScreenMenuIsVisible}/>
            </div>
            <div id='menu-content'>
              <MainMenu 
                currentPage={currentPage}
                refs={refs}
                fullScreenMenuIsVisible={fullScreenMenuIsVisible}
                setFullScreenMenuIsVisible={setFullScreenMenuIsVisible}
              />
            </div>
            <div id='menu-footer'>
              <MenuFooter />
            </div>
          </FullScreenMenu>
          </>}
          </div>}
          <div id='main'>
            <Routes>
              <Route path='/' element={<WelcomePage setCurrentPage={setCurrentPage}/>} />
              <Route path='/webdev' element={<WebDevPage setCurrentPage={setCurrentPage} refs={refs}/>} />
              <Route path='/music' element={<MusicPage setCurrentPage={setCurrentPage} refs={refs}/>} />
              <Route path='/discography' element={<DiscographyPage setCurrentPage={setCurrentPage}/>} />
              <Route path='/contact' element={<ContactPage setCurrentPage={setCurrentPage}/>} />
            </Routes>
          </div>
      </MainContainer>
    </BrowserRouter>
    );  
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const Menu = styled.div`
  color: #FFFFFF;
  background-color: #181818; 
  height: 100vh;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
  scrollbar-width: none;
  overflow-y: scroll;
`

const FullScreenMenu = styled.div`
  color: #FFFFFF;   
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  align-items: center;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: hidden;
  scrollbar-width: none;
  overflow-y: scroll;
  z-index: 80;
`

export default App;
