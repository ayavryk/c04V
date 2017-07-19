import * as React from 'react';
import { stories } from './@/stories';
import { Input } from 'ui';

const click = (e) => console.log(e);
stories.push({
    title: 'Input',
    component: <Input placeholder="input" name="Input" label="222" onChange={click} />,
});
