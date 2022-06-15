import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback } from "react";
import { Animated, Image, Pressable, Text, View } from "react-native";
import Choice from "./Choice";
import styles from "../styles/Styles";
import { ACTION_OFFSET } from "../utils/constants";
import { url } from "../Constant";

export default function Card({
  modal,
  name,
  source,
  isFirst,
  swipe,
  tiltSign,
  ...rest
}: {
  modal: any;
  name?: any;
  source?: any;
  swipe?: any;
  isFirst?: boolean;
  tiltSign?: any;
}) {
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
    <Animated.View
      style={[styles.container, isFirst && animatedCardStyle]}
      {...rest}
    >
      <Pressable onPress={() => modal(true)}>
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
  );
}
