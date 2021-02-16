import React, { useState } from 'react'
import { SubHeader, Page, JustifiedRow, Button } from "../components/styledComponents";

const MerchNav = () => {

  return (
    <>
      <JustifiedRow>
        {/* <h2>Merchant Nav</h2> */}
        <div>Create Store</div>
        <div>Change Dispatcher</div>
        <div>ICONS</div>
        <div>SETTINGS</div>
      </JustifiedRow>
    </>
  )
}

const ConsumerNav = () => {

  return (
    <>
      <JustifiedRow>
        {/* <h2>Consumer Nav</h2> */}
        <div>IMAGE</div>
        <div>ACTIONS</div>
        <div>ICONS</div>
        <div>SETTINGS</div>
      </JustifiedRow>
    </>
  )
}


const Dashboard = () => {

  const [isMerch, setIsMerch] = useState(true)
    
    return (
      <Page>
        <SubHeader>{ isMerch ? "MERCHANT" : "CONSUMER" } DASHBOARD</SubHeader>
        {/* show a different nav for merchants and another for customers  */}
        { isMerch ? <MerchNav /> : <ConsumerNav /> }

        <div>
          <Button onClick={() => setIsMerch(!isMerch)}>SWITCH</Button>
        </div>
        
      </Page>
  )
}

export default Dashboard