import React from "react";

export const Cart_item = ({ cart }) => {
	return (
		<p>
			{cart.title}  /  quantity : {cart.quantity}
		</p>
	);
};
