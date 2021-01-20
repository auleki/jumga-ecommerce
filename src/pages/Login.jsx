import React from 'react'
import { Page, CentredSection, StyledForm, Button, SubHeader } from "../components/styledComponents";

const Login = () => {
    
    return (
      <Page>
        <CentredSection className="authentication">
          <StyledForm>
            <SubHeader>Welcome, login to return to your store</SubHeader>
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