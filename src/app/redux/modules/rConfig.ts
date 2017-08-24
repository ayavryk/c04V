import {fDGet} from 'lib/fetch';

declare var appConfig: any;

// =============================================================================================
// CONST
// =============================================================================================
export const CLOADERROR = 'CLOADERROR';
export const CSET = 'CSET';
export const MESSAGE = 'CMESSAGE';

// =============================================================================================
// INITIAL_STATE
// =============================================================================================

export interface IConfig {
    config: any;
    url: any;
}

const INITIAL_STATE: IConfig = {
    config: null,
    url: null,
};

// =============================================================================================
// REDUSER
// =============================================================================================

export function config(state: IConfig = INITIAL_STATE, action) {
    switch (action.type) {
        case CSET:
            return action.data ? action.data : INITIAL_STATE;
        default:
            return state;
    }
}

// =============================================================================================
// ACTIONS
// =============================================================================================

export function loadError() {
    return ({
        type: MESSAGE,
        data: { message: 'Ошибка загрузки конфигурации'},
    });
}
export function setConfig(data) {
    return ({
        type: CSET,
        data,
    });
}

export function loadConfig(params) {
    const url = appConfig.configPath.replace('{controller}', params.controller).replace('{method}', params.method);
    return fDGet(url, {
        params,
        success: setConfig,
        error: loadError,
    });
}
