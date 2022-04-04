import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import { UidContext } from "../component/AppContext";

const Disconnect = () => {
  const auth = useContext(UidContext);

  const handleDisconnect = () => {
    auth.logout();
  };

  return (
    <View>
      <TouchableOpacity onPress={handleDisconnect}>
        <Text>Deconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Disconnect;
