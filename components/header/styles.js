import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  name: {
    fontFamily: "BoldNun",
    fontSize: 27,
  },
  tagline: {
    fontFamily: "RegularNun",
  },
  icon: {
    position: "relative",
    backgroundColor: "#EAF1FF",
    padding: 10,
    borderRadius: 8,
  },
  dot: {
    position: "absolute",
    bottom: 38,
    left: 38,
    backgroundColor: "#ffc700",

    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
