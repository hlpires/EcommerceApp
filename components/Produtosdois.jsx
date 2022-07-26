import React from 'react'
import {urlFor} from '../lib/client'
import Router from 'next/router'

const produtosdois = ({produtos}) => {


  function sendProps(value){
    Router.push({
      
      pathname: "/produtos/[slug]",
      query: { value,slug:'slug'}
    },
    )};
     

  return (
    <div className ='produtosdois'>
        <div className ='position'>
            <div className ='produtosdoisbox'>
                <div className = 'produtosdoisItem' onClick = {() => sendProps('2')}> <img className='produtosDoisImg' src={urlFor(produtos[2].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem' onClick = {() => sendProps('0')}><img className='produtosDoisImg' src={urlFor(produtos[0].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem' onClick = {() => sendProps('3')}><img className='produtosDoisImg' src={urlFor(produtos[3].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem' onClick = {() => sendProps('4')}><img className='produtosDoisImg' src={urlFor(produtos[4].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem' onClick = {() => sendProps('5')}><img className='produtosDoisImg' src={urlFor(produtos[5].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem' onClick = {() => sendProps('6')}><img className='produtosDoisImg' src={urlFor(produtos[6].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem' onClick = {() => sendProps('8')}><img className='produtosDoisImg' src={urlFor(produtos[8].imagem?.[0])} alt="" /></div>
                <div className = 'produtosdoisItem' onClick = {() => sendProps('9')}><img className='produtosDoisImg' src={urlFor(produtos[9].imagem?.[0])} alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default produtosdois