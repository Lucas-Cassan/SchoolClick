import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useState } from "react";
import {
  Text,
  Alert,
  Animated,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Choice from "./Choice";
import styles from "../styles/Styles";
import { ACTION_OFFSET } from "../utils/constants";

export default function Card({
  modal,
  name,
  source,
  infos,
  isFirst,
  swipe,
  tiltSign,
  ...rest
}: {
  modal: any;
  name?: any;
  source?: any;
  infos?: any;
  swipe?: any;
  isFirst?: boolean;
  tiltSign?: any;
}) {
  const [popup, setPopup] = useState<any>();

  const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
    inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
    outputRange: ["8deg", "0deg", "-8deg"],
  });

  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, ACTION_OFFSET],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const nopeOpacity = swipe.x.interpolate({
    inputRange: [-ACTION_OFFSET, -10],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const animatedCardStyle = {
    transform: [...swipe.getTranslateTransform(), { rotate }],
  };

  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.likeContainer,
            { opacity: likeOpacity },
          ]}
        >
          <Choice type="Like" />
        </Animated.View>
        <Animated.View
          style={[
            styles.choiceContainer,
            styles.nopeContainer,
            { opacity: nopeOpacity },
          ]}
        >
          <Choice type="Nope" />
        </Animated.View>
      </>
    );
  }, [likeOpacity, nopeOpacity]);

  return (
    <>
      {popup ? (
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setPopup(!popup);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.titleMin}>Plus d'information</Text>
                <View>
                  <Text>{infos}</Text>
                </View>
                <TouchableOpacity
                  style={styles.buttonClose}
                  onPress={() => setPopup(!popup)}
                >
                  <Text style={styles.buttonTextWhite}>FERMER</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      ) : (
        <Animated.View
          style={[styles.container, isFirst && animatedCardStyle]}
          {...rest}
        >
          <Pressable onPress={() => setPopup(true)}>
            <Image
              source={{ uri: source }}
              style={styles.image}
              resizeMode="cover"
            />
          </Pressable>
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.9"]}
            style={styles.gradient}
          />
          <Text style={styles.name}>{name}</Text>

          {isFirst && renderChoice()}
        </Animated.View>
      )}
    </>
  );
}
