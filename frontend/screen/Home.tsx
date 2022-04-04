import React, { useState } from "react";
import styles from "../styles/Styles";
import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <View style={styles.bodyColor}>
      <View style={styles.viewTop}>
        <Text style={styles.title}>SchoolClick</Text>
      </View>
      <View style={styles.viewBottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.buttonText}>Inscription</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
