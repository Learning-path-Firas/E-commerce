import { useState } from "react";

interface Icheckbox {
	label: string;
	type: string;
	selected_filters(label: string): void;
}

export default function Checkbox({ label, type, selected_filters }: Icheckbox) {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
		selected_filters(label);
	};
	return (
		<div className="checbox-rounded">
			<label>{label}</label>
			<input
				type={type}
				onChange={handleChange}
				checked={checked}
				value={label}
			/>
		</div>
	);
}
