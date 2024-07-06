import React from 'react'
import Home from './home/Home'
import { Routes, Route } from 'react-router-dom'
import ManageBook from './ManageBook/ManageBook'
import Edit from './components/Edit'


function App() {
  return (<>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/ManageBook" element={<ManageBook/>}></Route>
      </Routes>
  </div>
  </>

  )
}

export default App 