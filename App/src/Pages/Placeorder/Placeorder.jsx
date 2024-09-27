import React from 'react'
import './placeorder.css'
import { storecontext } from '../../Context/Storecontext'
import { useContext } from 'react'

const Placeorder = () => {
  const{getTotalAmount}=useContext(storecontext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className="title">Delivery Infromation</p>
        <div className='multi-fields'>
          <input type="text" placeholder='first Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className='multi-fields'>
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='phone' />

      </div>
      <div className='place-order-right'>
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
          <button >Proceed to Payment</button>


        </div>

      </div>
    </form>
  )
}

export default Placeorder
