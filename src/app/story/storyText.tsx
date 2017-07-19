import * as React from 'react';
import { stories } from './@/stories';
import { Text } from 'ui';

const click = (e) => console.log(e);
stories.push({
    title: 'Text',
    component: <Text  name="Text"  value="TExt" onChange={click} />,
});
