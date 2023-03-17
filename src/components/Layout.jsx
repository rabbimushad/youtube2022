import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className='container'>{children}</div>
            <Footer/>
        </>
      
  )
}

export default Layout