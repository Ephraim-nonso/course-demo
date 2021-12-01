import React from "react";
import { View, ImageBackground, Text } from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function Hero() {
  const [loaded] = useFonts({
    RegularNun: require("../../assets/fonts/Nunito-Regular.ttf"),
    BoldNun: require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.displayContainer}>
      <ImageBackground
        source={require("../../assets/images/4.jpg")}
        style={[styles.image]}
        imageStyle={{ borderRadius: 15 }}
      >
        <View style={styles.displayContent}>
          <View>
            <Text style={styles.displayTitle}>Cyber Hacking Class</Text>
            <Text style={styles.subTitle}>Coming Soon</Text>
            <View>
              <View style={styles.countDown}>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.count}>0</Text>
                    <Text style={styles.count}>7</Text>
                  </View>
                  <Text style={{ color: "#fff", marginLeft: 10 }}>Days</Text>
                </View>
                <Text style={styles.sign}>:</Text>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.count}>1</Text>
                    <Text style={styles.count}>5</Text>
                  </View>

                  <Text style={{ color: "#fff", marginLeft: 7 }}>Hours</Text>
                </View>
                <Text style={styles.sign}>:</Text>
                <View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.count}>2</Text>
                    <Text style={styles.count}>9</Text>
                  </View>

                  <Text style={{ color: "#fff", marginLeft: 3 }}>Minutes</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Hero;
