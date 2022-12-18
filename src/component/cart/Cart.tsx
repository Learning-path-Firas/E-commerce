import "./cart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";
function Cart() {
	const { isCartOpen } = useContext(CartContext);
	return (
		<div className="cart-wrapper">
			<div className="cart-menu">
				<span></span>
				<span></span>
				<span></span>
			</div>
			{isCartOpen && (
				<div className="cart-content">
					<button>go to checkout</button>
				</div>
			)}
		</div>
	);
}

export default Cart;
