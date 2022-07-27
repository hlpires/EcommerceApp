import React,{createContext,useContext,useState,useEffect} from 'react';
import {toast} from 'react-hot-toast'
import {useRouter} from 'next/router'
import {client} from '../lib/client';



const Context = createContext();






export const StateContext = ({ children,produtos}) => {
    console.log(produtos)
    const [showCart,setShowCart] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [totalPrice,setTotalPrice] =useState();
    const [totalQuantities,setTotalQuantities] =useState();
    const [qty, setQty] = useState(1);



      
  
   

    const incQty = () => { 
        setQty((prevQty) => prevQty + 1);
        console.log(produtos)
        
      }

    const decQty = () =>{
        
        setQty((prevQty) => prevQty - 1);
    }
     
    const onAdd = () =>{
     
    }


return(
    <Context.Provider
    value = {{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd
    }} >
        
        {children}
    </Context.Provider>
)






}


  

export const useStateContext= () => useContext (Context); 