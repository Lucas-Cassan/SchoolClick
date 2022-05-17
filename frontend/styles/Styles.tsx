import { hide } from "expo-splash-screen";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  //Body
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F5F5FA",
  },
  bodyCenter: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F5F5FA",
  },
  bodyColor: {
    height: "100%",
    width: "100%",
    backgroundColor: "#026fff",
  },
  container: {},

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
    // elevation: 5,
  },
  titleMin: {
    marginVertical: 20,
    fontFamily: "Poppins-Bold",
    fontWeight: "bold",
    fontSize: 18,
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
    // elevation: 5,
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
  buttonLeft: {
    borderRadius: 15,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // elevation: 5,
    width: "90%",
    height: 55,
    marginVertical: "2%",
    marginHorizontal: "5%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonIcon: {
    marginHorizontal: 15,
  },

  //Checkbox

  //View absolute
  viewBottomAbsolue: {
    position: "absolute",
    bottom: "8%",
    width: "100%",
  },
  viewBottom: {
    position: "relative",
    width: "100%",
    height: "15%",
  },
  viewBottomLarge: {
    width: "100%",
    height: "20%",
  },
  viewBody: {
    width: "100%",
    height: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  viewBodyLarge: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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

  //Error
  errorBox: {
    position: "absolute",
    top: -40,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    color: "#FC6A6A",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
  validate: {
    color: "#80FC6A",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
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
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    fontFamily: "Poppins-Regular",
    borderRadius: 10,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // elevation: 5,
    width: "100%",
    height: 50,
    paddingHorizontal: "5%",
    marginVertical: "2%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  //PROFIL
  picture: {
    marginTop: 5,
    width: 125,
    height: 125,
    borderRadius: 100,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    // elevation: 5,
  },
  headerProfil: {
    overflow: "hidden",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  headerCircle: {
    top: -420,
    position: "absolute",
    width: "100%",
    height: 500,
    backgroundColor: "#FCD36A",
    borderRadius: 1000,
    transform: [{ scaleX: 2 }],
  },
});

export default styles;
