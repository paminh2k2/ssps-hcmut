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

import PrinterList_H1 from './component/PrinterList_H1/PrinterList_H1';
import PrinterList_H2 from './component/PrinterList_H2';
import PrinterList_H3 from './component/PrinterList_H3';
import PrinterList_H6 from './component/PrinterList_H6';

import PrinterHis from './component/PrinterHis/PrinterHis';
import PrinterHis_H1 from './component/PrinterHis_H1/PrinterHis_H1';
import PrinterHis_H2 from './component/PrinterHis_H2';
import PrinterHis_H3 from './component/PrinterHis_H3';
import PrinterHis_H6 from './component/PrinterHis_H6';

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
              <Route path={"/admin"} element={<AdminLayout />}>
            <Route path={""} element={<HomeAdmin />} />
            <Route path={"log"} element={<LogAdmin />} />
            <Route path={"config-system"} element={<ConfigSystem />} />
            <Route path={"printer"} element={<Printer />} />
            <Route
              path={"printerlist_H1"}
              element={<PrinterList_H1 />}
            />
            <Route
              path={"printerlist_H2"}
              element={<PrinterList_H2 />}
            />
            <Route
              path={"printerlist_H3"}
              element={<PrinterList_H3 />}
            />
            <Route
              path={"printerlist_H6"}
              element={<PrinterList_H6 />}
            />
            <Route path={"printerhis"} element={<PrinterHis />} />
            <Route path={"printerhis_H1"} element={<PrinterHis_H1 />} />
            <Route path={"printerhis_H2"} element={<PrinterHis_H2 />} />
            <Route path={"printerhis_H3"} element={<PrinterHis_H3 />} />
            <Route path={"printerhis_H6"} element={<PrinterHis_H6 />} />
          </Route>
            </Routes>
          </Router>
        );
    };
    export default App;