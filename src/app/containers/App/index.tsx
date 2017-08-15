declare var appConfig: any;

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'components';

const style = require('./style.css');

class App extends React.Component<any, any> {
  public render() {
    return (
      <section className={style.AppContainer}>
          <Helmet>
            <title>{appConfig.head}</title>
          </Helmet>
        <Header />
        {this.props.children}
      </section>
    );
  }
}

export { App }
