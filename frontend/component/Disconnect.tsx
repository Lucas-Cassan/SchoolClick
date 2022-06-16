import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { UidContext } from "../component/AppContext";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Disconnect = () => {
  const auth = useContext(UidContext);

  const handleDisconnect = () => {
    auth.logout();
  };

  return (
    <>
      <TouchableOpacity style={styles.buttonLeft} onPress={handleDisconnect}>
        <View style={styles.buttonIcon}>
          <MaterialCommunityIcons name="logout" size={24} color="#FC6A6A" />
        </View>
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </>
  );
};

export default Disconnect;
