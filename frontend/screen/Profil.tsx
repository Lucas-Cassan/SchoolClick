import React, { useState } from "react";
import styles from "../styles/Styles";
import { Ionicons } from "@expo/vector-icons";
import Disconnect from "../component/Disconnect";

import {
  Text,
  View,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";

const Profil = ({ navigation }: any) => {
  return (
    <View style={styles.body}>
      <View style={styles.headerProfil}>
        <View style={styles.headerCircle}></View>
        <View style={styles.picture}></View>
        <Text style={styles.titleMin}>Nom Prénom</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => navigation.navigate("Signup")}
        >
          <View style={styles.buttonIcon}>
            <Ionicons name="document" size={24} color="#026FFF" />
          </View>
          <Text style={styles.buttonText}>Mon dossier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => navigation.navigate("Signup")}
        >
          <View style={styles.buttonIcon}>
            <Ionicons name="ios-school" size={24} color="#026FFF" />
          </View>
          <Text style={styles.buttonText}>Mes écoles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => navigation.navigate("Signup")}
        >
          <View style={styles.buttonIcon}>
            <Ionicons name="settings-sharp" size={24} color="#026FFF" />
          </View>
          <Text style={styles.buttonText}>Mon compte</Text>
        </TouchableOpacity>
        <Disconnect />
      </View>
    </View>
  );
};

export default Profil;
