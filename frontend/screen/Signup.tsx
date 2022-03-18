import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";

const Signup = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [pseudo, setPseudo] = useState<string | undefined>();

  function CreateNewAccount() {
    const infoUserToCreate = {
      pseudo,
      email,
      password,
    };
    axios
      .post("http://10.50.37.223:5000/api/user/signup", infoUserToCreate)
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <View style={styles.content}>
        <SafeAreaView>
          <Text style={styles.auth}>Espace inscription</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Entrez votre email"
              onChangeText={(text) => setEmail(text)}
              defaultValue={email}
            />
            <TextInput
              style={styles.input}
              placeholder="Entrez votre pseudo"
              onChangeText={(text) => setPseudo(text)}
              defaultValue={pseudo}
            />
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Entrez votre mot de passe"
              onChangeText={(text) => setPassword(text)}
              defaultValue={password}
            />
          </View>

          <Button onPress={CreateNewAccount} title="Créer mon compte" />
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  auth: {
    textAlign: "center",
    fontSize: 28,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  content: {
    marginTop: "50%",
    height: "100%",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
});

export default Signup;
