import { BrowserRouter, Routes, Route } from 'react-router';
import Slash from './Slash';
import './App.css';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Slash/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
