import React, { useContext } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { UidContext } from "../component/AppContext";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Input = ({
  placeholder,
  label,
  defaultValue,
  set,
}: {
  placeholder: string;
  label: string;
  defaultValue: string;
  set: string;
}) => {
  return (
    <>
      <View style={styles.inputBox}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          /* onChangeText={(text) => setEmail(text)} */
          defaultValue={defaultValue}
          autoCapitalize="none"
        />
      </View>
    </>
  );
};

export default Input;
