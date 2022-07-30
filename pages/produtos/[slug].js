import React,{createContext,useContext,useState,useEffect,useRef} from 'react';
import {Header, Product} from '../../components/index'
import {client} from '../../lib/client'
import {urlFor} from '../../lib/client'
import {useRouter} from 'next/router'
import getStripe from '../../lib/getStripe';






const DetalhesProdutos = (produtos) => {

  const router =  useRouter()


  
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/checkout',{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      body:JSON.stringify(cart),
    });

    if(response.statusCode === 500) return;

    const data = await response.json();

    console.log('redirecting')

    stripe.redirectToCheckout({sessionId:data.id});
    
  }


const [qty, setQty] = useState(1);
const [Info, setInfo] = useState('');
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
preco:produtos.produtos[set].preco * qty,
imagem:produtos.produtos[set].imagem?.[0].asset._ref};


const produto2= cart[0]?.item1;
const produto3= cart[1]?.item2;
const produto4= cart[2]?.item3;
const produto5= cart[3]?.item4;


setCart(cart => ([
  {item1:updatedValue},
  {item2:produto2},
  {item3:produto3},
  {item4:produto4},
  {item5:produto5},

]));
}




const [estado, setEstado] = useState('none');



const mudarStyle = {
  display: estado
}
 
console.log(cart)



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
                        <img className = 'itemCartImg' src = {urlFor (cart[0]?.item1.imagem)  }></img>
                        <div className = 'itemCartName' >{cart[0]?.item1.nome}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart[0]?.item1.preco}</div>
                      </div>
                          )}})()}
              
           {(() => {
                    if (typeof cart[1]?.item2 !== 'undefined') {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[1]?.item2.imagem)}></img>
                        <div className = 'itemCartName' >{cart[1]?.item2.nome}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart[1]?.item2.preco}</div>
                      </div>
                          )}})()}    

{(() => {
                    if (typeof cart[2]?.item3 !== 'undefined') {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[2]?.item3.imagem)  }></img>
                        <div className = 'itemCartName' >{cart[2]?.item3.nome}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart[2]?.item3.preco}</div>
                      </div>
                          )}})()}

{(() => {
                    if (typeof cart[3]?.item4 !== 'undefined') {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[3]?.item4.imagem)  }></img>
                        <div className = 'itemCartName' >{cart[3]?.item4.nome}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart[3]?.item4.preco}</div>
                      </div>
                          )}})()}

{(() => {
                    if (typeof cart[4]?.item5 !== 'undefined') {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[4]?.item5.imagem)  }></img>
                        <div className = 'itemCartName' >{cart[4]?.item5.nome}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart[4]?.item5.preco}</div>
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
