import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Book from '../components/Book'

function ManageBook() {
  return (
    <div>
        <Navbar/>
  
      <Book/>    
      <hr></hr>
        <Footer/>
    </div>
  )
}

export default ManageBook