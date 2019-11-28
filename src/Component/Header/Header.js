import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import b from './ring.png';
import a from './search1.png';
import c from './avatar.jpg';

function Header() {
  return (
    <div className="container-fluid header pb-2 shadow-sm" >
      <div className="row" >
        <div className="col-2"></div>
        <div className="col-sm logo">
          <a href="www.facebook.com" className="nounderline text-dark">Medium</a>
        </div>
        <div className="col-sm-0 icon pr-4">
          <a href="#"><img src={a} alt=""></img></a>
        </div>
        <div className="col-sm-0 icon pr-4">
          <a href="#"><img src={b} alt=""></img></a>
        </div>
        <div className=" col-0 upgrade " >
          <button class="btn btn-outline-secondary pt-1 pb-1">Upgrade</button>
        </div>
        <div className="col-1 avatar ">
          <a href="#"><img src={c} alt="" className="rounded-circle"></img></a>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Header;
