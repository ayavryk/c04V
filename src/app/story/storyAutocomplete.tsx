import * as React from 'react';
import { stories } from './@/stories';
import {  Autocomplete, IAutocompleteProps } from 'ui/autocomplete';

const data: IAutocompleteProps = {
 name: 'auto',
 placeholder: 'auto',
 src: 'http://c04.new/admin04/main?method=text&controller=suggest&query=',
 onChange: (e) => {console.log(e); },
};
stories.push({
    title: 'Autocomplete',
    component: <Autocomplete {...data} />,
});
