import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
    return(
       <div className='navbar'>
           <ul>
            <li><Link to='/'><img  class="senukimg" src="/img/carlimdoceu.png" /></Link></li>
            <li><Link to='/'><a class="active">Home</a></Link></li>
            <li><Link to='/produtos'><a class="active">Produtos</a></Link></li>
            <li><Link to='/contato'><a class="active">Contato</a></Link></li>
            <li><Link to='/login'><a class="active">Login</a></Link></li>
            <li><Link to='/help'><a class="active">Help</a></Link></li>
            <li><Link to='/carrinho'><a class="active">Carrinho</a></Link></li>

            <div class="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit">Buscar<i class="fa fa-search"></i></button>
    </form>
  </div>

           </ul> 
       </div>
    );
}



export default Navbar;