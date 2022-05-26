
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

    
<br />
<br />
<br />

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