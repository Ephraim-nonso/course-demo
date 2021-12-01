import React from "react";
import { useFonts } from "expo-font";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { AllCourses } from "./Allcourses";
import Item from "./Item";
import { styles } from "./styles";
import AppLoading from "expo-app-loading";

function Course() {
  const [loaded] = useFonts({
    RegularNun: require("../../assets/fonts/Nunito-Regular.ttf"),
    BoldNun: require("../../assets/fonts/Nunito-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.courseContainer}>
      <View style={styles.content}>
        <Text style={styles.courseTitle}>Featured Courses</Text>

        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={AllCourses}
        renderItem={({ item }) => <Item course={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Course;
