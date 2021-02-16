import React, { useState, useEffect } from 'react'
import { Page, CentredSection, StyledForm, Button, SubHeader } from '../components/styledComponents'

const Register = () => {
  const [userRole, setUserRole] = useState("")

  const handleRadio = (e) => {
    const roleValue = e.target.value
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
            <SubHeader center>Welcome to Jumga Stores</SubHeader>
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