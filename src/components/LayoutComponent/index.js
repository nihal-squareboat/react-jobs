import React from "react";
import { Layout } from "antd";
// import NavBarComponent from "./NavBarComponent";
import { Route } from "react-router";

// const { Header } = Layout;

function LayoutComponent({ component: Component, ...rest }) {

    return (
        <>
            <Layout style={{ height: '100%', minHeight: '100vh', }}>
                {/* <Header className="main-header">
                    <NavBarComponent />
                </Header> */}
                <Route {...rest} render={props => (
                    <Component {...props} />
                )} />
            </Layout>
        </>
    )
}

export default LayoutComponent;
