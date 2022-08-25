import React from 'react'
import Card from './components/Card';
import Container from './components/Container';
import FireTest from './FireTest';
// import "./App.css"
import { app } from "./firebaseConfig"
import Modal from './components/Modal';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Container />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
