import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProfilNavbar from "../component/ProfilNavbar";
import styles from "../styles/Styles";
import { url } from "../Constant";
import { getUser } from "../redux/action/user.action";

const Account = () => {
  const [userId, setUserId] = useState<string>("");
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [password, setPassword] = useState<string>();

  const userReducer = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch<any>();

  const handleUpdateProfil = () => {
    axios
      .post(`${url}/api/user/update-profil`, {
        userId,
        name,
        lastName,
        password,
      })
      .then(() => {
        dispatch(getUser(userId));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setUserId(userReducer._id);
    setName(userReducer.name);
    setLastName(userReducer.lastName);
  }, []);

  return (
    <View style={styles.body}>
      <ProfilNavbar />
      <KeyboardAvoidingView
        style={{ flex: 1, justifyContent: "center" }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView centerContent={true}>
          <View style={styles.viewBody}>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Nom</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre nom"
                onChangeText={(text) => setLastName(text)}
                defaultValue={lastName}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Prénom</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre prénom"
                onChangeText={(text) => setName(text)}
                defaultValue={name}
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.label}>Nouveau mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre mot de passe"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>
            <View style={styles.viewBottom}>
              {/* <View style={styles.errorBox}>
          {error && <Text style={styles.error}>{error}</Text>}
        </View> */}
              <TouchableOpacity
                style={styles.button}
                onPress={handleUpdateProfil}
              >
                <Text style={styles.buttonText}>Valider</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Account;
