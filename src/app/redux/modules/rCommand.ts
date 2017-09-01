// =============================================================================================
// CONST
// =============================================================================================

const CLEAR = 'MSG_CLEAR';
const SET = 'MSG_SET';

// =============================================================================================
// INITIAL_STATE
// =============================================================================================

export interface ICommand {
    message: string;
    command: string;
    notify: string;
};

const INITIAL_STATE: ICommand = {
    message: '',
    command: '',
    notify: '',
};

// =============================================================================================
// REDUSER
// =============================================================================================

export function message(state: ICommand = INITIAL_STATE, action) {
    let  res;
    switch (action.type) {
        case CLEAR:
            return INITIAL_STATE;
        case SET:
            res = { ...state, ...action.data };
            return res;
        default:
            res = state;
            if (action.data) {
                const { command, notify, message } = action.data;
                if (command) {
                    res = { ...res, command };
                }
                if (notify) {
                    res = { ...res, notify };
                }
                if (message) {
                    res = { ...res, message };
                }
            }
            return res;
    }
};

// =============================================================================================
// ACTIONS
// =============================================================================================

export function clearMessage() {
    return dispatch => dispatch ({
        type: CLEAR,
    });
};

export function setMessage(data) {
    return dispatch => dispatch ({
        type: SET,
        data,
    });
};
