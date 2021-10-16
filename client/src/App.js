import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/home/home';
import Footer from './components/footer/footer';
import Auth from './components/auth/auth';
import Inventory from './components/inventory/inventory';
import Admin from './components/admin/admin';
import About from './components/about/about';
import InventoryDetails from './components/inventory/inventoryDetails';

// work
import Crosses2021 from './components/work/2021crosses';
import Crosses2020 from './components/work/2020crosses';
import Crosses2019 from './components/work/2019crosses';
import Crosses2018 from './components/work/2018crosses';
import Crosses2017 from './components/work/2017crosses';
import Crosses2016 from './components/work/2016crosses';
import Crosses2015 from './components/work/2015crosses';
import Crosses2014 from './components/work/2014crosses';
import ViewMore from './components/work/viewMore';

const App = (post) => (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/about" exact component={About} />
          <Route path="/inventoryDetails/:id" component={InventoryDetails} />

          {/* work */}
          <Route path='/2021crosses' exact component={Crosses2021} />
          <Route path='/2020crosses' exact component={Crosses2020} />
          <Route path='/2019crosses' exact component={Crosses2019} />
          <Route path='/2018crosses' exact component={Crosses2018} />
          <Route path='/2017crosses' exact component={Crosses2017} />
          <Route path='/2016crosses' exact component={Crosses2016} />
          <Route path='/2015crosses' exact component={Crosses2015} />
          <Route path='/2014crosses' exact component={Crosses2014} />
          <Route path='/viewmore' exact component={ViewMore} />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default App;