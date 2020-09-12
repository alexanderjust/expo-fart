import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MainButton from "../components/MainButton";
import { LinearGradient } from "expo-linear-gradient";

function LoginScreen() {
  return (
    <LinearGradient
      colors={["#98CF4C", "#C2C92C", "#E5C413", "#CDD3D4"]}
      style={styles.gradientScreen}
    >
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/fart-loginScreen.png")}
            resizeMethod="resize"
          />
        </View>
        <View style={styles.loginContainer}>
          <MainButton style={styles.Login}>Be an Official Fartster</MainButton>
          <MainButton style={styles.anonymous}>Silent Fartster</MainButton>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientScreen: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    marginVertical: 30,
    resizeMode: "contain",
  },
  imageContainer: {
    width: "80%",
    height: "70%",
  },
  loginContainer: {
    width: 350,
    bottom: 30,
    marginVertical: 30,
  },
  anonymous: {
    backgroundColor: "#A5A5A5",
    marginVertical: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  Login: {
    marginTop: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default LoginScreen;
