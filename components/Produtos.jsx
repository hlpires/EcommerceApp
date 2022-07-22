import React from 'react'
import {urlFor} from '../lib/client'

const Produtos = ({produtos}) => {
  return (
    <div className ='produtos'>
      <div className= 'position'>
        <div className = 'produtosBox'>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>Mussum Ipsum, cacilds vidis litro abertis</h3>
            <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>Mussum Ipsum, cacilds vidis litro abertis</h3>
            <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>Mussum Ipsum, cacilds vidis litro abertis</h3>
            <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>Mussum Ipsum, cacilds vidis litro abertis</h3>
            <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Produtos