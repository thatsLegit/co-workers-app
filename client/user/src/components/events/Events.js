import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';

import { HiUsers } from 'react-icons/hi';

import Tooltip from '@material-ui/core/Tooltip';
import {
    createMuiTheme,
    MuiThemeProvider
} from "@material-ui/core/styles";


const Events = () => {

    const events = useSelector(state => state.events);
    const users = useSelector(state => state.profiles.profiles);
    const [currenEvent, setEvent] = useState();

    const theme = createMuiTheme({
        overrides: {
            MuiTooltip: {
                tooltip: {
                    fontSize: "1em",
                    color: "white",
                    backgroundColor: "black"
                }
            }
        }
    });

    return (
        <section className="container main">
            <div className="row">
                <div className="col-md-4 col-lg-4 col-xl-4 offset-xl-1 vh-container-small">
                    <ul className="list-group">
                        {events.events.map(event =>
                            <li className="list-group-item" onClick={() => setEvent(event)} style={{ backgroundColor: (event == currenEvent) ? "#99FF99" : "white" }}>
                                <div className="d-flex flex-row justify-content-between align-items-start">
                                    <p id="halloween-party-header" style={{ fontFamily: 'Alatsi, sans-serif' }} >{event.title}</p></div>
                                <p className="text-center" id="halloween-event-text">{event.description}</p>
                            </li>
                        )}

                    </ul>
                </div>
                {currenEvent &&
                    <div className="col-md-8 col-lg-8 col-xl-7 align-self-center responsive-margin">


                        <MuiThemeProvider theme={theme}>

                            <Tooltip
                                title={
                                    <Fragment>
                                        {currenEvent.attending.map(user =>
                                            <Fragment>{users.find(usr => usr.id == user.user).firstName} {users.find(usr => usr.id == user.user).lastName} <br /> </Fragment>
                                        )}
                                    </Fragment>
                                }
                            >
                                <p className="text-center">Capacity: {currenEvent.attending.length} / {currenEvent.capacity}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <HiUsers></HiUsers> Attending Users
                                    </p>
                            </Tooltip>
                        </MuiThemeProvider>
                        <img className="img-fluid" src={currenEvent.image} alt="pic" />
                    </div>
                }

            </div>
        </section>

    )
}


export default Events
