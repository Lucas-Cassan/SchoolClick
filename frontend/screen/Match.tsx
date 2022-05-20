import React, { useState, useRef, useCallback, useEffect } from "react";
import styles from "../styles/Styles";
import stylesHome from "../styles/StylesHome";
import Footer from "../component/footer";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  PanResponder,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { pic as picArray } from "../utils/data";
import Card from "../component/Card";
import { ACTION_OFFSET, CARD } from "../utils/constants";

const Home = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [pic, setPic] = useState(picArray);
  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!pic.length) {
      setPic(picArray);
    }
  }, [pic.length]);

  const removeTopCard = useCallback(() => {
    setPic((prevState) => prevState.slice(1));
    swipe.setValue({ x: 0, y: 0 });
  }, [swipe]);

  const handleChoice = useCallback(
    (direction) => {
      Animated.timing(swipe.x, {
        toValue: direction * CARD.OUT_OF_SCREEN,
        duration: 100,
        useNativeDriver: true,
      }).start(removeTopCard);
    },
    [removeTopCard, swipe.x]
  );

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, { dx, dy, y0 }) => {
      swipe.setValue({ x: dx, y: dy });
      tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
    },
    onPanResponderRelease: (_, { dx, dy }) => {
      const direction = Math.sign(dx);
      const isActionActive = Math.abs(dy) > ACTION_OFFSET;
      ``;

      if (isActionActive) {
        Animated.timing(swipe, {
          duration: 200,
          toValue: {
            x: direction * 500,
            y: dy,
          },
          useNativeDriver: true,
        }).start(removeTopCard);
      } else {
        Animated.spring(swipe, {
          toValue: {
            x: 0,
            y: 0,
          },
          useNativeDriver: true,
          friction: 5,
        }).start();
      }
    },
  });

  return (
    <View style={styles.bodyCenter}>
      {pic
        .map(({ name, source }, index) => {
          const isFirst = index === 0;
          const dragHandlers = isFirst ? panResponder.panHandlers : {};
          return (
            <Card
              modal={setModalVisible}
              key={name}
              name={name}
              source={source}
              isFirst={isFirst}
              swipe={swipe}
              tiltSign={tiltSign}
              {...dragHandlers}
            />
          );
        })
        .reverse()}

      <Footer handleChoice={handleChoice} modal={setModalVisible} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titleMin}>Plus d'information</Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.buttonTextWhite}>FERMER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
