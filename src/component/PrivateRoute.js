import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../util';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {

    console.log(' PrivateRoute')
    console.log(component, 'component', auth, 'auth')
    return (
        <Route
            {...rest}
            render={props => isAuthenticated(auth) ? (<Component{...props} />) : (<Redirect to="/login" />)
            } />
    )
};

PrivateRoute.propsTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
