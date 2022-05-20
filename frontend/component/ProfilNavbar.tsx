import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Image, Text } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Styles";
import * as ImagePicker from "expo-image-picker";
import { url } from "../Constant";
import axios from "axios";
import { getUser } from "../redux/action/user.action";

function ProfilNavbar() {
  const [image, setImage] = useState<string | any | null>(null);
  const [userId, setUserId] = useState<string | any>(null);

  // Redux
  const userReducer = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch<any>();

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
        let name = userReducer.lastName + "-" + userReducer.name;
        const picture: any = { name, type: "image/jpg", uri: result.uri };

        const formData = new FormData();
        formData.append("picture", picture);

        axios
          .post(
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
            }
          )
          .then((res) => {
            console.log("result from post");
            console.log(res.data);
            setImage(null);
            dispatch(getUser(userId));
          })
          .catch((err) => console.log(err));
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

  useEffect(() => {
    setUserId(userReducer._id);
    if (userReducer.image !== "") {
      setImage(userReducer.image);
    }
  }, [userReducer]);

  return (
    <View style={styles.headerProfil}>
      <View style={styles.headerCircle}></View>
      <TouchableOpacity
        style={!image ? styles.profilePicture : styles.invisible}
        onPress={handleUpdateImage}
      >
        {image && <Image source={{ uri: image }} style={styles.picture} />}
      </TouchableOpacity>
      <Text style={styles.titleMin}>
        {userReducer.lastName} {userReducer.name}
      </Text>
    </View>
  );
}

export default ProfilNavbar;
