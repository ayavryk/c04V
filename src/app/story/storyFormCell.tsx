import * as React from 'react';
import { stories } from './@/stories';
import { FormCell } from 'ui';

const log = () => console.log('OK!');

const textAreaParams = {
    label: 'textarea',
    name: 'textarea',
    onChange: log,
    placeholder: 'textarea',
    type: 'text',
    value: 'textarea example',
};

const textParams = {
    label: 'text',
    name: 'text',
    onChange: log,
    placeholder: 'text',
    type: 'input',
    value: 'text example',
};

const form = (<div>
    <FormCell {...textAreaParams}/>
    <FormCell {...textParams}/>
</div>);

stories.push({
    title: 'FormCell',
    component: form,
});
