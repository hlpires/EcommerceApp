import React,{createContext,useContext,useState,useEffect,useRef} from 'react';
import {Header,Produtosdois} from '../../components/index'
import {client} from '../../lib/client'
import {urlFor} from '../../lib/client'
import {useRouter} from 'next/router'
import getStripe from '../../lib/getStripe';
import Link from 'next/link'


const DetalhesProdutos = (produtos) => {

  const router =  useRouter()



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
const [product,setProduct] = useState(set)


const calcular = () => {
let updatedValue = {};
updatedValue = {nome:produtos.produtos[product].nome,
price:produtos.produtos[product].preco * qty,
quantity:qty,
imagem:produtos.produtos[product].imagem?.[0].asset._ref};


setCart((prevState) => ([
updatedValue,
...prevState

]));


console.log(cart)

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
            
            <img className = 'detalhesImgSize' src = {urlFor(produtos.produtos[product].imagem?.[0].asset._ref)}></img>
          </div>
            <div className = 'conteudoProdutosBox'>
            <div className = 'detalhesImgTittle' >{produtos.produtos[product].nome}</div>
            <div className = 'detalhesTextDetails'>{produtos.produtos[product].detalhes}</div>
            <div className = 'detalhesPreco' > <p className = 'dinheiro'>R$:</p>{produtos.produtos[product].preco}</div>   
            <div className = 'detalhesTextComprar' >
              <p className = 'carrinhoText' onClick = {calcular}></p>
              <div className = 'quantidade'>
              
              <div className = 'quantidadeItem' id = 'quantidademais' onClick = {incQty}></div>
              <span className = 'count'>{qty}</span>
              
              <div className = 'quantidadeItem' id = 'quantidademenos' onClick = {decQty}></div>

            </div>
            </div>
            <div className ='quantidadeComprarBox'>

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
                        <div className = 'itemCartName' >{ cart[0].quantity}</div>
                        <div className = 'itemCartPreco'><p className = 'dinheiro1'>R$:</p>{cart[0].price}</div>
                      </div>
                          )}})()}
              
           {(() => {
                    if (typeof cart[1] !== 'undefined' && cart[1] !== null ) {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[1].imagem)}></img>
                        <div className = 'itemCartName' >{cart[1].nome}</div>
                        <div className = 'itemCartName' >{ cart[0].quantity}</div>
                        <div className = 'itemCartPreco'><p className = 'dinheiro1'>R$:</p>{cart[1].price}</div>
                      </div>
                          )}})()}    

{(() => {
                    if (typeof cart[2] !== 'undefined' && cart[2] !== null ) {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[2].imagem)  }></img>
                        <div className = 'itemCartName' >{cart[2].nome}</div>
                        <div className = 'itemCartName' >{ cart[0].quantity}</div>
                        <div className = 'itemCartPreco'><p className = 'dinheiro1'>R$:</p>{cart[2].price}</div>
                      </div>
                          )}})()}

{(() => {
                    if (typeof cart[3] !== 'undefined' && cart[3] !== null) {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[3].imagem) }></img>
                        <div className = 'itemCartName' >{cart[3].nome}</div>
                        <div className = 'itemCartName' >{ cart[0].quantity}</div>
                        <div className = 'itemCartPreco'><p className = 'dinheiro1'>R$:</p>{cart[3].price}</div>
                      </div>
                          )}})()}

{(() => {
                    if (typeof cart[4] !== 'undefined' && cart[4] !== null) {
                       return ( 
                        <div className = 'itemCartBox'>
                        <img className = 'itemCartImg' src = {urlFor (cart[4].imagem)  }></img>
                        <div className = 'itemCartName' >{cart[4].nome}</div>
                        <div className = 'itemCartName' >{ cart[0].quantity}</div>
                        <div className = 'itemCartPreco'><p className = 'dinheiro1'>R$:</p>{cart[4].price}</div>
                      </div>
                       )}})()}

{(() => {
                    if (typeof cart[0] !== 'undefined' && cart[4] !== null) {
                       return ( 
                         <div>
               
                        <div className = 'removerItens' onClick = {() => {setCart([])}}>Remover Itens</div>                                 
                        <button className = 'comprarStripe' type="button" onClick={handleCheckout}>Comprar</button> 
                        </div> 
                       )}})()}
                         
         
 
                    </div>
        </div> 

      </div>
      
      </div>
      <div className ='produtosdois'>
        
            <div className ='produtosdoisbox1'>
            <div className = 'produtosdoisItem' ><img className='produtosDoisImg' onClick = {() => {setProduct(2)}} src={urlFor(produtos.produtos[2].imagem?.[0])} alt="" /></div>
            <div className = 'produtosdoisItem' ><img className='produtosDoisImg' onClick = {() => {setProduct(0)}} src={urlFor(produtos.produtos[0].imagem?.[0])} alt="" /></div>
              <div className = 'produtosdoisItem' ><img className='produtosDoisImg' onClick = {() => {setProduct(3)}} src={urlFor(produtos.produtos[3].imagem?.[0])} alt="" /></div>
             <div className = 'produtosdoisItem' > <img className='produtosDoisImg' onClick = {() => {setProduct(4)}} src={urlFor(produtos.produtos[4].imagem?.[0])} alt="" /></div>
             <div className = 'produtosdoisItem' ><img className='produtosDoisImg' onClick = {() => {setProduct(5)}} src={urlFor(produtos.produtos[5].imagem?.[0])} alt="" /></div>
              <div className = 'produtosdoisItem' > <img className='produtosDoisImg' onClick = {() => {setProduct(6)}} src={urlFor(produtos.produtos[6].imagem?.[0])} alt="" /></div>
             <div className = 'produtosdoisItem' > <img className='produtosDoisImg' onClick = {() => {setProduct(8)}} src={urlFor(produtos.produtos[8].imagem?.[0])} alt="" /></div>
             <div className = 'produtosdoisItem'><img className='produtosDoisImg' onClick = {() => {setProduct(9)}} src={urlFor(produtos.produtos[9].imagem?.[0])} alt="" /></div>
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
