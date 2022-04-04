import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import { CheckBox } from "react-native-elements";

const Signup = ({ navigation }: { navigation?: any }) => {
  // Form
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>();

  const [name, setName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();

  // const [dateOfBirth, setDateOfBirth] = useState<string | undefined>();

  // Check
  const [devCheck, setDevCheck] = useState<boolean>(false);
  const [marketingCheck, setMarketingCheck] = useState<boolean>(false);

  // Screen
  const [screen1, setScreen1] = useState<boolean | undefined>(true);
  const [screen2, setScreen2] = useState<boolean | undefined>(false);
  const [screen3, setScreen3] = useState<boolean | undefined>(false);

  // Error
  const [validated, setValidated] = useState<boolean>(false);
  const [screen1Error, setScreen1Error] = useState<string | undefined>();
  const [screen3Error, setScreen3Error] = useState<string | undefined>();

  const handleScreen1 = () => {
    setScreen1(true);
    setScreen2(false);
    setScreen3(false);
    setScreen1Error("");
  };
  const handleScreen2 = () => {
    if (email === undefined) {
      setScreen1Error("Email non valide !");
    } else if (password !== undefined && password === confirmPassword) {
      setScreen1(false);
      setScreen2(true);
      setScreen3(false);
      setScreen1Error("");
      setScreen3Error("");
    } else {
      setScreen1Error("Mot de passe non identique !");
    }
  };
  const handleScreen3 = () => {
    setScreen1(false);
    setScreen2(false);
    setScreen3(true);
  };

  const CreateNewAccount = () => {
    const infoUserToCreate = {
      email,
      password,

      name,
      lastName,
      // dateOfBirth,

      dev: devCheck,
      marketing: marketingCheck,
    };

    axios
      .post("http://10.50.37.223:5000/api/user/signup", infoUserToCreate)
      .then(() => {
        setValidated(true);
      })
      .catch((err) => {
        setScreen3Error(err.response.data.error);
      });
  };

  // useEffect(() => {
  //   if (validated) {
  //     setTimeout(() => {
  //       navigation.navigate("Match");
  //     }, 2000);
  //   }
  // }, [validated]);

  return (
    <>
      <View style={styles.content}>
        <SafeAreaView>
          <Text style={styles.auth}>Espace inscription</Text>
          {screen1 && (
            <View>
              <Text>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre email"
                onChangeText={(text) => setEmail(text)}
                defaultValue={email}
                autoCapitalize="none"
              />
              <Text>Mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre email"
                onChangeText={(text) => setPassword(text)}
                defaultValue={password}
                secureTextEntry
                autoCapitalize="none"
              />
              <Text>Confirmer mot de passe</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre nom"
                onChangeText={(text) => setConfirmPassword(text)}
                defaultValue={confirmPassword}
                secureTextEntry
                autoCapitalize="none"
              />
              <Button onPress={handleScreen2} title="Suivant"></Button>
              {screen1Error !== "" && <Text>{screen1Error}</Text>}
            </View>
          )}
          {screen2 && (
            <View>
              <Text>Prenom</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre mot de passe"
                onChangeText={(text) => setName(text)}
                defaultValue={name}
                autoCapitalize="none"
              />
              <Text>Nom</Text>
              <TextInput
                style={styles.input}
                placeholder="Entrez votre mot de passe"
                onChangeText={(text) => setLastName(text)}
                defaultValue={lastName}
                autoCapitalize="none"
              />
              <Button onPress={handleScreen3} title="Suivant"></Button>
              <Button onPress={handleScreen1} title="Retour"></Button>
            </View>
          )}
          {screen3 && (
            <View>
              <Text>Selectionnez vos centres d'intérêts</Text>
              <CheckBox
                title="Dev"
                checked={devCheck}
                onPress={() => setDevCheck(!devCheck)}
              />
              <CheckBox
                title="Marketing"
                checked={marketingCheck}
                onPress={() => setMarketingCheck(!marketingCheck)}
              />
              <Button onPress={CreateNewAccount} title="Créer mon compte" />
              <Button onPress={handleScreen2} title="Retour"></Button>
              {validated && <Text>Utilisateur créer !</Text>}
              {screen3Error !== "" && <Text>{screen3Error}</Text>}
            </View>
          )}
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
