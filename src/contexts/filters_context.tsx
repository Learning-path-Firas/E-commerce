import React, { useEffect, useState } from "react";

const FiltersContext = React.createContext(undefined);

const MyProvider = ({ children }) => {
	const [availablefilters] = useState(["s", "m", "l", "xl", "2xl"]);
	const [selectedFilters, setSelectedFilters] = useState([]);

	useEffect(() => {
		console.log("setSelectedFilters", selectedFilters);
	}, [selectedFilters]);
	return (
		<FiltersContext.Provider
			value={{ availablefilters, selectedFilters, setSelectedFilters }}
		>
			{children}
		</FiltersContext.Provider>
	);
};

export { FiltersContext, MyProvider };
