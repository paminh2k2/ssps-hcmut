import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BuyPages from '../../component/BuyPages';
import FooterUser from '../../component/FooterUser';
import HeaderUser from '../../component/HeaderUser';
import HomeUser from '../../component/HomeUser';
import LogBuyPages from '../../component/LogBuyPages';
import LogUser from '../../component/LogUser';
import Print from '../../component/Print';
import users from '../../data/users.json';

import { useParams } from 'react-router-dom';

function UserLayout() {
  const { username } = useParams(); 

  const user = users.find((u) => u.username === parseInt(username));

  return (
    <div>
      <HeaderUser />
      <Routes>
        <Route path='' element={<HomeUser fullname={user.name} 
        countpages = {user.countpages}
        countprints = {user.countprints}
        filename = {user.filename}
        dateprint = {user.dateprint}
        />} />
        <Route path={'print'} element={<Print user={username}/>} />
        <Route path={'log'} element={<LogUser user={username}/>} />
        <Route path={'buy-pages'} element={<BuyPages countpages={100} user={username}/>} />
        <Route path={'log-buy-pages'} element={<LogBuyPages user={username}/>} />
      </Routes>
      <FooterUser />
    </div>
  );
}

export default UserLayout;
