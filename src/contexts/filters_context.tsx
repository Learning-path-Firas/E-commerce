import React, { useEffect, useMemo, useState } from "react";
import { data } from "../static/products.json";
import Filter from "./../component/Filter/Filter";

const FiltersContext = React.createContext("");

const MyProvider = ({ children }) => {
	const [availablefilters] = useState(["X", "L", "XL", "XXL", "ML"]);
	const [selectedFilters, setSelectedFilters] = useState("");
	const [products, setProducts] = useState("");
	const [isloading, setIsloading] = useState(false);
	useEffect(() => {
		setIsloading(true);
		if (selectedFilters.length === 0) {
			setTimeout(() => {
				setProducts(data.data_products);
				setIsloading(false);
			}, 1000);
		} else if (selectedFilters.length !== 0) {
			console.log(selectedFilters);
			let filtred_products;
			if (selectedFilters.length !== 0) {
				filtred_products = products.filter((p) =>
					selectedFilters.find((filter: string) =>
						p.availableSizes.find((size: string) => size === filter),
					),
				);
				setTimeout(() => {
					setProducts(filtred_products);
					setIsloading(false);
				}, 1000);
			}
		}
	}, [selectedFilters]);

	useEffect(() => {
		setIsloading(true);
		setTimeout(() => {
			setProducts(data.data_products);
			setIsloading(false);
		}, 1000);
	}, []);
	return (
		<FiltersContext.Provider
			value={{
				availablefilters,
				selectedFilters,
				setSelectedFilters,
				isloading,
				products,
			}}
		>
			{children}
		</FiltersContext.Provider>
	);
};

export { FiltersContext, MyProvider };
