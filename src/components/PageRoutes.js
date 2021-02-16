import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { 
  Dashboard, 
  Payment, 
  Shopping, 
  Orders, 
  Settings,
  Products,
  Wishlist } from '../pages'

import Login from '../pages/Login'
import Register from '../pages/Register'

const PageRoutes = () => {    
    return (
      <>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/shopping" component={Shopping} />
          <Route path="/payment" component={Payment} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/orders" component={Orders} />
          <Route path="/settings" component={Settings} />
          <Route path="/products" component={Products} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </>
  )
}

export default PageRoutes