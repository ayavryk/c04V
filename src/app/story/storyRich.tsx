import * as React from 'react';
import { stories } from './@/stories';
import { Rich  } from 'ui/rich';

const data = {
    flex: 1,
    label: 'Информация об авторе',
    value: '',
    name: 'text',
    type: 'rich',
    placeholder: 'Информация об авторе'};

stories.push({
    title: 'Rich',
    component: <Rich  {...data} />,
});
