import React, { Component } from "react";
import Header from "./header/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <Header />;
  }
}
