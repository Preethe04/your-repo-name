import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Plans from './components/Plans/Plans'
import Title from './components/Title/Title'
import Intro from './components/Intro/Intro'
import Price from  './components/Price/Price'
import About from  './components/About/About'
import Contact from  './components/Contact/Contact'


const App = () => {
  return (
    <div>
   
       <Navbar/>
       <Intro/>
      <div className="container">
       <Title subTitle='Might have variants and no frequent repetation' title='OUR PLANS'/>
      <Plans/>
      <Title subTitle='Free Delivery between 06:00 am to 9:30pm' title='PRICE PLANS'/>
      <Price/>
      
      </div>
      <Title subTitle=''title='FREQUENTLY ASKED QUESTIONS'/>
      <Hero/>
      <div className="container">
      <Title subTitle=''title='Why choose us'/>
      <About/>
      <Title subTitle='Wholesome Bites for a healthier you!'title='Contact Us'/>
      <Contact/>
     </div>
    </div>
  )
}

export default App

