import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Banner from './components/Banner'

function App() {
  return (
    <>
      <div className='box-border m-0 bg-bgDark'>
        <Header />
        <section className='pt-16 w-full'>
          <Banner />

        </section>
      </div>
    </>
  )
}

export default App
