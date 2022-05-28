
import './style.css';

function LoginL() {
    return(
       <div >

<div class="container">
	<div class="screen">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name / Email" />
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password" />
				</div>
				<button class="button login__submit">
					<span class="button__text">Faça login agora</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="social-login">
				<h3>Fazer login via</h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-google"><img  class="instagram" src="/img/google.png" /></a>
					<a href="#" class="social-login__icon fab fa-facebook"><img  class="instagram" src="/img/facebook.png" /></a>
					<a href="#" class="social-login__icon fab fa-instagram"><img  class="instagram" src="/img/insta.png" /></a>
				</div>
			</div>
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
            
       </div>
    );
}



export default LoginL;