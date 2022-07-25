import React from 'react'
import {Header} from '../../components/index'
import {client} from '../../lib/client'
import {urlFor} from '../../lib/client'
import {useRouter} from 'next/router'



const detalhesProdutos = (produtos) => {

  const router =  useRouter()
  const {
    query:{value}
  } = router

  const set = parseInt(value)
  console.log(set,1)
  console.log(set,1)
  console.log(set,1)






  return (
      
    <div>
        <Header/>
        
        
      <div className = 'detalhes'>
      
    
      <div className = 'positionDetalhes'>
        <div className = 'detalhesBox'>
          <div className='detalhesImg'>
            <div className = 'detalhesImgTittle' onClick = {''}>{produtos.produtos[0].nome}</div>
            <img className = 'detalhesImgSize' src = {urlFor(produtos.produtos[set].imagem?.[0])}></img>
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