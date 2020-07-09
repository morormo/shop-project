import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import {MainLayout} from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { NotFound } from './components/views/NotFound/NotFound';
import CartPage from './components/views/CartPage/CartPageContainer';

import './styles/bootstrap.scss';
import './styles/global.scss';
import Product from './components/views/Product/Product';
import DeliveryPage from './components/views/DeliveryPage/DeliveryPage';


class App extends Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }
  render() {
    return (
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path={'/product/:id'} component={Product} />
          <Route path={'/cart/:id?'} component={CartPage} />
          <Route path={'/delivery'} component={DeliveryPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainLayout>
    );
  }
}

export default App;

