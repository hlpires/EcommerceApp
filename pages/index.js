import React from 'react'
import {client} from '../lib/client'
import {Header,FooterBanner} from '../components/index'



const Home = () => {
  return (
    <div>
      <Header/>
    </div>
  )

  //export const getServerSideProps = async =>{
  //  const query = '*[_type == "product"]';
 //   const products = await client.fetch(query);
 // }
 // return{
 //   props: {products,bannerData}
 // }
}

export default Home