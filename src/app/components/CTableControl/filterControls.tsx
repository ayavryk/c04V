import * as React from 'react';
import defaultConfig from './filterDefaultConfig';
import { Select, AutoComplete } from 'ui';
import { getRoute } from 'lib/path';
const css = require('./filter.css');

class FilterControls extends React.Component < any, any > {

    public onChange(e) {
        this.props.onChange(e);
    }

    public render() {

        const path = getRoute();
        const func = ($item, key) => {
            const item = Object.assign({}, $item);
            if (item.src && typeof(item.src) === 'string' ) {
                item.src = item.src.replace('{method}', path.method);
            }
            const props =  {
                value: this.props.filter[item.name] || '',
                onChange : this.onChange.bind(this),
            };
            return (
                <div key={key} className={css.cell + ' ' + (item.flex ? css.full : '')}>
                    {item.type === 'select' && <Select  {...item} {...props} />}
                    {item.type !== 'select' && <AutoComplete  {...item} {...props} />}
                </div>
            );
        };
        const config = this.props.config.filters || defaultConfig;
        return (
                 <div className={css.ctrlWrapper}>
                    {config.map(func, this)}
                </div>
        );
    }
}

export default FilterControls;
