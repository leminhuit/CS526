import React from "react";
import react from "react";
import { StyleSheet, Text, View } from "react-native";
import CalculatorScreen from "./screens/CalculatorScreen";

export default class App extends React.Component {
  render() {
    return <CalculatorScreen />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
