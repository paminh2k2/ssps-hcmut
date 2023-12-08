import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BuyPages from '../../component/BuyPages';
import FooterUser from '../../component/FooterUser';
import HeaderUser from '../../component/HeaderUser';
import HomeUser from '../../component/HomeUser';
import LogBuyPages from '../../component/LogBuyPages';
import LogUser from '../../component/LogUser';
import Print from '../../component/Print';

import { useParams } from 'react-router-dom';

function UserLayout() {
  const { username } = useParams(); 
  console.log(username);

  return (
    <div>
      <HeaderUser />
      <Routes>
        <Route path='' element={<HomeUser fullname="ĐỨC THỊNH" />} />
        <Route path={'print'} element={<Print />} />
        <Route path={'log'} element={<LogUser />} />
        <Route path={'buy-pages'} element={<BuyPages countpages={100} />} />
        <Route path={'log-buy-pages'} element={<LogBuyPages />} />
      </Routes>
      <FooterUser />
    </div>
  );
}

export default UserLayout;
