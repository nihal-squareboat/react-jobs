import React, { Component } from 'react';
import { PageTitle } from '../PageTitle';
import "./styles.scss";
import { Button } from 'antd';
import { ROUTES } from '../../constants';
import { Link } from 'react-router-dom';

class ErrorComponent extends Component {
  render() {
    return (
      <>
        <PageTitle title={this.props.pageTitle} />
        <div className="error-page-style">
          <div className="title3">Oops...</div>
          <div className="title1 xl">{this.props.errorTitle}</div>
          <div className="title2 mt--10 mb--40">{this.props.errorMessage}</div>
          <Link to={ROUTES.DASHBOARD}>
            <Button type="primary">
              Home
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export default ErrorComponent;