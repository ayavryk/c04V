import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMessage } from 'redux/modules/rCommand';
import { setData } from 'redux/modules/rTable';
import { getAuth } from 'redux/modules/rAuth';
import { Loading } from 'ui/loading';
import AppServerMessages from 'components/CApp/appServerMessages';
import AppWrapper from 'components/CApp/appWrapper';
declare var appConfig: any;

class App extends React.Component<any, void> {

    public componentWillMount() {
        this.props.actions.getAuth();
    }

    public componentWillReceiveProps(nextProps) {
        // отправляем неавторизованного пользователя на авторизацию
        // TODO перенести сюда авторизацию
        if (nextProps.message.command === 'auth') {
             location.href = appConfig.auth.logon;
        }
    }
    public render()  {
        if (this.props.auth.user === '') {
            return <Loading />;
        }
        return (
            <AppWrapper isChanged = {this.props.isChanged}>
                <AppServerMessages actions={this.props.actions} message={this.props.message} />
                {this.props.children}
            </AppWrapper>
        );
    };
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        command: state.command,
        message: state.message,
        isChanged: !!state.edit.isChanged,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ setMessage, setData, getAuth }, dispatch),
    };
}

const exportApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export {exportApp as App};
