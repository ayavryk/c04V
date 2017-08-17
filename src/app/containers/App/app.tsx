import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setMessage } from 'redux/modules/rCommand';
import { setData } from 'redux/modules/rTable';
import AppServerMessages from 'components/CApp/appServerMessages';
import AppWrapper from 'components/CApp/appWrapper';

class App extends React.Component<any, void> {
    public render() {
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
        message: state.message,
        isChanged: !!state.edit.isChanged,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ setMessage, setData }, dispatch),
    };
}

const exportApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export {exportApp as App};
