import axios from "axios";
import styles from "../styles/Styles";
import React, { useContext, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as SecureStore from "expo-secure-store";
import { UidContext } from "../component/AppContext";

const Login = ({ navigation }: { navigation?: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const auth = useContext(UidContext);

  const handleLogin = async () => {
    const infosUser = {
      password: password,
      email: email,
    };
    await axios
      .post("http://10.50.37.223:5000/api/user/login", infosUser)
      .then((res) => {
        auth.connect(res.data);
        SecureStore.setItemAsync("token", res.data.token);
      })
      .catch((err) => {
        if (err.response.data.error === "Mot de passe incorrect !") {
          setError(err.response.data.error);
        }
        setPassword("");
        setEmail("");
      });
  };

  return (
    <View style={styles.body}>
      <SafeAreaView>
        <View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Identifiant</Text>
             <TextInput
            style={styles.input}
            placeholder="Entrez votre email"
            onChangeText={(text) => setEmail(text)}
            defaultValue={email}
            onSubmitEditing={handleLogin}
            autoCapitalize="none"
          />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Mot de passe</Text>
              <TextInput
            style={styles.input}
            placeholder="Entrez votre mot de passe"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
            secureTextEntry
            onSubmitEditing={handleLogin}
            autoCapitalize="none"
          />
          </View>
        </View>
        
        {error && <Text>{error}</Text>}
        <View style={styles.viewBottom}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Inscription</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
