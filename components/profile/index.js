import React from "react";
import { View } from "react-native";
import Courses from "../courses";
import Header from "../header";

function Profile() {
  return (
    <View>
      <Header />
      <Courses />
    </View>
  );
}

export default Profile;
