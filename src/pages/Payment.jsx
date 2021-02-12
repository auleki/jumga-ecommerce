import React, { useState } from 'react'
import { Page, CentredSection, StyledForm, Button, SubHeader } from "../components/styledComponents";

const Payment = () => {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState()
  const [location, setLocation] = useState("")

  const handleLocation = (e) => setLocation(e.target.value)

  const handleFullName = (e) => setFullName(e.target.value)

  const handlePhone = (e) => setPhone(e.target.value)

  const handleEmail = (e) => setEmail(e.target.value)

  const customerInfo = { fullName, email, phone, location }

  const runCheckout = (e) => {
    e.preventDefault()
    console.table(customerInfo)
  }
    
    return (
      <Page>
        <CentredSection className="authentication">
          <StyledForm onSubmit={runCheckout}>
            <SubHeader>Complete your checkout</SubHeader>
            <div className="input_group">
              <label htmlFor="fullName">Full Name</label>
              <input 
                autofocus 
                type="text"
                onChange={handleFullName}
                value={fullName}
                placeholder="John Doe"/>
            </div>
            <div className="input_group">
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                onChange={handleEmail}
                value={email}
                placeholder="johndoe@example.com"/>
            </div>
            <div className="input_group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="number"  
                onChange={handlePhone}
                value={phone}
                placeholder="0801-234-5678"/>
            </div>
            <div className="input_group">
              <label htmlFor="location">Location</label>
              <input 
                type="text" 
                value={location}
                onChange={handleLocation}
                placeholder="Kuvuki Land"/>
            </div>
            
            <div className="input_group">
              <Button center>
                Complete Checkout
              </Button>
            </div>
          </StyledForm>

          {/* <div>
            <p>Name: {fullName}</p>
            <p>email: {email}</p>
            <p>location: {location}</p>
            <p>phone: {phone}</p>
          </div> */}
        </CentredSection>
      </Page>
  )
}

export default Payment