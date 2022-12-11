import Products from "../products";
import Cart from "../cart";
import Filter from "../Filter";
import { Grid } from "@mui/material";
const Main = () => {
	return (
		<>
			<Cart />
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Filter />
				</Grid>

				<Grid item xs={8}>
					<Products />
				</Grid>
			</Grid>
		</>
	);
};

export default Main;
