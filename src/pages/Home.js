import { Link } from 'react-router-dom';
import '../componentes/style.css';
import Card from '../componentes/card'; 
import Navbar from '../componentes/navbar'; 
import Footer from '../componentes/footer';


function HomeH() {
    return(
         <div>
    <div >
<Navbar />
</div>

<br /><br /><br /><br />


    <div className='container'>


    <div class="dropdown">
  <button class="dropbtn">Produtos</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
<div className='dpesquerda'>
<div class="dropdown">
  <button class="dropbtn">Ajuda</button>
  <div class="dropdown-content">
    <a href="#">E-mail</a>
    <a href="https://bit.ly/3u6pFwg">WhatsApp</a>
  </div>
</div>
</div>


      <h1>produtos w</h1>
      <div className='carrossel'>
      
        <Card /> 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
      
<br />
<br />
<br />

      <h1>produtos x</h1>
      <div className='carrossel'>
      
        <Card /> 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

<br />
<br />
<br />

      <h1>produtos y</h1>
      <div className='carrossel'>
      
        <Card /> 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>

<br />
<br />
<br />

      <h1>produtos z</h1>
      <div className='carrossel'>
      
        <Card /> 
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

      </div>
 <Footer />
    </div>

    

</div>
    );
}



export default HomeH;