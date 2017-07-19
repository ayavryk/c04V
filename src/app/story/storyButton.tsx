import * as React from 'react';
import { stories } from './@/stories';
import { Button } from 'ui';

const click = (e) => console.log(e);
stories.push({
    title: 'Button',
    component: <Button   label="222" onClick={click}>Button</Button>,
});
