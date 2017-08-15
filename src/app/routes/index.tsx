import * as React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, Counter, Stars } from 'containers';
import { Edit } from 'containers/Edit/edit';
import { Story } from 'story/@/story';

export default (
  <Route path="/"  component={App}>
    <IndexRoute component={Story} />
    <Route path="counter" component={Counter} />
    <Route path="stars" component={Stars} />
    <Route path="story" component={Story} />
    <Route path="edit/:type/:id" component={Edit} /> 
  </Route>
);
