const { Dimensions } = require("react-native");

const { width, height } = Dimensions.get("screen");

export const CARD = {
  WIDTH: width * 0.9,
  HEIGHT: height * 0.75,
  BORDER_RADIUS: 20,
  OUT_OF_SCREEN: width + 0.5 * width,
};

export const COLOR: { like: string; nope: string; info: string } = {
  like: "#fcd36a",
  nope: "#ff006f",
  info: "#026fff",
};

export const ACTION_OFFSET = 100;
