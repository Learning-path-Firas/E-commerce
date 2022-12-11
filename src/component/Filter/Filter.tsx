import Checkbox from "../../commons/checkbox";
import { FiltersContext } from "../../contexts/filters_context";
import "./filter.css";
import React from "react";

function Filter() {
	const { availablefilters, setSelectedFilters, selectedFilters } =
		React.useContext(FiltersContext);

	const selected_filters = (item: string): void => {
		const newSet = new Set(selectedFilters);
		if (newSet.has(item)) {
			newSet.delete(item);
		} else newSet.add(item);
		const new_filters = Array.from(newSet) as [];
		setSelectedFilters(new_filters);
	};
	const createcheckboxes = (args: string[]) => {
		return args.map((item, index) => (
			<Checkbox
				key={index}
				label={item}
				type={"checkbox"}
				selected_filters={selected_filters}
			/>
		));
	};

	return createcheckboxes(availablefilters);
}

export default Filter;
