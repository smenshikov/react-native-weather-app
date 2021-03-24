import React, { Component } from "react";
import * as Location from "expo-location";

import { Loading } from "./Loading";

export default class extends Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log("-!-debug-!-", location); // eslint-disable-line
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return <Loading />;
  }
}
