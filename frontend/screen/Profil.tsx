import React from "react";
import styles from "../styles/Styles";
import { Ionicons } from "@expo/vector-icons";
import Disconnect from "../component/Disconnect";

import { Text, View, TouchableOpacity } from "react-native";
import ProfilNavbar from "../component/ProfilNavbar";

const Profil = ({ navigation }: { navigation?: any }) => {
  return (
    <View style={styles.body}>
      <ProfilNavbar />

      <View>
        <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => navigation.navigate("Folder")}
        >
          <View style={styles.buttonIcon}>
            <Ionicons name="document" size={24} color="#026FFF" />
          </View>
          <Text style={styles.buttonText}>Mon dossier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonLeft}>
          <View style={styles.buttonIcon}>
            <Ionicons name="ios-school" size={24} color="#026FFF" />
          </View>
          <Text style={styles.buttonText}>Mes écoles</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => navigation.navigate("Account")}
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
