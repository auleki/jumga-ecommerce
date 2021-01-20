import React from 'react'
import { Page, CentredSection, StyledForm, Button, SubHeader } from '../components/styledComponents'

const Register = () => {
    
    return (
      <Page>
        <CentredSection className="authentication">
          <StyledForm>
            <SubHeader>To create a store you need an account</SubHeader>
            <div className="input_group">
              <label htmlFor="email">Email</label>
              <input autofocus type="text" placeholder="johndoe@example.com"/>
            </div>
            <div className="input_group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="********"/>
            </div>
            <div className="input_group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" placeholder="********"/>
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