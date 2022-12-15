import React, { FC, useContext, useEffect, useState } from "react";
import { FiltersContext } from "../../contexts/filters_context";

import Product from "../products/product";
import { IProduct } from "./product/product";

interface Iproducts {
	isloading: boolean;
	data: [];
}

// HOC for better code isolaton
const withHigherOrderComponent = (Component: any) => (props: Iproducts) => {
	if (props.isloading) return <div>Loading data.</div>;
	if (!props.isloading) {
		if (!props.data) return <div>No data loaded yet.</div>;
		if (!props.data.length) return <div>Data is empty.</div>;
	}
	return <Component {...props} />;
};

const Products = () => {
	const { products, isloading } = useContext(FiltersContext);

	return (
		<>
			<TodoList data={products} isloading={isloading} />
		</>
	);
};

const BaseTodoList = ({ data }: Iproducts) => {
	return (
		<ul>
			{data.map((item: any) => (
				<Product item={item} key={item.id} />
			))}
		</ul>
	);
};

const TodoList = withHigherOrderComponent(BaseTodoList);

export default Products;
