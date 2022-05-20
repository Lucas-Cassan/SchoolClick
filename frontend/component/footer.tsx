import React, { useEffect, useState } from "react";
import { Alert, Modal, Pressable, View } from "react-native";
import { COLOR } from "../utils/constants";
import RoundButton from "./roundButton";
import { styles } from "../styles/StylesFooter";
import axios from "axios";
import { url } from "../Constant";
import { useSelector } from "react-redux";

export default function Footer({
  handleChoice,
  modal,
}: {
  handleChoice: any;
  modal: any;
}) {
  const [userId, setUserId] = useState<string>();

  // REDUX
  const userReducer = useSelector((state: any) => state.userReducer);

  const handleGetSchool = () => {
    modal(true);
    axios
      .get(`${url}/api/swipe/getSchool/${userId}`)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setUserId(userReducer._id);
  }, [userReducer]);

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
        onPress={handleGetSchool}
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
