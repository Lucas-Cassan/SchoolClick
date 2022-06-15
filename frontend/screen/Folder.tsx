import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProfilNavbar from "../component/ProfilNavbar";
import styles from "../styles/Styles";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { Image } from "react-native-elements";
import { url } from "../Constant";

const Folder = () => {
  const [cv, setCv] = useState<string | any>();
  const [userId, setUserId] = useState<string | any>(null);

  const [showCv, setShowCv] = useState<boolean>(false);

  const userReducer = useSelector((state: any) => state.userReducer);

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
        /* console.log(result.uri); */
        setShowCv(true);
        setCv(result.uri);

        let name = userReducer.lastName + "-" + userReducer.name;
        const picture: any = { name, type: "image/jpg", uri: result.uri };

        const formData = new FormData();
        formData.append("cv", picture);

        axios
          .post(
            `${url}/api/user/update-cv/${userId}`,
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
            }
          )
          .then((res) => {
            console.log("result from post");
            /* console.log(res.data); */
            setCv(null);
            setCv(res.data);
          })
          .catch((err) => console.log(err));
      }
    });
  };

  useEffect(() => {
    setUserId(userReducer._id);
    if (userReducer.CV !== "") {
      setCv(userReducer.CV);
    }
  }, [userReducer]);

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
      <View>
        {showCv ? (
          <>
            <Text onPress={() => setShowCv(false)}>X</Text>
            <Image source={{ uri: cv }} style={styles.picture} />
          </>
        ) : (
          <Text onPress={() => setShowCv(true)}>Voir CV</Text>
        )}
      </View>
    </View>
  );
};

export default Folder;
