import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component,isAuthenticated,...rest}) => (
    <Route
    {...rest}
        render={props => !isAuthenticated ? ( <Redirect to='/login' /> ) : (
                    <Component {...props} />
                )
            }
        />
    );

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);