import React from "react";
import { Layout } from "antd";
import { Route } from "react-router";

function GuestLayoutComponent({ component: Component, ...rest }) {

    return (
        <>
            <Layout style={{ height: '100%', minHeight: '100vh', }}>
                <Route {...rest} render={props => (
                    <Component {...props} />
                )} />
            </Layout>
        </>
    )
}

export default GuestLayoutComponent;
