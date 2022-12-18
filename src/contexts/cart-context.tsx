import { createContext, useReducer } from "react";

let cart = {
	isCartOpen: false,
	cart: [],
};

const CartContext = createContext(cart);
const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "open":
			return { ...state, isCartOpen: payload.isCartOpen };
		case "add":
			return { ...state, cart: payload.cart };
	}
};
function containsObject(obj: {}, list: any) {
	var x;
	for (x in obj) {
		if (list.title === x.title) {
			return true;
		}
	}

	return false;
}
const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, cart);

	const open_cart = () => {
		dispatch({
			type: "open",
			payload: {
				isCartOpen: true,
			},
		});
	};

	const add_to_cart = (product) => {
		let updatedCart;
		if (!containsObject(cart, product)) {
			updatedCart = [...cart.cart, { ...product, quantity: 1 }];
		}
		if (containsObject(cart, product)) {
			console.log("already exists");
			updatedCart = [
				...cart.cart,
				{ ...product, quatity: product.quantity + 1 },
			];
		}
		console.log(updatedCart);
		dispatch({
			type: "add",
			payload: {
				cart: updatedCart,
			},
		});
	};

	const value = {
		isCartOpen: state.isCartOpen,
		cart: state.cart,
		open_cart,
		add_to_cart,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContextProvider, CartContext };
