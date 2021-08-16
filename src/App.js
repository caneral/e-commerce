import React from 'react'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Content from './layouts/Content'
const App = () => {
  return (
    <div>
      <div className="min-h-screen">
        <Header/>
        <Content />
        <Footer/>
      </div>
    </div>
  )
}

export default App
