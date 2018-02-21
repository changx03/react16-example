import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: '',
  };

  componentDidCatch = (err, info) => {
    this.setState({
      hasError: true,
      errorMessage: err,
    });
  } 

  render() {
    return (
      this.state.hasError ?
        <h1>{this.state.errorMessage}</h1>
        : this.props.children
    );
  }
}
