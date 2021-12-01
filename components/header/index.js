import React from "react";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./styles.js";

export default function Header() {
  const [loaded] = useFonts({
    RegularNun: require("../../assets/fonts/Nunito-Regular.ttf"),
    BoldNun: require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>Hi, Karen!</Text>
        <Text style={styles.tagline}>Explore new skills with neutron</Text>
      </View>

      <View style={styles.icon}>
        <FontAwesome name={"bell-o"} size={25} />

        <View style={styles.dot}></View>
      </View>
    </View>
  );
}
