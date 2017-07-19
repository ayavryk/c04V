import * as React from 'react';

import { AutoComplete, Input, Select, Text, Check, Rich, Mult } from './';

const css = require('./css/form.css');
const controls = {
    input: Input,
    select: Select,
    check: Check,
    text: Text,
    mult: Mult,
    rich: Rich,
    autocomplete: AutoComplete,
};

class FormCell extends React.Component < any, any > {

    public state = {
        active: false,
    };

    // если получен фокус, то нужно контейнерам дать максимальный zindex
    public activate(active) {
        this.setState({ active });
        if (this.props.active) {
            this.props.active(active);
        }
    }

    public render() {

        const active = this.state.active ? { zIndex: 1000 } : {};
        const cssDiv = css.cell + ' ' +
            (this.props.flex ? css['cell_' + this.props.flex] : '');
        const cssLabel = css.cell_label + ' '
            + (this.props.type === 'check' ? css.cell_label_check_fake : '');
        let type = this.props.type || 'input';
        if (!controls[type]) {
            console.log('!!! NOT FOUND TYPE ' + type + 'FOR formCell');
            type = 'input';
        }
        const title = this.props.required ? { title: 'Обязательное поле' } : {};
        return (
                <div {...title} {...active} className={cssDiv}>
                    <label className={cssLabel}>
                        {this.props.label}
                        {this.props.required && <i className={css.LabelRequired}>*</i>}
                    </label>
                    {React.createElement(controls[type], this.props)}
                </div>
        );
    }
};

export {  FormCell }
