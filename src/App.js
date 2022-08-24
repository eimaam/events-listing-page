import React from 'react'
import Card from './components/Card';
import Container from './components/Container';
import FireTest from './FireTest';
// import "./App.css"
import { app } from "./firebaseConfig"
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Container />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
