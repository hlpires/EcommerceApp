import React from 'react'
import {client} from '../lib/client'
import {Header,FooterBanner,Banner,Produtos,Produtosdois,Art} from '../components/index'



const Home = ({products}) => (
    <div>     
      <Header/>
      <Banner/>
      <Produtos/>
      <Produtosdois/>
      <Art/>
    </div> 
);


export const getServerSideProps = async () => {
  const query = '*[_type == "produtos"]';
  const products = await client.fetch(query);

  
  return {
    props: {products}
 }
}

export default Home