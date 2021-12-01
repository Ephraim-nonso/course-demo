import React from "react";
import { useFonts } from "expo-font";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";

function Category() {
  const [loaded] = useFonts({
    RegularNun: require("../../assets/fonts/Nunito-Regular.ttf"),
    BoldNun: require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Category</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categories}>
          <TouchableOpacity>
            <View style={styles.category}>
              <FontAwesome name={"bell-o"} size={20} color="white" />
              <Text style={styles.categoryTitle}>Programming</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.category, styles.others]}>
              <FontAwesome name={"paint-brush"} size={20} color="#293559" />
              <Text style={[styles.categoryTitle, { color: "#293559" }]}>
                Design
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.category, styles.others]}>
              <FontAwesome name={"bar-chart-o"} size={20} color="#293559" />
              <Text style={[styles.categoryTitle, { color: "#293559" }]}>
                Marketing
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.category, styles.others]}>
              <FontAwesome name={"product-hunt"} size={20} color="#293559" />
              <Text style={[styles.categoryTitle, { color: "#293559" }]}>
                Product Management
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.category, styles.others]}>
              <FontAwesome name={"bar-chart-o"} size={20} color="#293559" />
              <Text style={[styles.categoryTitle, { color: "#293559" }]}>
                UX/UI Design
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={[styles.category, styles.others]}>
              <FontAwesome name={"pencil"} size={20} color="#293559" />
              <Text style={[styles.categoryTitle, { color: "#293559" }]}>
                Writing
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default Category;
