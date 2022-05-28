import '../componentes/style.css';
import Navbar from '../componentes/navbar';
import LoginL from '../componentes/login';

function Login() {
    return( 
        <div>
        <div >
<Navbar />
</div>

<br /><br /><br /><br /><br />
<div className='containerlogin'>
<LoginL />

</div>

</div>

    );
}

export default Login;