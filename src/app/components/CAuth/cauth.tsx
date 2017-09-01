import * as React from 'react';
const css = require('./cauth.css');
declare var appConfig: any;

class CAuth extends React.Component < any, any > {

    public render() {
        console.log(appConfig);
        if (this.props.nonauth) {
          // location.href = appConfig.auth.logon;
        }
        return (
                <div className={css.cauth}>
                    No Auth
                </div>
        );
    }
};

export { CAuth };
