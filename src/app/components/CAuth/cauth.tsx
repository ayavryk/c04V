import * as React from 'react';
const css = require('./cauth.css');
// declare var appConfig: any;

class CAuth extends React.Component < any, any > {

    public componentWillReceiveProps() {
        this.auth();
    }
    public componentWillMount() {
        this.auth();
    }

    public auth = () => {
        console.log(':(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(');
    }
    public render() {

        return (
                <div className={css.cauth}>
                    :(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(
                </div>
        );
    }
};

export { CAuth };
