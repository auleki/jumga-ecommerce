import React, { useState } from 'react'
import { Page, HeaderTitle, JustifiedRow, Button, StyledForm } from "../components/styledComponents";
// import UpdateIcon from '@material-ui/icons/Update';

// import SaveAltIcon from '@material-ui/icons/SaveAlt';
import LogoAvatar from '../components/LogoAvatar'

const Settings = () => {

  const [approved, setApproved] = useState(true)
  const [storeCreator, setStoreCreator] = useState("Hugh Jackman")
  const [email, setEmail] = useState("leron@gmail.com")
  const [storeName, setStoreName] = useState("Rick New World")
  const shopLogo = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.o6SPesW0GiZGIyx2OmTwrQHaFf%26pid%3DApi&f=1"

  const takeStoreName = (e) => setStoreName(e.target.value)
  const takeEmail = (e) => setEmail(e.target.value)
  const takeStoreCreator = (e) => setStoreCreator(e.target.value)

  const takeSubmit = (e) => {
    e.preventDefault()
    console.log("Fuck Shet")
  }

  return (
    <Page>
      <div className="settings container">
        <div className="header">
          <HeaderTitle>Edit Profile</HeaderTitle>
        </div>
    
        <div className="main_page settings">
          <LogoAvatar 
            logoLink={shopLogo} 
            storeName={storeName}
            approvedStatus={approved} />

          <StyledForm 
            className="profile_form" 
            onSubmit={takeSubmit}>

            <div className="input_group">
              <label htmlFor="store_name">Name of your store</label>
              <input 
                autofocus 
                type="text"
                onChange={takeStoreName}
                placeholder="Iceland Stores"
                value={storeName} />
            </div>

            <div className="input_group">
              <label htmlFor="store_creator">Who created the store</label>
              <input
                type="text"
                onChange={takeStoreCreator}
                value={storeCreator}
                placeholder="George W. Bush" />
            </div>

            <div className="input_group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={takeEmail}
                placeholder="johndoe@example.com" />
            </div>
            <div className="input_group">
              <Button center>
                Update Information 
              </Button>
            </div>
          </StyledForm>
        </div>
      </div>
    </Page>
  )
}

export default Settings