import React from "react";
import { Button, Text, View } from "react-native";

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text>SchoolClick</Text>
      <View>
        <Button
          onPress={() => navigation.navigate("Login")}
          title="Connexion"
        />
        <Button
          onPress={() => navigation.navigate("Signup")}
          title="Inscription"
        />
      </View>
    </View>
  );
};

export default Home;
