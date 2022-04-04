import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Login = ({ navigation }: { navigation?: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const handleLogin = () => {
    const infosUser = {
      password: password,
      email: email,
    };
    axios
      .post("http://10.50.37.223:5000/api/user/login", infosUser)
      .then(() => {
        navigation.navigate("Match");
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
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.auth}>Espace connexion</Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre email"
            onChangeText={(text) => setEmail(text)}
            defaultValue={email}
            onSubmitEditing={handleLogin}
          />
          <TextInput
            style={styles.input}
            placeholder="Entrez votre mot de passe"
            onChangeText={(text) => setPassword(text)}
            defaultValue={password}
            secureTextEntry
            onSubmitEditing={handleLogin}
          />
        </View>
        {error && <Text>{error}</Text>}
        <Button onPress={handleLogin} title="Se connecter"></Button>

        <Text style={styles.createaccount}>Vous n'avez pas de compte ?</Text>
        <Button
          onPress={() => navigation.navigate("Signup")}
          title="S'inscrire"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: "50%",
    height: "100%",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  auth: {
    textAlign: "center",
    fontSize: 28,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  createaccount: {
    // color: "white",
    paddingTop: 34,
    textAlign: "center",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
});

export default Login;
