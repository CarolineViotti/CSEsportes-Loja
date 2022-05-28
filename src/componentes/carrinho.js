import './style.css';

function Carrinhox() {
    return( 
<div className='carx'>

<div id="header-container">
		
	</div>
	<div id="content">	
		<h2>Carrinho de compras</h2>
		<table id="cart">
			<thead>
				<tr>
					<th colspan="2">
						Itens para comprar
					</th>
					<th>
						Preço
					</th>
					<th>
						Quantidade
					</th>
				</tr>
			</thead>
			<tbody>
				<tr class="produto">
					<td class="image">
						<img class="cover" src="/img/jordan4.jpg" />
					</td>
					<td>
						<div class="product">
							<a href="#" class="product-link">Tenis Nike air jordan 4 retro</a> 
						</div>
						<div class="in-stock">Em estoque</div>
						
						<div><a href="#" class="delete-link">Tirar do carrinho</a></div>
					</td>
					<td class="small"><div class="price">R$ 150,00</div></td>
					<td class="small">
						<input class="quantity" type="number" value="1" size="3" maxlength="3" min="1" max="10" step="1" />
					</td>
				</tr>
				<tr class="produto">
					<td class="image">
						<img class="cover" src="/img/jordan4.jpg" />
					</td>
					<td>
						<div class="product">
                        <a href="#" class="product-link">Tenis Nike air jordan 4 retro</a> 
						</div>
						<div class="in-stock">Em estoque</div>
						
						<div><a href="#" class="delete-link">Tirar do carrinho</a></div>
					</td>
					<td class="small"><div class="price">R$ 150,00</div></td>
					<td class="small">
						<input class="quantity" type="number" value="1" size="3" maxlength="3" min="1" max="10" step="1" />
					</td>
				</tr>
				<tr class="produto">
					<td class="image">
						<img class="cover" src="/img/jordan4.jpg" />
					</td>
					<td>
						<div class="product">
                        <a href="#" class="product-link">Tenis Nike air jordan 4 retro</a>  
						</div>
						<div class="in-stock">Em estoque</div>
						
						<div><a href="#" class="delete-link">Tirar do carrinho</a></div>
					</td>
					<td class="small"><div class="price">R$ 150,00</div></td>
					<td class="small">
						<input class="quantity" type="number" value="1" size="3" maxlength="3" min="1" max="10" step="1" />
					</td>
				</tr>
                
				<tr class="footer">
					<td></td>
					<td>Total da compra</td>
					<td><div id="total">R$ 00,00</div></td>
					<td><button class="botaocarrinho">Finalizar compra</button></td>
				</tr>
			</tbody>
		</table>
	</div>
    </div>
       
    );
}

export default Carrinhox;