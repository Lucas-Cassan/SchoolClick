import axios from "axios";
import styles from "../styles/Styles";
import React, { useContext, useState } from "react";
import {
  SafeAreaView,
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

  const [error, setError] = useState<string | null>(null);

  const auth = useContext(UidContext);

  const handleLogin = async () => {
    const infosUser = {
      password: password,
      email: email,
    };
    await axios
      .post("http://10.50.37.171:5000/api/user/login", infosUser)
      .then((res) => {
        auth.connect(res.data);
        SecureStore.setItemAsync("token", res.data.token);
      })
      .catch((err) => {
        setError("Email ou mot de passe incorrect !");
        setPassword("");
        setEmail("");
      });
  };

  return (
    <View style={styles.body}>
      <SafeAreaView>
        <View style={styles.viewBody}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>E-mail</Text>
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
          <View style={styles.errorBox}>
            {error && <Text style={styles.error}>{error}</Text>}
          </View>
        </View>

        <View style={styles.viewBottom}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Connexion</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
