import React,{createContext,useContext,useState,useEffect,useRef} from 'react';
import {Header, Product} from '../../components/index'
import {client} from '../../lib/client'
import {urlFor} from '../../lib/client'
import {useRouter} from 'next/router'
import { loadStripe } from '@stripe/stripe-js';

loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);


const DetalhesProdutos = (produtos) => {

  const router =  useRouter()
  const {success,canceled} = router.query;

useEffect(() =>{
  console.log('works')
  //const query = new URLSearchParams(window.location.search);
  if (success!==undefined || canceled !== undefined) {
    
          if (success) {
           console.log('Order PLACED');
              }

          
           if (canceled) {
            console.log('Order canceled -- continue to shop around and checkout when you’re ready.');
             }

  } 


},[success,canceled]);


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
updatedValue = {item1:produtos.produtos[set].nome,preco1:produtos.produtos[set].preco * qty,imagem1:produtos.produtos[set].imagem?.[0].asset._ref};




const cartData= cart.item1;
const cartData2= cart.cartData;
const cartData3= cart.cartData2;
const cartData4= cart.cartData3;
const cartData5= cart.cartData4;

const cartPreco= cart.preco1;
const cartPreco2= cart.cartPreco;
const cartPreco3= cart.cartPreco2;
const cartPreco4= cart.cartPreco3;
const cartPreco5= cart.cartPreco4;

const imagemData = cart.imagem1;
const imagemData2 = cart.imagemData;
const imagemData3 = cart.imagemData2;
const imagemData4 = cart.imagemData3;
const imagemData5 = cart.imagemData4;



setCart(cart => ({
  ...updatedValue,
  cartData,
  cartPreco,
  cartData2,
  cartPreco2,
  cartData3,
  cartPreco3,
  cartData4,
  cartPreco4,
  cartData5,
  cartPreco5,
  imagemData,
  imagemData2,
  imagemData3,
  imagemData4,
  imagemData5
}));
}

console.log(produtos)


const [estado, setEstado] = useState('none');



const mudarStyle = {
  display: estado
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
                    if (typeof cart.item1 !== 'undefined') {
                       return (
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart.imagem1)}></img>
                        <div className = 'itemCartName' >{cart.item1}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart.preco1}</div>
                      </div>
                          )}})()}
              
              {(() => {
                    if (typeof cart.cartData !== 'undefined') {
                       return (
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart.imagemData)}></img>
                        <div className = 'itemCartName' >{cart.cartData}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart.cartPreco}</div>
                      </div>
                          )}})()}

{(() => {
                    if (typeof cart.cartData2 !== 'undefined') {
                       return (
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart.imagemData2)}></img>
                        <div className = 'itemCartName' >{cart.cartData2}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart.cartPreco2}</div>
                      </div>
                          )}})()}

{(() => {
                    if (typeof cart.cartData3 !== 'undefined') {
                       return (
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart.imagemData3)}></img>
                        <div className = 'itemCartName' >{cart.cartData3}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart.cartPreco3}</div>
                      </div>
                          )}})()}

{(() => {
                    if (typeof cart.cartData4 !== 'undefined') {
                       return (
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart.imagemData4)}></img>
                        <div className = 'itemCartName' >{cart.cartData4}</div>
                        <div className = 'itemCartPreco'>{'R$' +cart.cartPreco4}</div>
                      </div>
                          )}})()}

                    <div className = 'removerItens' onClick = {() => {setCart({})}}>Remover Itens</div>
                    <form action="/api/checkout" method="POST">
                      <section>
                      <button className = 'comprarStripe' type="submit" role="link">Comprar com Stripe</button>
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
