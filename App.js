import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import * as Font from 'expo-font'
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    'arial-black-bold': require('./assets/fonts/Arial-Black-Bold.ttf'),
  });
};

export default function App() {

  const [dataLoaded, setDataLoaded] = useState (false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  
  return (
      <LoginScreen />
  );
}

const styles = StyleSheet.create({});
