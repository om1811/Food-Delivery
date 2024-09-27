import React, { useContext } from 'react'
import './Cart.css'
import { storecontext } from '../../Context/Storecontext';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount } = useContext(storecontext);
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {

              return (
                <div>
                  <div className="cart-item-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>${item.price * cartItems[item._id]}</p>
                    <p onClick={() => {
                      removeFromCart(item._id)
                    }} className='cross'>X</p>
                  </div>
                  <hr />
                </div>


              )
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${ getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delievery Fee</p>
              <p>${getTotalAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalAmount()===0 ?0:getTotalAmount()+2}</b>
            </div>


          </div>
          <button onClick={()=>navigate('/Placeorder')}>Proceed to Checkout</button>


        </div>
        <div className="cart-promocode">
          <div>
            <p>if you have promocode,Enter it here</p>
            <div className='cart-promocode-input'>

            <input type="text" placeholder='Promocode'/>
            <button>Submit</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
