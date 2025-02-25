import React from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Search />
      </main>
      <Footer />
    </div>
  )
}

export default App
