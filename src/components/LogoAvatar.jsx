import { JustifiedRow, CrumbHeader } from "../components/styledComponents";
import React from 'react'
import Switch from '@material-ui/core/Switch';
const LogoAvatar = ({ logoLink, approvedStatus, storeName }) => {

  return (
    <div className="shop_logo">
      <img
        src={logoLink}
        alt=""
        srcset="" />      
        <JustifiedRow>
          <span>NOT APPROVED</span>
          <Switch checked={approvedStatus} />
          <span>STORE APPROVED</span>
        </JustifiedRow>
    </div>
  )
}

export default LogoAvatar