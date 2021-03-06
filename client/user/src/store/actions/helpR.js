import axios from 'axios';
import { setAlert } from './alerts';

export const SET_HELP_REQUESTS = 'SET_HELP_REQUESTS';
export const UPDATE_ONE_HELP_REQUEST = 'UPDATE_ONE_HELP_REQUEST';
export const CREATE_HELP_REQUEST = 'CREATE_HELP_REQUEST';
export const HELP_REQUESTS_ERROR = 'HELP_REQUESTS_ERROR';
export const CLEAR_HELP_REQUESTS = 'CLEAR_HELP_REQUESTS';


export const fetchHelpR = () => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.get(getState().globalVars.currentDomain + '/api/cw-api/help-requests/received/' + getState().auth.user._id);
            dispatch({ type: SET_HELP_REQUESTS, helpR: res.data.data });
        } catch (err) {
            return dispatch({
                type: HELP_REQUESTS_ERROR,
                error: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }
    }
}

export const sendhelpR = (users, question) => {
    return async (dispatch, getState) => {
        const body = {
            users,
            question
        };
        try {
            const res = await axios.post(getState().globalVars.currentDomain + '/api/cw-api/help-requests', body);
            await dispatch({ type: CREATE_HELP_REQUEST, helpr: res.data.data });
            await dispatch(setAlert('success', 'Your question has been successfully sumbitted !'));
        } catch (err) {
            const errors = err.response.data.errors;

            if (errors) {
                errors.forEach(error => dispatch(setAlert('danger', error.msg)));
            }
        }

        const ws = getState().auth.socket;

        return ws.send(JSON.stringify({
            type: 'helpR',
            event: 'sendHelpR',
            payload: {
                users
            }
        }));
    }
}

export const updateHelpR = (helprId, profileId) => {
    return async (dispatch, getState) => {
        try {
            const res = await axios.put(getState().globalVars.currentDomain + `/api/cw-api/help-requests/${helprId}`, { status: 'accepted' });
            await dispatch({ type: UPDATE_ONE_HELP_REQUEST, helpr: res.data.data, helprId });
        } catch (err) {
            await dispatch({
                type: HELP_REQUESTS_ERROR,
                error: {
                    msg: err.response.statusText,
                    status: err.response.status
                }
            });
        }

        const ws = getState().auth.socket;

        return ws.send(JSON.stringify({
            type: 'helpR',
            event: 'acceptHelpR',
            payload: {
                userToUpdate: profileId
            }
        }));
    }
}   