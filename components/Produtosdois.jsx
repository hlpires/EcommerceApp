import React from 'react'
import {urlFor} from '../lib/client'

const produtosdois = ({produtos}) => {
  return (
    <div className ='produtosdois'>
        <div className ='position'>
            <div className ='produtosdoisbox'>
                <div className = 'produtosdoisItem'> <img className='produtosDoisImg' src={urlFor(produtos[2].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem'><img className='produtosDoisImg' src={urlFor(produtos[0].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem'><img className='produtosDoisImg' src={urlFor(produtos[3].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem'><img className='produtosDoisImg' src={urlFor(produtos[4].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem'><img className='produtosDoisImg' src={urlFor(produtos[5].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem'><img className='produtosDoisImg' src={urlFor(produtos[6].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem'><img className='produtosDoisImg' src={urlFor(produtos[8].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem'><img className='produtosDoisImg' src={urlFor(produtos[9].imagem?.[0])} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default produtosdois