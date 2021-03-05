import {useSelector, useDispatch} from "react-redux";
import {removeItemFromCart} from "../../store/cart";
import './Cart.css';

function CartItemsHeader({howManyItems}) {
  if (howManyItems === 1) {
      return <h2 className="cart-amount-display">There is 1 item in your cart.</h2>
  }
  return <h2 className="cart-amount-display">There are {howManyItems} items in your cart.</h2>;
}


function ShoppingCart(){
  const cart = useSelector(state => state.cart);

  const cartArr = Object.values(cart);
  const dispatch = useDispatch();

  if(cartArr.length === 0) return <h1 className="cart-amount-display">Your cart is empty!</h1>


  return(
    <div>
      <CartItemsHeader howManyItems={cartArr.length} />

      <div className="map-container">
      {cartArr.map((cartItem) => (

        <div className="cartItem" key={cartItem.title}>
          <h3>{cartItem.title}</h3>
          <img className="images" src={cartItem.image} alt={cartItem.title} />
          <p className="price">{cartItem.price}</p>
          <button className="remove-button" onClick={()=> {dispatch(removeItemFromCart(cartItem.id))}}>Remove</button>
        </div>

      ))}
      </div>
    </div>
  )

}

export default ShoppingCart;
