import React from 'react'
import Navbar from './Navbar'
import Header from "../components/Header"
import Footer from './Footer'
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const layout = ({children}) => {
  return (
    <>
        <Navbar />
        <div className='layout'>
          <Header />
            <main>{children}</main>
          <Footer />
        </div>
        <div className='bgFooter'></div>
        <div className='footer'></div>
    </>
  )
}

export default layout