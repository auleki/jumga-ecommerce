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

const Cart = ({ cartEssentials, addToCart }) => {
	const [ open, setOpen ] = useState(false);

	const { totalPrice, setTotalPrice, cartItems, setCartItems, calculateTotal, deliveryFee, setDeliveryFee } = cartEssentials

	const toggleCartView = () => setOpen(!open);

	
	
//  const PK = "FLWPUBK_TEST-1bc4c3a77cbfe75c2645260736185e05-X"
//  const SK = "FLWSECK_TEST-6c2aa6337310bc76ea56159979d66e42-X"
//  const EK = "FLWSECK_TEST39ac43321ada"
 
	// const dispatchUrl = ""
	// const storeOwnerUrl = ""

	useEffect(() => {
		const newPrice = calculateTotal(cartItems)
		setTotalPrice(newPrice)
	}, [calculateTotal, cartItems, setTotalPrice])

	const resetCart = () => {
		setTotalPrice(0);
		setCartItems([])
		setDeliveryFee(0)
	}
	
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

	// const cartTotal = calculateTotal(data.products)

	// console.log("CART TOTAL:", cartTotal)

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
						<h2>Total: ${totalPrice}</h2>
					</div>
				</div>
				<ul>{cartItems.map((item, i) => <CartItem key={i} item={item} />)}</ul>
				<div className="cart_actions">
				<Link to="/payment">
					<Button>Checkout</Button>
				</Link>
					<p>
						Delivery Fee: $<span>{deliveryFee}</span>
					</p>
					<Button onClick={resetCart} outlined>Reset Cart</Button>
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
	const [deliveryFee, setDeliveryFee] = useState(3000)

	// useEffect(() => {
		
	// }, [cartItems])

	const calculateTotal = (arr) => arr.reduce((total, amount) => total + amount.price, 0)

	const cartEssentials = { 
		totalPrice, 
		setTotalPrice, 
		cartItems, 
		setCartItems, 
		calculateTotal, 
		deliveryFee, 
		setDeliveryFee 
	}
	
	const addToCart = (item) => {
		const updatedCartItems = cartItems.concat(item)
		setCartItems(updatedCartItems)
	};
	
	return (
		<Page>
			<div className="full_screen">
				<Cart cartEssentials={cartEssentials} addToCart={addToCart}/>
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
