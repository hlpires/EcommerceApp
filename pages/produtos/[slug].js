import React from 'react'
import {Header} from '../../components/index'
import {client} from '../../lib/client'
import {urlFor} from '../../lib/client'



const detalhesProdutos = (produtos) => {
  return (
      
    <div>
        <Header/>
        
      <div className = 'detalhes'>
      {console.log(produtos)}
      <div className = 'positionDetalhes'>
        <div className = 'detalhesBox'>
          <div className='detalhesImg'>
            <div className = 'detalhesImgTittle'>{produtos.produtos[0].nome}</div>
            <img className = 'detalhesImgSize' src = {urlFor(produtos.produtos[0].imagem?.[0])}></img>
          </div>
          <div className='detalhesText'>
            <div className = 'detalhesTextTittle'>{produtos.produtos[0].nome}</div>
            <div className = 'detalhesTextDetails'>{produtos.produtos[0].detalhes}</div>
            <div className = 'detalhesTextMulti'>

            </div>
            <div className = 'detalhesTextComprar'>Comprar</div>
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