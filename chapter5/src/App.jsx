import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header'
import Body from './component/Body'
import Footer from './component/Footer'

function App() {
  const name = "이정환";

  return (
    <>
      <div className="App">
        <Header />
        <Body name={name} />
        <Footer />
      </div>

    </>
  );
}

export default App
