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

interface IData {
    config: any;
    url: any;
}

const INITIAL_STATE: IData = {
    config: null,
    url: null,
};

// =============================================================================================
// REDUSER
// =============================================================================================

export function config(state: IData = INITIAL_STATE, action) {
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

/*
export function loadConfig(params){
  const url = appConfig.configPath.replace('{controller}', params.controller).replace('{method}', params.method);
  return (dispatch) => {
    return fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json()
            .then((res) => dispatch(setConfig(res)));
        } else {
          return res.json()
            .then((res) => dispatch(loadError(res)));
        }
      })
      .catch((err) => dispatch(loadError(err)));
  };
}
*/
