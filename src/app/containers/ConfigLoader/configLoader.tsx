import * as React from 'react';
import { getRoute } from 'lib/path';
import { Loading } from 'ui';

function Loader(Component) {

    class Wrapper extends React.Component<any, any>  {

        private isLoading = false;
        private hash = '';

        private loadConfig() {
            const route = getRoute();
            if (this.hash === route.hash) {
                this.isLoading = false;
                return;
            }
            this.hash = route.hash;
            this.props.actions.setConfig(null);
            this.props.actions.setData(null);
            this.props.actions.loadConfig(route);
            this.isLoading = true;
        }

        public componentWillReceiveProps() {
            this.loadConfig();
        }

        public componentWillMount() {
            this.loadConfig();
        }

        public render() {
            if  (!this.props.config || !this.props.config.config || this.isLoading) {
                return <Loading />;
            }
            return <Component {...this.props}/>;
        }
    }

    return Wrapper;

};

export default Loader;
