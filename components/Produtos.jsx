import React from 'react'
import {urlFor} from '../lib/client'
import Link from 'next/link'
import Router from 'next/router'


const Produtos = ({produtos}) => {



 


  function sendProps(value){
    Router.push({
      
      pathname: "/produtos/[slug]",
      query: { value,slug:'slug'}
    },
    )};
     
  


  return (
    <div className ='produtos'>
      <div className= 'position'>
        <div className = 'produtosBox'>
          
            <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[7].imagem?.[0])} alt="" />
            <h3>{produtos[7].nome}</h3>
            <h4>{produtos[7].detalhes}</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p> Frete Grátis </p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Pagamento em até 24x  </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p> Garantia de 1 ano </p></div>
            </div>
            <h5>R${produtos[7].preco}</h5>
            <div className = 'comprarButton' onClick = {() => sendProps('0')}>Comprar</div>
            
          </div>
        

          
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[1].imagem?.[0])} alt="" />
            <h3>{produtos[1].nome}</h3>
            <h4>{produtos[1].detalhes}</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p>  Frete Grátis</p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Pagamento em até 24x </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p> Garantia de 1 ano</p></div>
            </div>
            <h5>R${produtos[1].preco}</h5>
            <div className = 'comprarButton' onClick = {() => sendProps('1')}>Comprar</div>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[10].imagem?.[0])} alt="" />
            <h3>{produtos[10].nome}</h3>
            <h4>{produtos[10].detalhes}</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p>  Frete Grátis </p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Pagamento em até 24x </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p>  Garantia de 1 ano </p></div>
            </div>
            <h5>R${produtos[10].preco}</h5>
            <div className = 'comprarButton'>Comprar</div>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[8].imagem?.[0])} alt="" />
            <h3>{produtos[8].nome}</h3>
            <h4>{produtos[8].detalhes}</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p>  Frete Grátis</p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Pagamento em até 24x</p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p>  Garantia de 1 ano</p></div>
            </div>
            <h5>R${produtos[8].preco}</h5>
            <div className = 'comprarButton'>Comprar</div>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Produtos