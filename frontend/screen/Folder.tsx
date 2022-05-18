import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProfilNavbar from "../component/ProfilNavbar";
import styles from "../styles/Styles";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Folder = () => {
  const handleUpdateImage = async () => {
    // No permissions request is necessary for launching the image library
    await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: false,
    }).then((result) => {
      if (!result.cancelled) {
        console.log(result.uri);
      }
    });
  };
  return (
    <View style={styles.body}>
      <ProfilNavbar />
      <TouchableOpacity style={styles.buttonLeft} onPress={handleUpdateImage}>
        <View style={styles.buttonIcon}>
          <MaterialCommunityIcons
            name="file-account"
            size={24}
            color="#026FFF"
          />
        </View>
        <Text style={styles.buttonText}>Mon CV</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Folder;
