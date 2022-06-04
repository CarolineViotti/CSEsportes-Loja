import { Link } from 'react-router-dom';
import './style.css';


function Descr() {
    return(
        <div className='descr'>
       
            <img className='descrimg' src='/img/jordan4.jpg' />
           
           <div className='descriPr'>
            <div className='rowCard'>
        <div className='card'>
        

            <h1>Tenis Nike air jordan 4 retro</h1>
            <p>expecificações do produto</p>
            <h3>R$150,00</h3>
            <h4>à vista</h4>

            <div class="dropdown">
  <button >Forma de pagamento</button>
  <div class="dropdown-content">
    <a href="#">cartão de crédito</a>
    <a href="#">boleto</a>
  </div>
</div>
          
            <Link to='/carrinho'><button>Ir à compra</button></Link>
            
            </div>
        </div>
        </div>

        </div>
        
    );
}



export default Descr;