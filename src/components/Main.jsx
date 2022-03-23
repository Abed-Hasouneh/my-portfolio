import React from 'react'

import Header from './Header';
import Technologies from './Technologies'
import Projects from './Projects';
import Contact from './Contact';
const Main = () => {
  return (
    <div className='container'>
        <Header/>
        <Technologies/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Main