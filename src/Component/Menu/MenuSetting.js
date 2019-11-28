import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MenuSetting.css'
export default function MenuSetting() {
    return (
        <div>
            <div className="title border-bottom">
                <h2>Email Settings</h2>
            </div>
            <div className="border-bottom">
                <div className="row pt-2">
                    <div className="col-10 pt-2">
                        <h5>
                            Your email
                    </h5>
                        <p className="style1" >
                            phgtrungduc@gmail.com
                    </p>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-outline-secondary">Edit email</button>
                    </div>
                </div>
            </div>
            <div className="border-bottom">
                <div className="row pt-4">
                    <div className="col-8 pt-2">
                        <h5>
                            Emails from Medium
                            </h5>
                        <p>
                            <b>
                                Medium Digest
                                </b>
                        </p>
                        <p className="style2">
                            The best stories on Medium personalized based on your interests, as well as outstanding
                            stories selected by our editors
                            </p>
                    </div>
                    <div className="col-4 pl-5">
                        <div className="btn-group border rounded text-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn border-right btn-outline-secondary">Daily</button>
                            <button type="button" className="btn border-right btn-outline-secondary">Weekly</button>
                            <button type="button" className="btn btn-outline-secondary">Off</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-9 pt-2 pr-5">
                        <p>
                            <b>
                                Recommended reading
                                </b>
                        </p>
                        <p className="style2">
                            Featured stories, columns, and collections that we think you’ll enjoy based on your
                            reading history

                            </p>
                    </div>
                    <div className="col-3 pl-5">
                        <div className="btn-group border rounded text-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn border-right btn-outline-secondary">On</button>
                            <button type="button" className="btn border-right btn-outline-secondary">Off</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom">
                <div className="row pt-4">
                    <div className="col-9 pt-2 pr-5">
                        <h5>
                            Emails from publications

                            </h5>
                        <br></br>
                        <br></br>
                        <p>
                            <b>
                                Followed publications
                                </b>
                        </p>
                        <p className="style2">
                            Control which emails are sent to you from publications you follow
                            </p>
                    </div>
                    <div className="col-3 pl-5">
                        <div className="btn-group border rounded text-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn border-right btn-outline-secondary">On</button>
                            <button type="button" className="btn border-right btn-outline-secondary">Off</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom">
                <div className="row pt-4">
                    <div className="col-9 pt-2 pr-5">
                        <h5>
                            Social notifications

                            </h5>
                        <p className="style2">
                            Notifications when someone follows you or highlights the same passage in a story
                            </p>
                    </div>
                    <div className="col-3 pl-5">
                        <div className="btn-group border rounded text-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn border-right btn-outline-secondary">On</button>
                            <button type="button" className="btn border-right  btn-outline-secondary">Off</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom">
                <div className="row pt-4">
                    <div className="col-8 pt-2 pr-5">
                        <h5>
                            Mention notifications

                            </h5>
                        <p className="style2">
                            Notifications when people mention you in their stories on Medium
                            </p>
                    </div>
                    <div className="col-3 pl-5">
                        <div className="btn-group border rounded text-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn border-right btn-outline-secondary">All</button>
                            <button type="button" className="btn border-right btn-outline-secondary">Network</button>
                            <button type="button" className="btn btn-outline-secondary">Off</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom">
                <div className="row pt-4">
                    <div className="col-8 pt-2 pr-5">
                        <h5>
                            Mention notifications

                            </h5>
                        <p className="style2">
                            Notifications when people mention you in their stories on Medium
                            </p>
                    </div>
                    <div className="col-3 pl-5">
                        <div className="btn-group border rounded text-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn border-right btn-outline-secondary">All</button>
                            <button type="button" className="btn border-right btn-outline-secondary">Network</button>
                            <button type="button" className="btn btn-outline-secondary">Off</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-bottom pt-4 pb-4">
                <h5>
                    Updates for writers
                    </h5>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue"/>
                            Notifications on your stories 
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue"/>
                            Writing updates and announcements
                    </label>
                </div>
                <div className="form-check">

                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue"/>
                            Outreach from the Editorial team
                    </label>
                </div>
            </div>
            <div className="border-bottom pt-4 pb-4">
                <h5>
                    Medium updates
                    </h5>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue"/>
                            New product features on Medium 
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="" id="" value="checkedValue"/>
                            Information about Medium membership
                    </label>
                </div>
            </div>
            <div className="border-bottom">
                <div className="row pt-4">
                    <div className="col-9 pt-2 pr-5">
                        <h5>
                            Social notifications

                            </h5>
                        <p className="style2">
                            Notifications when someone follows you or highlights the same passage in a story
                            </p>
                    </div>
                    <div className="col-3 pl-5">
                        <div className="btn-group border rounded text-right" role="group" aria-label="Basic example">
                            <button type="button" className="btn border-right btn-outline-secondary">On</button>
                            <button type="button" className="btn border-right btn-outline-secondary">Off</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}