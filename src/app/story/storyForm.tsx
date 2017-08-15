import * as React from 'react';
import { stories } from './@/stories';
import { CForm } from 'components/CForm/cform';
import { cFormData } from './data/cFormData';
import { clone } from 'lib/clone';

class CFormExample extends React.Component <any, any> {
        constructor(props) {
        super(props);
        this.state = clone(cFormData.data);
    }

    public update = (e) => {
        const data = {};
        data[e.field] = e.value;
        this.setState(data);
    }

    public render() {
        return (<CForm actions={{update: this.update}} config={this.props.config} data={this.state}  />);
    }
}

stories.push({
    title: 'CForm',
    component: <CFormExample {...cFormData} />,
});
