import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
import { Cart_item } from "./Cart_item";
function Cart() {
	const { isCartOpen, cart, total } = useContext(CartContext);
	console.log(total);
	return (
		<div className="cart-wrapper">
			<div className="cart-menu">
				<span></span>
				<span></span>
				<span></span>
			</div>
			{isCartOpen && (
				<div className="cart-content">
					{cart.map((item, index) => {
						return <Cart_item cart={item} key={index} />;
					})}
					<p>the total is {total}</p>
					<button>go to checkout</button>
				</div>
			)}
		</div>
	);
}

export default Cart;
