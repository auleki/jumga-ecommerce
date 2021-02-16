import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom'
import axios from 'axios';
import { Page, CentredSection, StyledForm, Button, SubHeader } from '../components/styledComponents';

const Payment = () => {
	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ phone, setPhone ] = useState('');
	const [ location, setLocation ] = useState('');
	const [paid, setPaid] = useState(false)

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
   
	const runCheckout = async (e) => {
		e.preventDefault();
		const corsAid = "https://cors-anywhere.herokuapp.com"
		// const fWLoad = {
		// 	tx_ref: 'spat-141511-ot',
		// 	amount: '10000',
		// 	currency: 'NGN',
		// 	redirect_url: 'http://localhost:3000/payment',
		// 	payment_options: 'card',
		// 	meta: {
		// 		consumer_id: 23,
		// 		consumer_mac: '92a3-912ba-1192a'
		// 	},
		// 	subaccounts: [
		// 		{
		// 			id: "RS_5772074D7F5CB67F9873DDF183F13864",
		// 			transaction_split_ratio: 2
		// 		},
		// 		{
		// 			id: "RS_3A181BFDD2ABBF1C0427EEE951DA8A46",
		// 			transaction_split_ratio: 2
		// 		}
		// 	],
		// 	customer: {
		// 		email: 'user@gmail.com',
		// 		phonenumber: '080****4528',
		// 		name: 'Yemi Desola'
		// 	},
		// 	customizations: {
		// 		title: 'Pied Piper Payments',
		// 		description: "Middleout isn't free. Pay the price",
		// 		logo:
		// 			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.whatproswear.com%2Fwp-content%2Fuploads%2F2018%2F03%2FCarlos-Correa-adidas-Cleats-2018.jpg&f=1&nofb=1'
		// 	}
		// };
		try {
			// const baseUrl = `${corsAid}/https://api.flutterwave.com/v3/payments`
			const baseUrl = `http://localhost:4000/merchants`
			const data = await axios.get(baseUrl, config);
			// const data = await axios.post(baseUrl, fWLoad, config);
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
