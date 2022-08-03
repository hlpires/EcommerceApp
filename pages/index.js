import React from 'react'
import {client} from '../lib/client'
import {Header,Banner,Produtos,Produtosdois,Art} from '../components/index'




const Home = ({produtos}) => (
    <div>
      <Header/>
      <Banner produtos = {produtos}/>
      <Produtos produtos = {produtos}/>
      <Produtosdois produtos = {produtos}/>
      <Art/>
    </div> 
);


export const getServerSideProps = async () => {
  const query = '*[_type == "produtos"]';
  const produtos = await client.fetch(query);

  
  return {
    props: {produtos}
 }
}

export default Home