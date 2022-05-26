
import '../componentes/style.css';
import Produtox from '../componentes/produtos'; 
import Navbar from '../componentes/navbar'; 

function ProdutosP() {
    return(
         <div>
    <div >
<Navbar />
</div>



    <div className='container'>

    
<br />
<br />
<br />

      <h1>produtos w</h1>
      <div className='carrossel'>
      
      
      <Produtox /> 
      <Produtox /> 
      <Produtox /> 
      <Produtox /> 
        

      </div>
      

    </div>

    

</div>
    );
}



export default ProdutosP;