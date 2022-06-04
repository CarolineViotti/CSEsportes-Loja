import { Link } from 'react-router-dom';
import './style.css';

function Card() {
    return(
        <div className='rowCard'>
        <div className='card'>
        
            <img src='/img/jordan4.jpg' />
            <h1>Tenis Nike air jordan 4 retro</h1>
            <p>descrição tenis</p>
            <h3>R$150,00</h3>
            <a ><Link to='/descrprod'><button>Comprar</button></Link></a>
            
            <button>Adicionar ao carrinho</button>
            
        </div>
        </div>
    );
}



export default Card;