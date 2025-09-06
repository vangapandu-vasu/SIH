import { BrowserRouter, Routes, Route } from 'react-router';
import Slash from './Slash';
import './App.css';
import User from './user';
import Mentor from './Mentor';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Slash/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/Mentor' element={<Mentor/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
