import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FoodItem from './FoodItem';
import {clearCart} from '../utils/cartSlice'



const Cart = () => {
    const cartItems = useSelector(store=>store.cart.items)

 const dispatch = useDispatch();
    const handleClearCart=()=>{
            dispatch(clearCart())
    }
  return (
    <div>
        <h1>cart Items -{cartItems.length}</h1>

        {/* <FoodItem 
        
        name={cartItems[0].card?.info?.name}
        imageId={cartItems[0].card?.info?.imageId}
        description
        ={cartItems[0].card?.info?.description
        }
        price={cartItems[0].card?.info?.price}
    /> */}

    {/* <FoodItem props={cartItems[0]}/> */}
<button className='bg-red-200 p-2 m-5 rounded-md shadow-md cursor-pointer' onClick={()=>handleClearCart()}>clear cart</button>

<div className='flex'>
    {cartItems.map(item=><FoodItem key={item.card.info.id} {...item}/>)}

    </div>

    </div>
  )
}

export default Cart