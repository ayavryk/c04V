import * as React from 'react';
const css = require('./css/loading.css');

const Loading = () =>   {
    return (
      <div className={css.spinner}/>
    );
};
export { Loading };
