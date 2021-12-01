import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },

  courseContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },

  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  seeAll: {
    color: "#ccc",
    fontFamily: "RegularNun",
  },

  // Styling for the image and courses
  itemContent: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#EAF1FF",
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: "#ccc",
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      x: 2.0,
      y: 2.0,
    },
  },
  image: {
    width: 100,
    height: 120,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  courseDetails: {
    width: "60%",
    position: "relative",
  },

  courseTitle: {
    color: "#293559",
    fontFamily: "RegularNun",
    fontSize: 20,
  },

  courseViews: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 30,
    marginVertical: 10,
  },

  star: {
    flexDirection: "row",
  },

  price: {
    fontSize: 24,
    fontFamily: "BoldNun",
    left: 120,
  },
});
