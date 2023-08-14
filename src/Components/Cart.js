import { useSelector } from "react-redux";
// import store from "../Utils/store";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <>
      <div className="text-3xl font-bold">Cart</div>
      <div>
        {cartItems.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </>
  );
};

export default Cart;
