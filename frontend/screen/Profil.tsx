import React, { useEffect, useState } from "react";
import styles from "../styles/Styles";
import { Ionicons } from "@expo/vector-icons";
import Disconnect from "../component/Disconnect";
import * as ImagePicker from "expo-image-picker";

import { Text, View, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";
import { url } from "../Constant";

const Profil = ({ navigation }: { navigation?: any }) => {
  const [image, setImage] = useState<string | any>(null);
  const [userImage, setUserImage] = useState<string | any>(null);
  const [userId, setUserId] = useState<string | any>(null);

  const userReducer = useSelector((state: any) => state.userReducer);

  useEffect(() => {
    setUserId(userReducer._id);
    if (userReducer.image !== "") {
      setUserImage(userReducer.image);
      setImage("");
    }
  }, [userReducer]);

  console.log(userImage);

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
        setImage(result.uri);
        setUserImage("");

        let name = userReducer.lastName + "-" + userReducer.name;
        const picture: any = { name, type: "image/jpg", uri: result.uri };

        const formData = new FormData();
        formData.append("picture", picture);

        axios.post(
          `${url}/api/user/update-image/${userId}`,
          {
            formData,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            transformRequest: () => {
              return formData;
            },
          },
        );
      }
    });

    // axios.post(
    //   "http://192.168.210.58:5000/api/user/update-image",
    //   {
    //     picture,
    //     userId,
    //   },
    //   {
    //     maxBodyLength: 1000000000,
    //   },
    // );
  };

  return (
    <View style={styles.body}>
      <View style={styles.headerProfil}>
        <View style={styles.headerCircle}></View>
        <TouchableOpacity style={styles.picture} onPress={handleUpdateImage}>
          {image !== "" && (
            <Image source={{ uri: image }} style={styles.picture} />
          )}
          {userImage !== "" && (
            <Image source={{ uri: userImage }} style={styles.picture} />
          )}
        </TouchableOpacity>
        <Text style={styles.titleMin}>
          {userReducer.lastName} {userReducer.name}
        </Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonLeft}>
          <View style={styles.buttonIcon}>
            <Ionicons name="document" size={24} color="#026FFF" />
          </View>
          <Text style={styles.buttonText}>Mon dossier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLeft}>
          <View style={styles.buttonIcon}>
            <Ionicons name="ios-school" size={24} color="#026FFF" />
          </View>
          <Text style={styles.buttonText}>Mes écoles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLeft}>
          <View style={styles.buttonIcon}>
            <Ionicons name="settings-sharp" size={24} color="#026FFF" />
          </View>
          <Text style={styles.buttonText}>Mon compte</Text>
        </TouchableOpacity>
        <Disconnect />
      </View>
    </View>
  );
};

export default Profil;
