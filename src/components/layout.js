import React from 'react'
import Navbar from './Navbar'
import Header from "../components/Header"
import Footer from './Footer'
import Contact from './Contact'
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../scss/custom.scss"


const layout = ({children}) => {
  return (
    <>
        <Navbar />
        <Header />
            <main>{children}</main>
        <Contact />
        <Footer />
    </>
  )
}

export default layout