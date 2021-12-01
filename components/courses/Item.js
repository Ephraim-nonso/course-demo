import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function Item(props) {
  const { name, likes, price, students, image } = props.course;

  const [loaded] = useFonts({
    RegularNun: require("../../assets/fonts/Nunito-Regular.ttf"),
    BoldNun: require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <View style={styles.itemContent}>
        <View style={styles.image}>
          <ImageBackground
            source={image}
            style={styles.image}
            imageStyle={{ borderRadius: 8 }}
          >
            <FontAwesome name={"play-circle"} size={20} color="white" />
          </ImageBackground>
        </View>

        <View style={styles.courseDetails}>
          <Text style={styles.courseTitle}>{name}</Text>
          <View style={styles.courseViews}>
            <Text>
              <FontAwesome name={"group"} size={15} /> {students} Students
            </Text>

            <Text>
              <FontAwesome name={"heart"} size={15} /> {likes} Likes
            </Text>
          </View>

          <View style={styles.star}>
            <FontAwesome name={"star"} color="#ffc700" />
            <FontAwesome name={"star"} color="#ffc700" />
            <FontAwesome name={"star"} color="#ffc700" />
            <FontAwesome name={"star"} color="#ffc700" />
            <FontAwesome name={"star"} color="#ccc" />
          </View>

          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </View>
  );
}

export default Item;
