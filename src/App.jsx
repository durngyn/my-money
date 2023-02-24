import { Route, Routes } from "react-router-dom"

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <div>
      <Navbar />
      <Routes>  
          <Route path="/" element={<Home />}/>   
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
      </Routes>
      </div>
    </div>
  );
}

export default App
