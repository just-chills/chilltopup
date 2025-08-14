import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'

import Hero from './components/Hero/Hero.jsx'
import Flash from './components/Flash/Flash.jsx'
import New from './components/New/New.jsx'
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
              <Flash />
              <New />
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App