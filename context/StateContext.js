import React,{createContext,useContext,useState,useEffect} from 'react';
import {toast} from 'react-hot-toast'
import {useRouter} from 'next/router'

const Context = createContext(); 




export const StateContext = ({ children }) => {
    const [showCart,setShowCart] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [totalPrice,setTotalPrice] =useState();
    const [totalQuantities,setTotalQuantities] =useState();
    const [qty, setQty] = useState(1);

    const router =  useRouter()
    const {
      query:{value}
    } = router
  
    const set = parseInt(value)

    const incQty = () => { 
        setQty((prevQty) => prevQty + 1);
        console.log(set)
        
      }

    const decQty = () =>{
        
        setQty((prevQty) => prevQty - 1);
    }
    const onAdd = (product,quantity) =>{
        const checkProductinCart = cartItems.find((item) => item.id === product_id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        
        if(checkProductinCart){


            const updatedCartItems = cartItems.map((cartProduct) => {

                if(cartProduct._id === product._id) return {
                    ...cartProduct,
                    quantity :   cartProduct.quantity + quantity
                }
            })

            setCartupdated(updatedCartItems); 
            
        }else{
            product.quantity = quantity
            setCartiItems([...cartItems])
            
        }
        
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