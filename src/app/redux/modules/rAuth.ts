import {fDGet} from 'lib/fetch';
declare var appConfig: any;

// =============================================================================================
// CONST
// =============================================================================================

const USER_GET = 'USER_GET';

// =============================================================================================
// INITIAL_STATE
// =============================================================================================

export interface IAuth {
    user?: string;
    command?: string;
};

const INITIAL_STATE: IAuth = {
    user: '',
    command: '',
};

// =============================================================================================
// REDUSER
// =============================================================================================

export function auth(state: IAuth = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_GET:
            return {...state, ...action.data};
        default:
            return state;
    }
};

// =============================================================================================
// ACTIONS
// =============================================================================================

export function setUserAction(data) {
    return ({
        type: USER_GET,
        data,
    });
}

export function getAuth() {
    const url = appConfig.server;
    return fDGet(url, {
        params: {
            whois: 'auth',
        },
        success: setUserAction,
        error: setUserAction,
    });
}
