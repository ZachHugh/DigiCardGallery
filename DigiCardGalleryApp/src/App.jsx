import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer'; //I do not know why this is acting up specifically, the code still works fine?
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">  
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
