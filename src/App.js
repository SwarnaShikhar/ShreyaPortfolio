import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import AboutMe from "./pages/AboutMe"
import Project from "./pages/Projects"
import Blogs from "./pages/Blogs"
import Skills from './pages/Skills'
import ContactMe from "./pages/ContactMe"
import Experience from "./pages/Experience"



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<AboutMe/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/skills' element={<Skills/>}/>
      <Route path='/contactme' element={<ContactMe/>}/>
      <Route path='/experience' element={<Experience/>}/>
    </Routes>
    </>
  )
}

export default App;
