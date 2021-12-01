import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    backgroundColor: "#EAF1FF",
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  filter: {
    backgroundColor: "#EAF1FF",
    paddingVertical: 9,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});
