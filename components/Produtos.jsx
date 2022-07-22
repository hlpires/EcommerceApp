import React from 'react'
import {urlFor} from '../lib/client'
import fretemini from '../img/fretemini.png'
import heartmini from '../img/heartmini.png'
import promomini from '../img/promomini.png'

const Produtos = ({produtos}) => {
  return (
    <div className ='produtos'>
      <div className= 'position'>
        <div className = 'produtosBox'>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>Mussum Ipsum, cacilds vidis litro abertis</h3>
            <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro </p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro  </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro </p></div>
            </div>
            <h5>R${produtos[0].preco}</h5>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>Mussum Ipsum, cacilds vidis litro abertis</h3>
            <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro </p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro  </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro </p></div>
            </div>
            <h5>R${produtos[0].preco}</h5>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>Mussum Ipsum, cacilds vidis litro abertis</h3>
            <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro </p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro  </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro </p></div>
            </div>
            <h5>R${produtos[0].preco}</h5>
          </div>
          <div className ='produtosItem'>
            <img className = 'produtosImg' src={urlFor(produtos[0].imagem?.[0])} alt="" />
            <h3>Mussum Ipsum, cacilds vidis litro abertis</h3>
            <h4>Mussum Ipsum, cacilds vidis litro abertis</h4>
            <div className ='multi'>
              <div className = 'multiItem'> <div id='multiImg1' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro </p></div>
              <div className = 'multiItem'> <div id='multiImg2' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro  </p></div>
              <div className = 'multiItem'> <div id='multiImg3' className ='multiImg' alt="" /> <p> Mussum Ipsum, cacilds vidis litro </p></div>
            </div>
            <h5>R${produtos[0].preco}</h5>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Produtos