import React from "react";
import { StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  //Body
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  bodyColor: {
    height: "100%",
    width: "100%",
    backgroundColor: "#026FFF",
  },

  //Title
  title: {
    fontFamily: "Poppins-Bold",
    fontWeight: "bold",
    fontSize: 44,
    color: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },

  //Button
  button: {
    borderRadius: 15,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    width: "90%",
    height: 55,
    marginVertical: "2%",
    marginHorizontal: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontFamily: "Poppins-Bold",
    fontWeight: "bold",
    fontSize: 20,
  },

  //View absolute
  viewBottom: {
    position: "absolute",
    bottom: "8%",
    width: "100%",
  },
  viewTop: {
    position: "absolute",
    top: "6%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  viewHome: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  //View
  view: {
    width: "100%",
  },
  content: {
    marginTop: "50%",
    height: "100%",
  },

  //Input
  inputBox: {
    marginVertical: "3%",
    marginHorizontal: "5%",
    width: "90%",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderRadius: 10,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    width: "100%",
    height: 50,
    paddingHorizontal: "5%",
    marginVertical: "2%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
