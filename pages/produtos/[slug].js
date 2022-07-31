import React,{createContext,useContext,useState,useEffect,useRef} from 'react';
import {Header, Product} from '../../components/index'
import {client} from '../../lib/client'
import {urlFor} from '../../lib/client'
import {useRouter} from 'next/router'
import getStripe from '../../lib/getStripe';



const DetalhesProdutos = (produtos) => {

  const router =  useRouter()



const [cartApi,setCartAPi] = useState([]);
const [qty, setQty] = useState(1);
const [cart, setCart] = useState([]);
 
const incQty = () => { 
setQty((prevQty) => prevQty + 1);
setEstado('none')
}

const decQty = () =>{  
setQty((prevQty) => prevQty - 1);
setEstado('none')
}


useEffect(() => {
  const data = window.localStorage.getItem('cart');
  if (data !== null)
  setCart(JSON.parse(data))

 
}, [])

useEffect(() => {
  window.localStorage.setItem('cart',JSON.stringify(cart));
  

}, [cart])


const {
query:{value}} = router

const set = parseInt(value)

const calcular = () => {
let updatedValue = {};
updatedValue = {nome:produtos.produtos[set].nome,
price:produtos.produtos[set].preco * qty,
quantity:qty,
imagem:produtos.produtos[set].imagem?.[0].asset._ref};


const produto2= cart[0];
const produto3= cart[1];
const produto4= cart[2];
const produto5= cart[3];


setCart(cart => ([
  updatedValue,
  produto2,
  produto3,
  produto4,
  produto5,

]));

setCartAPi(cart => ([
  updatedValue,
  produto2,
  produto3,
  produto4,
  produto5,

]));


}




const [estado, setEstado] = useState('none');



const mudarStyle = {
  display: estado
}
 



  
const handleCheckout = async () => {
    
  const stripe = await getStripe();
  

  const response = await fetch('/api/checkout',{
    
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(cart),
    
  });

  const data = await response.json();

  stripe.redirectToCheckout({sessionId:data.id});
  
}










  return (
      
    <div>
        <Header/>
        
        
        
      <div className = 'detalhes'>
      
    
      <div className = 'positionDetalhes'>
        <div className = 'detalhesBox'>
          <div className='detalhesText'>
          <div className='detalhesImg'>
            <div className = 'detalhesImgTittle' >{produtos.produtos[set].nome}</div>
            <img className = 'detalhesImgSize' src = {urlFor(produtos.produtos[set].imagem?.[0].asset._ref)}></img>
          </div>
            
            <div className = 'detalhesTextDetails'>{produtos.produtos[set].detalhes}</div>
            <div className ='multiD'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p>  Frete Grátis </p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Pagamento em até 24x </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p>  Garantia de 1 ano </p></div>
            </div>

            <div className = 'detalhesTextComprar' style = {mudarStyle} onClick = {() => {setCart(Info)}}>Comprar</div>
            <div className = 'detalhesTextComprar' onClick = {calcular}><p className = 'carrinhoText'>Carrinho</p></div>

            <div className ='quantidadeComprarBox'>
            <div className = 'quantidade'>
              <p className = 'quantidadeText'>Quantidade:</p>
              <div className = 'quantidadeItem' onClick = {decQty}>-</div>
              <div className = 'quantidadeItem'><span className = 'count'>{qty}</span></div>
              <div className = 'quantidadeItem' onClick = {incQty}>+</div>

            </div>
            </div>
          </div>

          
                  <div className = 'cartBox'>
                  {(() => {
                    if (typeof cart[0] !== 'undefined') {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[0].imagem)  }></img>
                        <div className = 'itemCartName' >{cart[0].nome}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart[0].price}</div>
                      </div>
                          )}})()}
              
           {(() => {
                    if (typeof cart[1] !== 'undefined' && cart[1] !== null && cart.length == 5 ) {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[1].imagem)}></img>
                        <div className = 'itemCartName' >{cart[1].nome}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart[1].price}</div>
                      </div>
                          )}})()}    

{(() => {
                    if (typeof cart[2] !== 'undefined' && cart[2] !== null && cart.length == 5) {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[2].imagem)  }></img>
                        <div className = 'itemCartName' >{cart[2].nome}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart[2].price}</div>
                      </div>
                          )}})()}

{(() => {
                    if (typeof cart[3] !== 'undefined' && cart[3] !== null && cart.length == 5) {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[3].imagem) }></img>
                        <div className = 'itemCartName' >{cart[3].nome}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart[3].price}</div>
                      </div>
                          )}})()}

{(() => {
                    if (typeof cart[4] !== 'undefined' && cart[4] !== null && cart.length == 5) {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[4].imagem)  }></img>
                        <div className = 'itemCartName' >{cart[4].nome}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart[4].price}</div>
                      </div>
                       )}})()}   

                    <div className = 'removerItens' onClick = {() => {setCart({})}}>Remover Itens</div>
                    <form action="/api/checkout" method="POST">
                      <section>
                      <button className = 'comprarStripe' type="button" onClick={handleCheckout}>Comprar com Stripe</button>
                      </section>
                    </form>
                  </div> 
        </div> 

      </div>
      </div>
    </div>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "produtos"]';
  const produtos = await client.fetch(query);

  
  return {
    props: {produtos}
 }
}

export default DetalhesProdutos
