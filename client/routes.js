/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  
  require('./modules/Products/pages/Products');
  require('./modules/Products/pages/mobiles/Mobiles');
  require('./modules/Products/pages/ProductList');
  require('./modules/Cart/pages/AddCart');
  require('./modules/Products/components/product_details');
  require('./modules/Cart/components/Cart_details');
  }

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" >
     <IndexRoute 
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
            cb(null, require('./modules/Products/pages/ProductList').default);
        });
      }}
    />    
    <Route
      path="/products/:id"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Products/pages/mobiles/Mobiles').default);
        });
      }}
    />
    <Route
      path="/productList"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Products/pages/ProductList').default);
        });
      }}
    />
    <Route
      path="/cart_details"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Cart/pages/AddCart').default);
        });
      }}
    />
    <Route
      path="/products_details/:id"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Products/components/product_details').default);
        });
      }}
    />
    <Route
      path="/Cart_details/:id"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/Cart/components/Cart_details').default);
        });
      }}
    />
     </Route>
);
