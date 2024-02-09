import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import{
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News key="g" category='general'/>}></Route>
          <Route exact path="/about" element={<News key="g" category='general'/>}></Route>
          <Route exact path="/sports" element={<News key="s" category='sports'/>}></Route>
          <Route exact path="/technology" element={<News key="t" category='technology'/>}></Route>
          <Route exact path="/health" element={<News key="h" category='health'/>}></Route>
          <Route exact path="/business" element={<News key="b" category='business'/>}></Route>
          <Route exact path="/entertainment" element={<News key="e" category='entertainment'/>}></Route>
          <Route exact path="/science" element={<News key="sc" category='science'/>}></Route>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
