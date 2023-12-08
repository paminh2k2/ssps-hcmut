    import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import BuyPages from './component/BuyPages';
import ConfigSystem from './component/ConfigSystem';
import HomeAdmin from './component/HomeAdmin/HomeAdmin';
import HomeUser from './component/HomeUser/HomeUser';
import LogAdmin from './component/LogAdmin/LogAdmin';
import LogBuyPages from './component/LogBuyPages';
import LogUser from './component/LogUser';
import Print from './component/Print';
import Printer from './component/Printer/Printer';
import AdminLayout from './layouts/AdminLayout/AdminLayout';
import Login from './layouts/Login';
import UserLayout from './layouts/UserLayout/UserLayout';

    function App() {
        
        return (
            <Router>
            <Routes>
              <Route path={'/'} element={<Login />} />
              <Route
                path={`/user/:username`}
                element={
                  <UserLayout/>
                }
              >
                <Route path='' element={<HomeUser />} />
                <Route path={'print'} element={<Print/>} />
                <Route path={'log'} element={<LogUser />} />
                <Route path={'buy-pages'} element={<BuyPages />} />
                <Route path={'log-buy-pages'} element={<LogBuyPages />} />

              </Route>
              <Route path={'/admin'} element={<AdminLayout />}>
                <Route path={''} element={<HomeAdmin />} />
                <Route path={'config-system'} element={<ConfigSystem />} />
                <Route path={'printer'} element={<Printer />} />
                <Route path={'log'} element={<LogAdmin />} />
              </Route>
            </Routes>
          </Router>
        );
    };
    export default App;