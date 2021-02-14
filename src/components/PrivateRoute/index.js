import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {useSelector} from "react-redux";
import LayoutComponent from "../LayoutComponent";

const PrivateRoute = ({component: Component, ...rest}) => {

    const logged_in = useSelector(state => state.auth.isAuthenticated);

    return (
        <Route {...rest} render={props => (
            logged_in
                ? <LayoutComponent component={Component} {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
    )
};

export default withRouter(PrivateRoute);
