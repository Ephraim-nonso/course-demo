import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  displayContainer: {
    paddingTop: 20,
  },

  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },

  displayContent: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  displayTitle: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "BoldNun",
  },

  subTitle: {
    color: "#fff",
    fontFamily: "RegularNun",
    marginLeft: 60,
  },

  countDown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  count: {
    backgroundColor: "#fff",
    fontFamily: "RegularNun",
    padding: 5,
    margin: 3,
    borderRadius: 10,
  },

  sign: {
    color: "#fff",
    fontFamily: "RegularNun",
  },
});
