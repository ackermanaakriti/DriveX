import React from 'react'
import Container from './components/container/container';
import Navbar from './components/navbar/navbar';
import Secondbx from './components/secondbx/Secondbx';
import {  Route, Routes} from 'react-router-dom';


function App() {
  return (<>
  <Routes>
  <Route path='/' element={<Navbar/>}/>
  <Route path='/forlearner' element={<Container/>}/>
  <Route path='/forinstructor' element={<Secondbx/>}/>

    </Routes>
    <Container/>
    <Secondbx/>
    
   
    </>
  )
}

export default App