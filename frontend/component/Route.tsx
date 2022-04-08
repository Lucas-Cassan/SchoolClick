import React, { useEffect, useMemo, useState } from "react";
import {
  NavigationContainer,
  useNavigationState,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import Home from "../screen/Home";
import Profil from "../screen/Profil";
import Match from "../screen/Match";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo, FontAwesome } from "@expo/vector-icons";

import { UidContext } from "./AppContext";
import * as SecureStore from "expo-secure-store";
import { Text, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";

const Route = ({ navigation }: any) => {
  const Stack = createNativeStackNavigator();

  const [auth, setAuth] = useState<boolean>(false);

  const authMemo = useMemo(
    () => ({
      connect: async (data: any) => {
        console.log(data);

        if (data.token) {
          setAuth(true);
        } else if (data === "token") {
          setAuth(true);
        } else {
          setAuth(false);
        }
      },
      logout: async () => {
        await SecureStore.deleteItemAsync("token");
        setAuth(false);
      },
    }),
    []
  );

  useEffect(() => {
    SecureStore.getItemAsync("token")
      .then((res) => {
        setAuth(res !== null);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <UidContext.Provider value={authMemo}>
      <NavigationContainer>
        {auth ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Match"
              component={Match}
              options={({ navigation, route }) => ({
                title: "Still",
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: "#F5F5FA",
                },
                headerTintColor: "#026fff",
                headerTitleStyle: {
                  fontFamily: "Poppins-Bold",
                  fontSize: 25,
                  fontWeight: "bold",
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Profil")}
                  >
                    <FontAwesome name="user" size={26} color="black" />
                  </TouchableOpacity>
                ),
              })}
            />
            <Stack.Screen
              name="Profil"
              component={Profil}
              options={({ navigation }) => ({
                title: "",
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: "#FCD36A",
                },
                headerHideShadow: true,
                headerTitleStyle: {
                  fontFamily: "Poppins-Bold",
                  fontSize: 25,
                  fontWeight: "bold",
                },
                headerLeft: () => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Match")}
                  >
                    <Entypo name="home" size={26} color="#9A8142" />
                  </TouchableOpacity>
                ),
              })}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShadowVisible: false,
                title: "",
                headerStyle: {
                  backgroundColor: "#026fff",
                },
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                title: "Connexion",
                headerShadowVisible: false,
                headerStyle: {
                  backgroundColor: "#F5F5FA",
                },
                headerTintColor: "#026fff",
                headerTitleStyle: {
                  fontFamily: "Poppins-Bold",
                  fontSize: 25,
                  fontWeight: "bold",
                },
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShadowVisible: false,
                title: "Inscription",
                headerStyle: {
                  backgroundColor: "#F5F5FA",
                },
                headerTintColor: "#026fff",
                headerTitleStyle: {
                  fontFamily: "Poppins-Bold",
                  fontSize: 25,
                  fontWeight: "bold",
                },
              }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </UidContext.Provider>
  );
};

export default Route;
