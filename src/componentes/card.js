import './style.css';

function Card() {
    return(
        <div className='rowCard'>
        <div className='card'>
            <img src='/img/jordan4.jpg' />
            <h1>Tenis Nike air jordan 4 retro</h1>
            <p>descrição tenis</p>
            <h3>R$150,00</h3>
            <button>Comprar</button>
            <button>Adicionar ao carrinho</button>

        </div>
        </div>
    );
}



export default Card;