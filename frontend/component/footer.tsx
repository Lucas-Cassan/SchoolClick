import React from "react";
import { Alert, Modal, Pressable, View } from "react-native";
import { COLOR } from "../utils/constants";
import RoundButton from "./roundButton";
import { styles } from "../styles/StylesFooter";

export default function Footer({
  handleChoice,
  modal,
}: {
  handleChoice: any;
  modal: any;
}) {
  return (
    <View style={styles.container}>
      <RoundButton
        name="times"
        size={40}
        color={COLOR.nope}
        onPress={() => handleChoice(-1)}
      />
      <RoundButton
        name="info"
        size={30}
        color={COLOR.info}
        onPress={() => modal(true)}
      />
      <RoundButton
        name="heart"
        size={40}
        color={COLOR.like}
        onPress={() => handleChoice(1)}
      />
    </View>
  );
}
