import './App.css';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import Contato from './pages/Contato';
import Login from './pages/Login';
import Help from './pages/Help';
import Carrinho from './pages/Carrinho';
import Navbar from './componentes/navbar';




function App() {
  return (
<div>

<BrowserRouter>

  <Routes>
    
    <Route exact path='/' element={<Home />} />
     
    <Route  path='/produtos' element={<Produtos />} />
    <Route  path='/contato' element={<Contato />} />
    <Route  path='/login' element={<Login />} />
    <Route  path='/help' element={<Help />} />
    <Route  path='/carrinho' element={<Carrinho />} />
    </Routes>
</BrowserRouter>


</div>

  
    
  );

}


export default App;
