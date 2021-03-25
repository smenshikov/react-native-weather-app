import React, { Component } from "react";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

import { Loading } from "./Loading";

const API_KEY = "f5689f44829f49f2a6df29eccb0db9d5";

export default class extends Component {
  state = {
    isLoading: true,
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );
    console.log("-!-debug-!-", "data", data); // eslint-disable-line
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert("Не могу определить местоположение");
    }
  };

  componentDidMount() {
    this.getLocation();
  }

  render() {
    return this.state.isLoading ? <Loading /> : null;
  }
}
