import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "RegularNun",
  },
  categories: {
    flexDirection: "row",
    marginTop: 10,
  },
  category: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#293559",
    marginRight: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
  },

  others: {
    backgroundColor: "#FFF",
    borderStyle: "solid",
    borderWidth: 2,
  },

  categoryTitle: {
    color: "#fff",
    marginLeft: 10,
  },
});
