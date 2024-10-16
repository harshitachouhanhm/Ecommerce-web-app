import React, { useContext } from 'react'
// useContext: This React hook is used to pull in values from the
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
// ShopContext (which might be managing the state of your store's cart, like which products are in the cart, their quantities, etc.).
import remove_icon from '../Assets/cart_cross_icon.png'
// getTotalCartAmount: A function that calculates the total amount for all items in the cart.
// all_product: An array of all available products.
// cartItems: An object representing the cart, where each key is the product's id and the value is the quantity of that product in the cart.
// removeFromCart: A function to remove an item from the cart when called.

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0)

          // Map over all_product: You loop through all products in all_product. For each product, you check if the product's id exists in cartItems and has a quantity greater than 0.
        {
            return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price*cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                    </div>
        }
        // This part loops through all products, checks if the product exists in the cart (i.e., the cartItems object has a value greater than 0 for that product's ID), and renders the product accordingly:
        // Subtotal: This section calculates and displays the subtotal using the getTotalCartAmount() function, which computes the total price for all items in the cart.
        // return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
// In this CartItems React component, you're building the layout and functionality of a shopping cart. It renders the list of products that have been added to the cart, along with options for viewing and interacting with the cart (e.g., removing items, viewing totals, applying promo codes). Let me walk you through the key parts: