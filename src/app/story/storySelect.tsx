import * as React from 'react';
import { stories } from './@/stories';
import { Select } from 'ui';

const click = (e) => console.log(e);
const src = [{ value: '1', text: 'One' }, {value: '2', text: 'Two' }, { value: '3', text: 'Three' }];
stories.push({
    title: 'Select',
    component: <Select name="Select"  value="2"  src={src} onChange={click} />,
});
