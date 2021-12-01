import React from "react";
import { View, Text, TextInput, ImageBackground } from "react-native";
import { styles } from "./styles";
import { useFonts } from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import Hero from "../hero";
import AppLoading from "expo-app-loading";

function Display() {
  const [loaded] = useFonts({
    RegularNun: require("../../assets/fonts/Nunito-Regular.ttf"),
    BoldNun: require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.search}>
          <TextInput style={styles.input} placeholder="Search for courses" />
          <FontAwesome name={"search"} size={20} />
        </View>

        <View style={styles.filter}>
          <FontAwesome name={"filter"} size={20} />
        </View>
      </View>

      <Hero />
    </View>
  );
}

export default Display;
