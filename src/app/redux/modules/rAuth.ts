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
};

const INITIAL_STATE: IAuth = {
    user: '',
};

// =============================================================================================
// REDUSER
// =============================================================================================

export function auth(state: IAuth = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_GET:
            if (action.data.user) {
                return {user: action.data.user};
            }
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
    return fDGet(appConfig.server, {
        params: {
            whois: 'whois',
        },
        success: setUserAction,
        error: setUserAction,
    });
}
