/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useState } from 'react';
//Icons
import { HiOutlineLightBulb, HiUserGroup } from 'react-icons/hi';
import { FaCircle, FaUserMinus, FaRegComment, FaUserPlus } from 'react-icons/fa';
import { ImLifebuoy, ImAccessibility } from 'react-icons/im';

const UsersTable = () => {

    const [socialDD, setSocialDD] = useState("dropdown-menu");
    const [activityDD, setActivityDD] = useState("dropdown-menu");
    const [activityDDModal, setActivityDDModal] = useState("dropdown-menu");

    return (
    <Fragment>
        <div class="col-sm-12 col-md-4 col-lg-3 col-xl-4 offset-xl-0 d-flex flex-column">
            <div id="people-container" class="responsive-margin">
                <div class="d-flex flex-row justify-content-between align-items-start filters-container" id="people-header">
                    <div data-tip="Send a help request" class="d-flex flex-column justify-content-center align-items-center"
                        id="help-request" data-toggle="modal" data-target="#help-request-modal">
                        <HiOutlineLightBulb style={{ color: "rgb(255,255,0)", paddingTop: "2px", marginBottom: "-5px" }} />
                        <HiUserGroup data-tip="Send a help request"
                            style={{ padding: "0px", paddingRight: "10px", paddingBottom: "5px", paddingLeft: "10px", width: "46px", height: "30px" }} />
                    </div>
                    <div class="dropdown social-dropdown">
                        <button class="btn btn-outline-success btn-sm dropdown-toggle text-body social-dropdown-button"
                            data-toggle="dropdown" aria-expanded="false" type="button">I want to see...&nbsp;
                        </button>
                        <div class="dropdown-menu">
                            <div onMouseEnter={e=> setSocialDD("dropdown-menu show")}
                                onMouseLeave={e => setSocialDD("dropdown-menu")}
                                class="dropleft"
                                id="status-sector-dropleft"
                                >
                                <button class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false"
                                    type="button">
                                    Status
                                </button>
                                <div class={socialDD} id="status-sector-menu">
                                    <a class="dropdown-item" href="#">Available</a>
                                    <a class="dropdown-item" href="#">Do not disturb</a>
                                    <a class="dropdown-item" href="#">Unavailable</a>
                                </div>
                            </div><a class="dropdown-item" href="#">Friends</a>
                            <div class="dropleft" id="activity-sector-dropleft" onMouseEnter={e=>
                                setActivityDD("dropdown-menu show")}
                                onMouseLeave={e => setActivityDD("dropdown-menu")}
                                >
                                <button class="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false"
                                    type="button"> Activity Sector
                                </button>
                                <div class={activityDD} id="activity-sector-menu">
                                    <a class="dropdown-item" href="#">Accountancy, banking and finance</a><a
                                        class="dropdown-item" href="#">Business, consulting and management</a><a
                                        class="dropdown-item" href="#">Charity and voluntary work</a><a
                                        class="dropdown-item" href="#">Creative arts and design</a><a class="dropdown-item"
                                        href="#">Student or Learning</a><a class="dropdown-item" href="#">Instructor
                                        or Teacher</a><a class="dropdown-item" href="#">Energy and utilities</a>
                                    <a class="dropdown-item" href="#">Engineering and manufacturing</a><a
                                        class="dropdown-item" href="#">Environement and agriculture</a><a
                                        class="dropdown-item" href="#">Healthcare</a><a class="dropdown-item"
                                        href="#">Hospitality and events management</a>
                                    <a class="dropdown-item" href="#">Information technologies</a><a class="dropdown-item"
                                        href="#">Law</a><a class="dropdown-item" href="#">Leisure, sport and tourism</a><a
                                        class="dropdown-item" href="#">Marketing, advertising and PR</a><a
                                        class="dropdown-item" href="#">Media and internet</a><a class="dropdown-item"
                                        href="#">Recruitement and retailement</a><a class="dropdown-item" href="#">HR</a><a
                                        class="dropdown-item" href="#">Sales</a><a class="dropdown-item" href="#">Science
                                        and pharmaceuticals</a><a class="dropdown-item" href="#">Social care</a><a
                                        class="dropdown-item" href="#">Transportation and logistics</a></div>
                            </div>
                        </div>
                    </div>

                    <div class="modal fade" role="dialog" tabindex="-1" id="help-request-modal">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h4 class="modal-title">Help request</h4><button type="button" class="close"
                                        data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                </div>
                                <div class="modal-body">
                                    <form class="modal-form" style={{fontSize: "1rem"}}>
                                        <div class="form-group"><label>Send help request to ...</label>
                                            <div class="dropdown social-dropdown"><button
                                                    class="btn btn-outline-success btn-sm dropdown-toggle text-body social-dropdown-button"
                                                    data-toggle="dropdown" aria-expanded="false" type="button">I
                                                    want to see...&nbsp;</button>
                                                <div class="dropdown-menu"><a class="dropdown-item" href="#">Available</a><a
                                                        class="dropdown-item" href="#">Friends</a>
                                                    <div class="dropleft" id="activity-sector-dropleft-modal"
                                                        onMouseEnter={e=> setActivityDDModal("dropdown-menu show")}
                                                        onMouseLeave={e => setActivityDDModal("dropdown-menu")}
                                                        >
                                                        <button class="btn dropdown-toggle" data-toggle="dropdown"
                                                            aria-expanded="false" type="button">Activity
                                                            Sector</button>
                                                        <div class={activityDDModal} id="activity-sector-menu-modal">
                                                            <a class="dropdown-item" href="#">Accountancy, banking
                                                                and finance</a><a class="dropdown-item" href="#">Business,
                                                                consulting and management</a><a class="dropdown-item"
                                                                href="#">Charity and voluntary
                                                                work</a>
                                                            <a class="dropdown-item" href="#">Creative arts and
                                                                design</a><a class="dropdown-item" href="#">Student
                                                                or Learning</a><a class="dropdown-item" href="#">Instructor
                                                                or Teacher</a><a class="dropdown-item" href="#">Energy and
                                                                utilities</a>
                                                            <a class="dropdown-item" href="#">Engineering and
                                                                manufacturing</a><a class="dropdown-item"
                                                                href="#">Environement and agriculture</a><a
                                                                class="dropdown-item" href="#">Healthcare</a><a
                                                                class="dropdown-item" href="#">Hospitality and
                                                                events management</a>
                                                            <a class="dropdown-item" href="#">Information
                                                                technologies</a><a class="dropdown-item" href="#">Law</a><a
                                                                class="dropdown-item" href="#">Leisure, sport and
                                                                tourism</a><a class="dropdown-item" href="#">Marketing,
                                                                advertising and PR</a>
                                                            <a class="dropdown-item" href="#">Media and
                                                                internet</a><a class="dropdown-item" href="#">Recruitement
                                                                and retailement</a><a class="dropdown-item"
                                                                href="#">HR</a><a class="dropdown-item" href="#">Sales</a><a
                                                                class="dropdown-item" href="#">Science and
                                                                pharmaceuticals</a><a class="dropdown-item" href="#">Social
                                                                care</a><a class="dropdown-item" href="#">Transportation and
                                                                logistics</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group"><label>Explain your problem in a few
                                                words</label><textarea class="form-control"></textarea></div>
                                    </form>
                                </div>
                                <div class="modal-footer"><button class="btn btn-light" type="button"
                                        data-dismiss="modal">Close</button><button class="btn btn-primary"
                                        type="button">Save</button></div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Start of displaying the users */}
                <div id="people-body">
                    <div class="d-flex flex-row justify-content-between align-items-baseline people-inner-element">
                        <div class="d-flex flex-row justify-content-between align-items-center">
                            <FaCircle data-tip="Available" class="user-icon-available" title="available" />
                            <a class="dashboard-name-link" href="profile.html">Nicolas Cage</a>
                        </div>
                        <div class="d-flex flex-row align-items-baseline">
                            <FaUserMinus class="mood-status-icon" data-tip="Prefer to stay alone" size={25} />
                            <ImLifebuoy class="ask-help-icon" data-tip="Send a help request" size={25} />
                            <FaRegComment class="comment-icon" data-tip="Send a message" size={25} />
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-baseline people-inner-element">
                        <div class="d-flex flex-row justify-content-between align-items-center">
                            <FaCircle data-tip="Available" class="user-icon-available" title="available" />
                            <a class="dashboard-name-link" href="profile.html">Laurent Perrussel</a></div>
                        <div class="d-flex flex-row align-items-baseline">

                            <FaUserPlus class="mood-status-icon" data-tip="Feeling social" size={25} />
                            <ImLifebuoy class="ask-help-icon" data-tip="Send a help request" size={25} />
                            <FaRegComment class="comment-icon" data-tip="Send a message" size={25} />
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-baseline people-inner-element">
                        <div class="d-flex flex-row justify-content-between align-items-center">
                            <FaCircle data-tip="Available" class="user-icon-available" title="available" />
                            <a class="dashboard-name-link" href="profile.html">Daiqiao</a></div>
                        <div class="d-flex flex-row align-items-baseline">
                            <FaUserPlus class="mood-status-icon" data-tip="Feeling social" size={25} />
                            <ImLifebuoy class="ask-help-icon" data-tip="Send a help request" size={25} />
                            <FaRegComment class="comment-icon" data-tip="Send a message" size={25} />
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-baseline people-inner-element">
                        <div class="d-flex flex-row justify-content-between align-items-center">
                            <FaCircle data-tip="DND" class="user-icon-dnd" title="DND" />
                            <a class="dashboard-name-link" href="profile.html">Paul</a></div>
                        <div class="d-flex flex-row align-items-baseline">
                            <FaUserPlus class="mood-status-icon" data-tip="Feeling social" size={25} />
                            <FaRegComment class="comment-icon" data-tip="Send a message" size={25} />
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-baseline people-inner-element">
                        <div class="d-flex flex-row justify-content-between align-items-center">
                            <FaCircle data-tip="Available" class="user-icon-available" title="available" />
                            <a class="dashboard-name-link" href="profile.html">Shradda</a></div>
                        <div class="d-flex flex-row align-items-baseline">
                            <ImAccessibility class="mood-status-icon" data-tip="Willing to help others" size={25} />
                            <ImLifebuoy class="ask-help-icon" data-tip="Send a help request" size={25} />
                            <FaRegComment class="comment-icon" data-tip="Send a message" size={25} />
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-baseline people-inner-element">
                        <div class="d-flex flex-row justify-content-between align-items-center">
                            <FaCircle data-tip="Available" class="user-icon-available" title="available" />
                            <a class="dashboard-name-link" href="profile.html">Jorgo</a>
                        </div>
                        <div class="d-flex flex-row align-items-baseline">
                            <ImAccessibility class="mood-status-icon" data-tip="Willing to help others" size={25} />
                            <ImLifebuoy class="ask-help-icon" data-tip="Send a help request" size={25} />
                            <FaRegComment class="comment-icon" data-tip="Send a message" size={25} />
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-baseline people-inner-element">
                        <div class="d-flex flex-row justify-content-between align-items-center">
                            <FaCircle data-tip="Invisible" class="user-icon-invisible" title="Invisible" />
                            <a class="dashboard-name-link" href="profile.html">Ilya</a></div>
                        <div class="d-flex flex-row align-items-baseline">
                            <FaUserMinus class="mood-status-icon" data-tip="Prefer to stay alone" size={25} />
                            <FaRegComment class="comment-icon" data-tip="Send a message" size={25} />
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-baseline people-inner-element">
                        <div class="d-flex flex-row justify-content-between align-items-center">
                            <FaCircle data-tip="DND" class="user-icon-dnd" title="DND" />
                            <a class="dashboard-name-link" href="profile.html">Lonely Panda</a>
                        </div>
                        <div class="d-flex flex-row align-items-baseline">
                            <FaUserMinus class="mood-status-icon" data-tip="Prefer to stay alone" size={25} />
                            <FaRegComment class="comment-icon" data-tip="Send a message" size={25} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default UsersTable;