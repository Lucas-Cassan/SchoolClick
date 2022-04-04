import React, { useEffect, useMemo, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import Home from "../screen/Home";
import Match from "../screen/Match";
import { UidContext } from "./AppContext";
import * as SecureStore from "expo-secure-store";

const Route = () => {
  const Stack = createNativeStackNavigator();

  const [auth, setAuth] = useState<boolean>(false);

  const authMemo = useMemo(
    () => ({
      connect: async (data: any) => {
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
    [],
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
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#026fff",
            },
          }}
        />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
          name="Home"
          component={Home}
          options={{
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
