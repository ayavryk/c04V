import * as React from 'react';
import { stories } from './@/stories';
import { CheckBox } from 'ui';

const click = (e) => console.log('click' + e);
stories.push({
    title: 'CheckBox',
    component: <CheckBox name="Input" label="222" onChange={click} />,
});
