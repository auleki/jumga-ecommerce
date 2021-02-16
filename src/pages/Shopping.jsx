import React, { useState, useEffect } from 'react';
import {
	Page,
	JustifiedRow,
	SubHeader,
	GapedRow,
	HeaderTitle,
	ProductGrid,
	Button,
	JustifiedRowCenter,
	CrumbHeader
} from '../components/styledComponents';
import { footWears } from '../services/utilities';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom'


const CartItem = ({ item }) => {
	return (
		<li>
			<h3>{item.brandName}</h3>
			<p>{item.modelName}</p>
			<p>${item.price}</p>
		</li>
	);
};

const Cart = ({ cartEssentials }) => {
	const [ open, setOpen ] = useState(false);

	const { totalPrice, setTotalPrice, cartItems, setCartItems } = cartEssentials

	const toggleCartView = () => setOpen(!open);

	const calculateTotal = (arr) => arr.reduce((total, amount) => total + amount.price, 0)

	// const numberTotal = calculateTotal(numbers)
	
//  const PK = "FLWPUBK_TEST-1bc4c3a77cbfe75c2645260736185e05-X"
//  const SK = "FLWSECK_TEST-6c2aa6337310bc76ea56159979d66e42-X"
//  const EK = "FLWSECK_TEST39ac43321ada"
 
	const dispatchUrl = ""
	const storeOwnerUrl = ""

	// const checkOut = () => {

	// }

	const data = {
		products: [
			{
				quantity: 3,
				modelName: 'GTS 8',
				brandName: 'Brooks',
				price: 99.1,
				modelNumber: 9462697,
				shoeImage:
					'https://cdn.shopify.com/s/files/1/0061/4694/9184/products/TB0A1S5M001_alt4_clipped_rev_1.png?v=1586216894'
			},
			{
				quantity: 5,
				modelName: 'alphaboost',
				brandName: 'Adidas',
				price: 120.3,
				modelNumber: 9482216,
				shoeImage: 'https://www.thenextsole.com/storage/images/40SMA0079407.png'
			},
			{
				quantity: 8,
				modelName: 'NMD_XR1',
				brandName: 'Adidas',
				price: 160.3,
				modelNumber: 1482216,
				shoeImage: 'https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png'
			},
			{
				quantity: 6,
				modelName: 'Origen 1',
				brandName: 'Charly',
				price: 50,
				modelNumber: 8141054,
				shoeImage: 'https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png'
			},
			{
				quantity: 1,
				modelName: 'Powercourt 0520',
				brandName: 'LaCoste',
				price: 110,
				modelNumber: 18149502,
				shoeImage: 'https://www.thenextsole.com/storage/images/40SMA0079407.png'
			},
			{
				quantity: 4,
				modelName: 'Drivetrain SD35',
				brandName: 'Timberland Pro',
				price: 121.19,
				modelNumber: 240814,
				shoeImage:
					'https://cdn.shopify.com/s/files/1/0061/4694/9184/products/TB0A1S5M001_alt4_clipped_rev_1.png?v=1586216894'
			}
		],
		totalPrice,
		deliveryFee: 1000
	};

	/* 
		if cart is empty
	 */

	if (cartItems.length === 0) {
		return (
			<div className="cart">
			<div className="badge" onClick={toggleCartView}>
				<span>{cartItems.length}</span>
			</div>
			<div className={`cart_preview ${open ? 'active' : ''}`}>
				<h2>Cart is Empty</h2>
			</div>
				
		</div>
		)
	}
	
	/* 
		end of if block 
	 */

	const cartTotal = calculateTotal(data.products)

	console.log("CART TOTAL:", cartTotal)

	// data object goes through a function that splits up the price for the
	// user and add the appropriate to the right collections

	return (
		<div className="cart">
			<div className="badge" onClick={toggleCartView}>
				<span>{cartItems.length}</span>
			</div>
			<div className={`cart_preview ${open ? 'active' : ''}`}>
				<div className="cart_info">
					<div className="total">
						<h2>Total: ${data.totalPrice}</h2>
					</div>
				</div>
				<ul>{cartItems.map((item, i) => <CartItem key={i} item={item} />)}</ul>
				<div className="cart_actions">
				<Link to="/payment">
					<Button>Checkout</Button>
				</Link>
					<p>
						Delivery Fee: $<span>{data.deliveryFee}</span>
					</p>
					<Button outlined>Reset Cart</Button>
				</div>
			</div>
		</div>
	);
};

/* SHOPPING CONTAINER */

const Shopping = () => {
	const [totalPrice, setTotalPrice] = useState(0)
	const [cartItems, setCartItems] = useState([{
		quantity: 1,
		modelName: 'Powercourt 0520',
		brandName: 'LaCoste',
		price: 110,
		modelNumber: 18149502,
		shoeImage: 'https://www.thenextsole.com/storage/images/40SMA0079407.png'
	}])

	useEffect(() => {
		
	}, [cartItems])

	const cartEssentials = { totalPrice, setTotalPrice, cartItems, setCartItems }

	const addToCart = (item) => {
		console.table('Added to Cart:', item)
		cartItems.push(item)
		console.table('Cart:', cartItems)
	};
	

	return (
		<Page>
			<div className="full_screen">
				<Cart cartEssentials={cartEssentials}/>
				<JustifiedRowCenter>
					<div>
						<SubHeader>Shopping</SubHeader> /<CrumbHeader> Products</CrumbHeader>
					</div>
					<div>
						<HeaderTitle>Shop</HeaderTitle>
					</div>
					<GapedRow>
						<p>Showing 1 of 32 Results</p>
						<select name="" id="">
							<option value="">Select filter</option>
							<option value="">Filter one</option>
							<option value="">Filter two</option>
						</select>
					</GapedRow>
				</JustifiedRowCenter>
				<ProductGrid>
					{footWears.map((shoe, i) => (
					<ProductCard 
						key={i} 
						addToCart={addToCart} 
						cartEssentials={cartEssentials} 
						footWear={shoe} />
						))}
				</ProductGrid>
			</div>
		</Page>
	);
};

export default Shopping;
