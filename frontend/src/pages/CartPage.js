import CartPageComponent from "./components/CartPageComponent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const getTopsales = async () => {
  const { data } = await axios.get("/api/products/topsales");
  return data;
};

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
  const reduxDispatch = useDispatch();

  return (
    <CartPageComponent
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      cartItems={cartItems}
      cartSubtotal={cartSubtotal}
      reduxDispatch={reduxDispatch}
      getTopsales={getTopsales}
    />
  );
};

export default CartPage;
