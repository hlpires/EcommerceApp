import React,{createContext,useContext,useState,useEffect,useRef} from 'react';
import {Header, Product} from '../../components/index'
import {client} from '../../lib/client'
import {urlFor} from '../../lib/client'
import {useRouter} from 'next/router'




const detalhesProdutos = (produtos) => {


  
  

const [qty, setQty] = useState(1);
const [price, setPrice] = useState(0);
const [produtosCart, setProdutosCart] = useState('');
 
const incQty = () => { 
setQty((prevQty) => prevQty + 1);
}

const decQty = () =>{  
setQty((prevQty) => prevQty - 1);
}

const buy = () =>{
setPrice(produtos.produtos[set].preco * qty)

}

 
const [cart, setCart] = useState([]);

useEffect(() => {
const data = window.localStorage.getItem('cart');
setCart(data)


}, [])


useEffect(() => {

  console.log(price)
  window.localStorage.setItem('cart',JSON.stringify(cart));


}, [buy])


console.log(cart)







const router =  useRouter()
const {
query:{value}} = router

  const set = parseInt(value)






  return (
      
    <div>
        <Header/>
        
        
        
      <div className = 'detalhes'>
      
    
      <div className = 'positionDetalhes'>
        <div className = 'detalhesBox'>
          <div className='detalhesImg'>
            <div className = 'detalhesImgTittle' >{produtos.produtos[set].nome}</div>
            <img className = 'detalhesImgSize' src = {urlFor(produtos.produtos[set].imagem?.[0])}></img>
          </div>
          <div className='detalhesText'>
            <div className = 'detalhesTextTittle'>{produtos.produtos[set].nome}</div>
            <div className = 'detalhesTextDetails'>{produtos.produtos[set].detalhes}</div>
            <div className ='multiD'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p>  Frete Grátis </p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Pagamento em até 24x </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p>  Garantia de 1 ano </p></div>
            </div>

            <div className = 'detalhesTextComprar' onClick = {buy}>Comprar</div>
            <div className = 'detalhesTextComprar' onClick = {'addProdutos'}>Carrinho</div>

            <div className ='quantidadeComprarBox'>
            <div className = 'quantidade'>
              <p className = 'quantidadeText'>{cart}</p>
              <div className = 'quantidadeItem' onClick = {decQty}>-</div>
              <div className = 'quantidadeItem'><span className = 'count'>{qty}</span></div>
              <div className = 'quantidadeItem' onClick = {incQty}>+</div>
              

            </div>
            
            
            </div>
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

export default detalhesProdutos
