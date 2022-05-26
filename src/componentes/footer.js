import { Link } from 'react-router-dom';
import './style.css';

function Footer() {
    return(
        <div>

        <footer class="footer-distributed">
        
        <div class="footer-left">
        
        <h3> Esportes<span> Carlim Senuk</span></h3>
        
        <p class="footer-links">
        <a ><Link to='/produtos'>Vendas</Link></a>
        ·
        <a ><Link to='/login'>Login</Link></a>
        ·
        <a ><Link to='/produtos'>Marcas</Link></a>
        ·
        <a href="https://bit.ly/3u6pFwg">Contato</a>
        </p>
        
        <p class="footer-company-name">CS Esportes</p>
        </div>
        
        <div class="footer-center">
        
        <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Rua Sergipe, 205, Baixada</span> São Joaquim da Barra - 14600-000</p>
        </div>
        
        <div>
        <i class="fa fa-phone"></i>
        <p>+55 16 98151-9979</p>
        </div>
        
        <div>
        <i class="fa fa-envelope"></i>
        <p><a href="https://mail.google.com/mail/u/0/?hl=pt-BR#search/jcsenuk%40gmail.com?compose=new">jcsenuk@gmail.com</a></p>
        </div>
        
        </div>
        
        <div class="footer-right">
        
        <p class="footer-company-about">
        <span>About the company</span>
        Trabalhamos com produtos, acessórios, suplementos, confecções e ademais recursos de venda do ramo esportivo</p>
        
        <div class="footer-icons">
        
        <a href="https://www.facebook.com/carlim.senukciclista"><i class="fa fa-facebook"><img  class="facebook" src="/img/facebook.png" /></i></a>
        <a href="https://instagram.com/cs_esportes?igshid=YmMyMTA2M2Y="><i class="fa fa-instagram"><img  class="instagram" src="/img/insta.png" /></i></a>
        
        </div>
        
        </div>
        
        </footer>

        </div>
    );
}



export default Footer;