import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screen/Login";
import Signup from "../screen/Signup";
import Home from "../screen/Home";
import Match from "../screen/Match";

const Route = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

export default Route;
