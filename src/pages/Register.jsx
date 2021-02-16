import React, { useState, useEffect } from 'react'
import { Page, CentredSection, StyledForm, Title, Button, SubHeader } from '../components/styledComponents'

const Register = () => {
  const [userRole, setUserRole] = useState("customer")

  const handleRadio = (e) => {
    const roleValue = e.target.value
    // const checked = e.target
    // console.log("CHECKED:", checked )
    console.log("WHAT CLICKED", roleValue)
    setUserRole(roleValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userRole === "merchant") {
      // save as merchant
    } else {
      // save as customer
    }
  }

  useEffect(() => {
    console.log("ROLE STATUS:", userRole)
  }, [userRole])
    
    return (
      <Page>
        <CentredSection className="authentication">
          <StyledForm onSubmit={handleSubmit}>
            <Title size={2} center>Welcome to Jumga Stores</Title>
            <SubHeader size={1.3} textColor="#DB5461">
              Pick an option
            </SubHeader>
            <div className="selection">
              <div className="radio">
                <div className="radio_group">
                  <input type="radio" 
                    onChange={handleRadio} 
                    name="role" 
                    id="role"
                    value="customer"
                    required/>
                  <label htmlFor="role">Customer</label>
                </div>
                <div className="radio_group">
                  <input 
                    type="radio" 
                    onChange={handleRadio} 
                    name="role" 
                    id="role" 
                    value="merchant"
                    required/>
                  <label htmlFor="role">Merchant</label>
                </div>
              </div>
            </div>
            <div className="input_group">
              <label htmlFor="email">Email</label>
              <input 
                autoFocus 
                type="text" 
                placeholder="johndoe@example.com"
                required/>
            </div>
            <div className="input_group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                placeholder="********"
                required/>
            </div>
            <div className="input_group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                placeholder="********"
                required/>
            </div>
            <div className="input_group">
              <Button center>
                Create Account
              </Button>
            </div>
          </StyledForm>
        </CentredSection>
      </Page>
  )
}

export default Register