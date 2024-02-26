import { useContext } from "react";
import { cartContext } from "../context/CartContext";

let useCart = () => {
  let [cart, setCart] = useContext(cartContext);
  return [cart, setCart];
};
export default useCart;
