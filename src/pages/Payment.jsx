import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';
import { Page, CentredSection, StyledForm, Button, SubHeader } from '../components/styledComponents';
import { formatToComma } from '../services/operation'

const Payment = () => {
	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ location, setLocation ] = useState('');
	const [paid, setPaid] = useState(false)
	const [totalPrice, setTotalPrice] = useState(30000)

	const urlLocation = useLocation()
	

	// useEffect(() => {
	// 	if (urlLocation.search === "") {
	// 		console.log("Nothing is being done")
	// 	} else {
	// 		setPaid(true)
	// 	}
	// 	console.table(urlLocation)
	// }, [])

	const handleLocation = (e) => setLocation(e.target.value);

	const handleFullName = (e) => setFullName(e.target.value);

	const handlePhone = (e) => setPhone(e.target.value);

	const handleEmail = (e) => setEmail(e.target.value);

	// const customerInfo = { fullName, email, phone, location };
	

	// const PK = 'FLWPUBK_TEST-1bc4c3a77cbfe75c2645260736185e05-X';
	const SK = 'FLWSECK_TEST-6c2aa6337310bc76ea56159979d66e42-X';
	// const EK = 'FLWSECK_TEST39ac43321ada';

	const returnToken = token => `Bearer ${token}`

	const currentToken = returnToken(SK)

	const config = {
		headers: {
			"Authorization": currentToken,
		}
	};

	const orderInfo = {
		cartItems: [
			{
				id: "2041",
				modelName: "GTS 8",
				brandName: "Brooks",
				price: 15000,
				modelNumber: 9462697,
				shoeImage: "https://cdn.shopify.com/s/files/1/0061/4694/9184/products/TB0A1S5M001_alt4_clipped_rev_1.png?v=1586216894"
			},
			{
				id: "2582",
				modelName: "alphaboost",
				brandName: "Adidas",
				price: 12000,
				modelNumber: 9482216 ,
				shoeImage: "https://www.thenextsole.com/storage/images/40SMA0079407.png"
			},
			{
				id: "1441",
				modelName: "NMD_XR1",
				brandName: "Adidas",
				price: 16000,
				modelNumber: 1482216,
				shoeImage: "https://freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png"
			},
		],
		customerInfo: {
			email,
			fullName,
			phone
		},
		totalPrice,
		storeInfo: {
			title: 'Pied Piper Payments',
			description: "Middleout isn't free. Pay the price",
			logo: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.whatproswear.com%2Fwp-content%2Fuploads%2F2018%2F03%2FCarlos-Correa-adidas-Cleats-2018.jpg&f=1&nofb=1'
		}
	}


   
	const runCheckout = async (e) => {
		e.preventDefault();
		const corsAid = "https://cors-anywhere.herokuapp.com"
		const fWLoad = {
			tx_ref: 'spat-141511-ot',
			amount: '10000',
			currency: 'NGN',
			redirect_url: 'http://localhost:3000/payment',
			payment_options: 'card',
			meta: {
				consumer_id: 23,
				consumer_mac: '92a3-912ba-1192a'
			},
			subaccounts: [
				{
					id: "RS_5772074D7F5CB67F9873DDF183F13864",
					transaction_split_ratio: 2
				},
				{
					id: "RS_3A181BFDD2ABBF1C0427EEE951DA8A46",
					transaction_split_ratio: 2
				}
			],
			customer: {
				email,
				phonenumber: phone,
				name: fullName
			},
			customizations: {
				title: orderInfo.storeInfo.title,
				description: orderInfo.storeInfo.description,
				logo: orderInfo.storeInfo.logo
			}
		};


		try {
			const baseUrl = `${corsAid}/https://api.flutterwave.com/v3/payments`
			// const baseUrl = `http://localhost:4000/merchants`
			// const data = await axios.get(baseUrl, config);
			const data = await axios.post(baseUrl, fWLoad, config);
			console.log(data)
		} catch (error) {
			alert(error);
		}
	};

	if (paid) {
		return (
			<Page>
			<CentredSection className="authentication">
				<h2>Thanks for paying</h2>
			</CentredSection>
		</Page>
		)
	}

	return (
		<Page>
			<CentredSection className="authentication">
				<StyledForm onSubmit={runCheckout}>
					<SubHeader>Complete your checkout</SubHeader>
					<SubHeader 
						size={1.3}
						textColor="#DB5461">
						Total: N{formatToComma(totalPrice)}
					</SubHeader>
					<div className="input_group">
						<label htmlFor="fullName">Full Name</label>
						<input
							autoFocus
							type="text"
							onChange={handleFullName}
							value={fullName}
							placeholder="John Doe"
						/>
					</div>
					<div className="input_group">
						<label htmlFor="email">Email</label>
						<input type="text" onChange={handleEmail} value={email} placeholder="johndoe@example.com" />
					</div>
					<div className="input_group">
						<label htmlFor="phone">Phone Number</label>
						<input type="number" onChange={handlePhone} value={phone} placeholder="0801-234-5678" />
					</div>
					<div className="input_group">
						<label htmlFor="location">Location</label>
						<input type="text" value={location} onChange={handleLocation} placeholder="Kuvuki Land" />
					</div>
					<div className="input_group">
						<Button center>Complete Checkout</Button>
					</div>
				</StyledForm>
			</CentredSection>
		</Page>
	);
};

export default Payment;
