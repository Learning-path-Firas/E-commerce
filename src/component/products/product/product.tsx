import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../contexts/cart-context";
export interface IProduct {
	id: number;
	sku: string;
	title: string;
	description: string;
	availableSizes: string[];
	style: string;
	price: number;
	installments: number;
	currencyId: string;
	currencyFormat: string;
	isFreeShipping: boolean;
}

export const formatRendering = (number: number) => {
	const rendered = number > 0 ? "/" : " ";
	return rendered;
};
function Product({ item }: any) {
	const { add_to_cart, cart } = useContext(CartContext);
	console.log(cart);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{item.title}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{item.description}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						Quantity :
						{item.availableSizes.map((size: string, index: number) => {
							return <span key={index}>{formatRendering(index) + size}</span>;
						})}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button
					size="small"
					color="primary"
					onClick={() => {
						// open_cart();
						add_to_cart(item);
					}}
				>
					Add to cart
				</Button>
			</CardActions>
		</Card>
	);
}

export default Product;
