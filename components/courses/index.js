import React from "react";
import { View } from "react-native";
import Category from "../categories";
import Display from "../display";
import Course from "./Course";

function Courses() {
  return (
    <View>
      <Display />
      <Category />
      <Course />
    </View>
  );
}

export default Courses;
