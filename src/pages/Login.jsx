import React, { useEffect, useState } from 'react'
import { Page, CentredSection, StyledForm, Button, SubHeader } from "../components/styledComponents";

const Login = () => {

  const [userRole, setUserRole] = useState("")

  const handleRadio = (e) => {
    const roleValue = e.target.value
    console.log("WHAT CLICKED", roleValue)
    setUserRole(roleValue)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (userRole === "merchant") {
      // login as merchant 
    } else {
      // login as customer
    }
  }
    
    return (
      <Page>
        <CentredSection className="authentication">
          <StyledForm onSubmit={handleSubmit}>
            <SubHeader>Welcome, login to return to your store</SubHeader>
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
              <input autofocus type="text" placeholder="johndoe@example.com"/>
            </div>
            <div className="input_group">
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="********"/>
            </div>
            <div className="input_group">
              <Button center>
                Login
              </Button>
            </div>
          </StyledForm>
        </CentredSection>
      </Page>
  )
}

export default Login