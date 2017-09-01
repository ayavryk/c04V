import * as React from 'react';
import { hashHistory } from 'react-router';
declare var appConfig: any;

class Home extends React.Component<any, any> {

  // редирект на первую страницу меню
  public componentWillMount() {
    for (let i = 0; i < appConfig.menu.length; i++) {
      if (appConfig.menu[i].route) {
        hashHistory.push(appConfig.menu[i].route);
        break;
      }
    }
  }

  public render() {
    return null;
  }

}

export { Home }
