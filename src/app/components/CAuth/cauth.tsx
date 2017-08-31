import * as React from 'react';
const css = require('./cauth.css');

class CAuth extends React.Component < any, any > {

    public render() {
        return (
                <div className={css.cauth}>
                    No Auth
                </div>
        );
    }
};

export { CAuth };
