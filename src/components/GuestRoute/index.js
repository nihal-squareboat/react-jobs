import React from 'react';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {useSelector} from "react-redux";
import GuestLayoutComponent from "../GuestLayoutComponent";

const GuestRoute = ({component: Component, ...rest}) => {

    const logged_in = useSelector(state => state.auth.isAuthenticated);

    return (
        <Route {...rest} render={props => (
            !logged_in
                ? <GuestLayoutComponent component={Component} {...props} />
                : <Redirect to={{pathname: '/dashboard', state: {from: props.location}}}/>
        )}/>
    )
};

export default withRouter(GuestRoute);
