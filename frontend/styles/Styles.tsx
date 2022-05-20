import { hide } from "expo-splash-screen";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { withTheme } from "react-native-elements";
import { CARD } from "../utils/constants";

const styles = StyleSheet.create({
  //Body
  body: {
    height: "100%",
    width: "100%",
    backgroundColor: "#F5F5FA",
  },
  bodyCenter: {
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "#F5F5FA",
  },
  bodyColor: {
    height: "100%",
    width: "100%",
    backgroundColor: "#026fff",
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
  buttonTextWhite: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonClose: {
    backgroundColor: "#026fff",
    fontFamily: "Poppins-Bold",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    width: "100%",
    height: 55,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 25,
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

  //Invisible
  invisible: {},

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
  profilePicture: {
    marginTop: 5,
    width: 125,
    height: 125,
    borderRadius: 100,
    backgroundColor: "white",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 2,
  },
  picture: {
    marginTop: 5,
    width: 125,
    height: 125,
    borderRadius: 100,
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

  container: {
    position: "absolute",
  },
  image: {
    width: CARD.WIDTH,
    height: CARD.HEIGHT,
    borderRadius: CARD.BORDER_RADIUS,
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 0,
    borderRadius: CARD.BORDER_RADIUS,
  },
  name: {
    position: "absolute",
    bottom: 22,
    left: 22,
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
  },
  choiceContainer: {
    position: "absolute",
    top: 100,
  },
  likeContainer: {
    left: 45,
    transform: [{ rotate: "-30deg" }],
  },
  nopeContainer: {
    right: 45,
    transform: [{ rotate: "30deg" }],
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 25,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    padding: 20,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;
