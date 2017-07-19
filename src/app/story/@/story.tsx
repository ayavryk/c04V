import * as React from 'react';
import { stories } from './stories';
import '../';

const style = require('./story.css');

class Story extends React.Component<any, {}> {
  public state = { index: 0 };
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  public menu = () => {
    return stories.map( (item, index) => {
      const setCurrent = () => this.setState({index});
      return  (<div key={index} className={style.link} onClick={setCurrent}>{item.title}</div>);
    });
  }

  public render() {
    return (
      <div className={style.wrapper}>
        <div className={style.menu}>
          {this.menu()}
        </div>
        <div  className={style.components}>
          {stories[this.state.index].component}                 
        </div>
      </div>);
  }
}

export { Story }
