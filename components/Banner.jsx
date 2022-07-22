import React from 'react'
import semjuros from '../img/semjuros.png'
import getServerSideProps from '../pages/index'
import {urlFor} from '../lib/client'

const Banner = ({produtos}) => {
  return (
    
    <div className = 'banner'>
      {console.log(produtos)}
      {console.log(produtos[0].imagem?.[0])}
      
          
        <div className = 'position'>
            <div className = 'bannerBox'>
                <div className = 'bannerImgBox'>
                  <img className='imagemPrincipal' src={urlFor(produtos[0].imagem?.[0])} alt="" />
                  <h1>{produtos[0].nome}</h1>
                  <h2>{produtos[0].detalhes}</h2>
                </div>
                
                <div className = 'bannerItens'>
                    <div className ='bannerItem' id ='bannerItem1'> </div>
                    <div className ='bannerItem' id ='bannerItem2'> </div>
                    <div className ='bannerItem' id ='bannerItem3'> </div>
                    <div className ='bannerItem' id ='bannerItem4'> </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}



export default Banner