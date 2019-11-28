import React from 'react';
import './Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuSetting from './MenuSetting'
function Menu() {
    return (
        <div className="container-fluid pt-5">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-2 col-sm text-center">
                    <div className="menu">
                        <div className="title"><b>Settings</b></div>
                        <ul className="setting">
                            <li className="item"><a href="">Email settings
                            </a></li>
                            <li className="item"><a href="">Connections</a></li>
                            <li className="item"><a href="">Account</a></li>
                            <li className="item"><a href="">Membership</a></li>
                            <li className="item"><a href="">Security</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-6" >
                <MenuSetting></MenuSetting>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
}
export default Menu;