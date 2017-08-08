import * as React from 'react';
import { stories } from './stories';
import '../';

const style = require('./story.css');

class Story extends React.Component<any, {}> {
  public state = { index: 1 };
  constructor(props) {
    super(props);
    this.state = { index: 1 };
  }

  public menu = () => {
    return stories.map( (item, index) => {
      const className = style.link
        + (this.state.index === index ? ' ' + style.active : '')
        + (!item.component ? ' ' + style.header : '');
      const click = item.component ? {onClick: (() => this.setState({index}))} : {};
      return  (<div key={index} className={className} {...click}>{item.title}</div>);
    });
  }

  public render() {
    return (
      <div className={style.wrapper}>
        <div className={style.menu}>
          {this.menu()}
        </div>
        <div  className={style.components}>
          <h1>{stories[this.state.index].title}</h1>
          {stories[this.state.index].component && stories[this.state.index].component}                 
        </div>
      </div>);
  }
}

export { Story }
