import React from 'react'
import Navbar from './Navbar'
import Header from "../components/Header"
import Footer from './Footer'
import "./layout.css"

const layout = ({children}) => {
  return (
    <>
        <Navbar />
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default layout