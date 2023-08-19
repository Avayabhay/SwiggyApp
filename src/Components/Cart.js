import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../Utils/cartSlice";
// import store from "../Utils/store";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    console.log("clicked");
    dispatch(clearCart());
    console.log(cartItems);
  };
  return (
    <>
      <div className="text-3xl font-bold">Cart</div>
      <button
        className="m-2 p-2 bg-red-300 rounded-sm"
        onClick={() => handleClearCart()}
      >
        Clear All
      </button>
      <div>
        {cartItems.map((item) => {
          return <FoodItems {...item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Cart;
