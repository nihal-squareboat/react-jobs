import React from "react";
import { Layout } from "antd";
import AppRouter from "./AppRouter";
import "./styles/App.scss";

const { Content } = Layout;
function App() {
  return (
    <Content>
      <AppRouter />
    </Content>
  );
}

export default App;
