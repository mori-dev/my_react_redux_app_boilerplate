// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

function mapStateToProps(state: Object): Object {
    return {};
}

function mapDispatchToProps(dispatch: Function): Object {
    return {};
}

class MainContainer extends Component {

    props: {};

    render() {
        const center = { lat: 59.938043, lng: 30.337157 };
        return (
            <div>
                <AppBar title={'Template App'} />
                <h1>HELLO WORLD</h1>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
