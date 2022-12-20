import { createContext, useEffect, useReducer, useState } from "react";
import cart from "../component/cart";
import product from "../component/products/product";

let context = {
	isCartOpen: false,
	cart: [],
	total: 0,
	nbrOfItems: 0,
};

const addCartItem = (cartItems, productToAdd) => {
	const existingCartItem = cartItems.find(
		(cartItem) => cartItem.id === productToAdd.id,
	);

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === productToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem,
		);
	}

	return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const CartContext = createContext(null);
const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case "open":
			return { ...state, isCartOpen: payload.isCartOpen };
		case "add":
			return { ...state, cart: [...payload.cart] };
		case "total":
			return { ...state, total:  payload.total };
	}
};

const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, context);

	useEffect(() => {
		dispatch({
			type: "total",
			payload: {
				total: get_total(state.cart),
			},
		});
	}, [state.cart]);

	const open_cart = () => {
		return dispatch({
			type: "open",
			payload: {
				isCartOpen: true,
			},
		});
	};

	const add_to_cart = (product) => {
		let updatedCart = addCartItem(state.cart, product);
		dispatch({
			type: "add",
			payload: {
				cart: updatedCart,
			},
		});
	};

	const get_total = (array) => {
		let total = array.reduce(
			(total, item) => total + item.quantity * item.price,
			0,
		);

		return total;
	};

	const value = {
		isCartOpen: state.isCartOpen,
		cart: state.cart,
		open_cart,
		add_to_cart,
		get_total,
		total: state.total,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContextProvider, CartContext };
