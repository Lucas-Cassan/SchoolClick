import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Styles";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { CheckBox } from "react-native-elements";
import * as SecureStore from "expo-secure-store";
import { UidContext } from "../component/AppContext";
import { url } from "../Constant";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/action/user.action";

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

  const auth = useContext(UidContext);
  const dispatch = useDispatch<any>();

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
    axios
      .post(`${url}/api/user/signup`, {
        email,
        password,

        name,
        lastName,
        // dateOfBirth,
        dev: devCheck,
        marketing: marketingCheck,
      })
      .then(async (res) => {
        if (res.data === "Email déja utilisé !") {
          setScreen3Error(res.data);
        } else {
          setScreen3Error("");
          setValidated(true);
          await SecureStore.setItemAsync("token", res.data.token);
          await SecureStore.setItemAsync("user", res.data.userId);
          auth.connect(res.data);
          dispatch(getUser(res.data.userId));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.body}>
      {screen1 && (
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: "center" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView centerContent={true} style={{ flex: 1 }}>
            <View style={styles.viewBody}>
              <View style={styles.inputBox}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Entrez votre email"
                  onChangeText={(text) => setEmail(text)}
                  defaultValue={email}
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
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.inputBox}>
                <Text style={styles.label}>Confirmer mot de passe</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Entrez votre mot de passe"
                  onChangeText={(text) => setConfirmPassword(text)}
                  defaultValue={confirmPassword}
                  secureTextEntry
                  autoCapitalize="none"
                />
              </View>
            </View>
          </ScrollView>
          <View style={styles.viewBottom}>
            <View style={styles.errorBox}>
              {screen1Error !== "" && (
                <Text style={styles.error}>{screen1Error}</Text>
              )}
            </View>
            <TouchableOpacity style={styles.button} onPress={handleScreen2}>
              <Text style={styles.buttonText}>Suivant</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}

      {screen2 && (
        <KeyboardAvoidingView
          style={{ flex: 1, justifyContent: "center" }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView centerContent={true} style={{ flex: 1 }}>
            <View style={styles.viewBodyLarge}>
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
            </View>
          </ScrollView>
          <View style={styles.viewBottomLarge}>
            <TouchableOpacity style={styles.button} onPress={handleScreen3}>
              <Text style={styles.buttonText}>Suivant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleScreen1}>
              <Text style={styles.buttonText}>Retour</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
      {screen3 && (
        <View>
          <View style={styles.viewBodyLarge}>
            <Text style={styles.titleMin}>
              Selectionnez vos centres d'intérêts
            </Text>
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
            <View style={styles.errorBox}>
              {validated && (
                <Text style={styles.validate}>Utilisateur créer !</Text>
              )}
            </View>
            {screen3Error !== "" && (
              <View>
                <Text style={styles.error}>{screen3Error}</Text>
              </View>
            )}
          </View>
          <View style={styles.viewBottomLarge}>
            <TouchableOpacity style={styles.button} onPress={CreateNewAccount}>
              <Text style={styles.buttonText}>S'inscire</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleScreen2}>
              <Text style={styles.buttonText}>Retour</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Signup;
