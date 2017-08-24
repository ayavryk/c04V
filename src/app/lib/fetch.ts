require('isomorphic-fetch');
declare var appConfig: any;

export function fGet(url: string, params?: any) {
    let postParams = {};
    if (params.postParams) {
        const data = new FormData();
        data.append('json', JSON.stringify(params.postParams || {}));
        postParams = { method: 'POST', body: data };
    }
    fetch(url.replace('{server}', appConfig.server), postParams)
      .then((res) => {
          return res.json()
            .then( (res) => {
                return params.success(res);
            });
      })
      .catch((err) => {
          if (params.error) {
              params.error(err);
          }
          console.log('ERROR LOAD ' + url + ' : ' + err);
      });
}

function getQueryString(params) {
    const esc = encodeURIComponent;
    return Object.keys(params)
      .map((k) => esc(k) + '=' + esc(params[k]))
      .join('&');
}

export function fDGet(url: string, params?: any) {

    const getParams = params.params || params.getParams || {};
    let postParams = {};
    const getUrl = url + '?' + getQueryString(getParams);
    if (params.postParams) {
        const data = new FormData();
        data.append('json', JSON.stringify(params.postParams || {}));
        postParams = { method: 'POST', body: data };
    }

    return (dispatch) => {
        return fetch(getUrl, postParams)
          .then((res) => {
             if (res.ok) {
                return res.json()
                .then( (res) => {
                    return dispatch(params.success(res));
                });
            } else {
                 dispatch(params.error());
            }
          })
          .catch((err) => {
              dispatch(params.error(err));
          });
    };
}
