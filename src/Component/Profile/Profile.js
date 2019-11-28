import React from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import a from './avt2.jpg'
import Header from './Header/Header'
export default function Profile() {
    return (
        <div>
            <Header></Header>
            <div className="fluid-container pt-5">
                <div className="row">
                    <div className="col-3">
                    </div>
                    <div className="col-6">
                        <div className="row pt-5 pb-5  border-bottom">
                            <div className="col-9">
                                <div className="row">
                                    <h2 className="font-weight-bold m-0 pr-4">PhuongTrungDuc</h2>
                                    <div className=" col-0 upgrade ">
                                        <button className="btn btn-outline-secondary p-0">Edit profile</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 text-right">
                                <img src={a} className="rounded-circle avatar" alt="abc" />
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </div>
    );
}