import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import PrivateRoute from '../composables/PrivateRoute/'

import Home from '../pages/Home'
import Products from '../pages/Products'
import AddProduct from '../pages/AddProduct'
import Description from '../pages/Description'
import ChangeProduct from '../pages/ChangeProduct'

const RouteHandler = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/description" exact component={Description}/>
        <PrivateRoute path="/admin/addnewproduct" exact component={AddProduct}/>
        <PrivateRoute path="/admin/products/:id" exact component={ChangeProduct}/>
        <PrivateRoute path="/admin/products" exact component={Products}/>
      </Switch>
    </div>
  </Router>
)

export default RouteHandler