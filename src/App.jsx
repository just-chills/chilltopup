import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Menu from './components/Menu/Menu.jsx'
import Sel_game from './components/Sel_game/Game.jsx'
import Flash from './components/Flash/Flash.jsx'
import New from './components/New/New.jsx'
import Why from './components/Why/Why.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <div className='bg-secondary'>
        <header>
          <Navbar/>
        </header>
        <main className='flex grow shrink-0 basis-auto max-w-full ease-in-out duration-200'>
          <div className='flex-auto max-w-full relative overflow-hidden'>
            <div>
              <Hero/>
              <Menu/>
              <Sel_game />
              <Flash />
              <New />
              <Why />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App