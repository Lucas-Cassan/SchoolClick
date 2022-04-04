import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { UidContext } from "../component/AppContext";
import styles from "../styles/Styles";

const Disconnect = () => {
  const auth = useContext(UidContext);

  const handleDisconnect = () => {
    auth.logout();
  };

  return (
    <View style={styles.body}>
      <View style={styles.viewBottomAbsolue}>
        <TouchableOpacity style={styles.button} onPress={handleDisconnect}>
          <Text style={styles.buttonText}>Deconnexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Disconnect;
