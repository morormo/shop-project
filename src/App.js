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
import {AnimatedSwitch} from 'react-router-transition';

class App extends Component {
  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }
  render() {
    return (
      <MainLayout>
        <Switch>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
          >
              <Route exact path='/' component={Homepage} />
              <Route path={'/product/:id'} component={Product} />
              <Route path={'/cart/:id?'} component={CartPage} />
              <Route path={'/delivery'} component={DeliveryPage} />
              <Route path='*' component={NotFound} />
          </AnimatedSwitch>
        </Switch>
      </MainLayout>
    );
  }
}

export default App;

