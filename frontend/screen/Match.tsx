import React, { useState, useRef, useCallback, useEffect } from "react";
import styles from "../styles/Styles";
import stylesHome from "../styles/StylesHome";
import Footer from "../component/Footer";
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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { url } from "../Constant";
import { getListSchool } from "../redux/action/user.action";

interface SchoolProps {
  name: string;
  source: string;
  _id: number;
}

const Home = ({ navigation }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const [loadingSchool, setLoadingSchool] = useState(true);
  const [arraySchool, setArraySchool] = useState<any[]>([]);

  // Redux
  const dispatch = useDispatch<any>();
  const userReducer = useSelector((state: any) => state.userReducer);
  const schoolReducer = useSelector((state: any) => state.schoolReducer);

  const swipe = useRef(new Animated.ValueXY()).current;
  const tiltSign = useRef(new Animated.Value(1)).current;

  const removeTopCard = useCallback(() => {
    setArraySchool((oldValue) => oldValue.slice(1));
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

  useEffect(() => {
    if (loadingSchool && userReducer) {
      console.log(userReducer);

      dispatch(getListSchool(userReducer._id));
      setTimeout(() => {
        setLoadingSchool(false);
      }, 1000);
    }
  }, [userReducer, loadingSchool]);

  useEffect(() => {
    if (schoolReducer.length > 0) {
      setArraySchool(schoolReducer);
    }
  }, [schoolReducer]);

  return (
    <View style={styles.bodyCenter}>
      {!loadingSchool &&
        arraySchool.length > 0 &&
        arraySchool
          .map((obj: SchoolProps, index: number) => {
            //console.log(obj);

            const isFirst = index === 0;
            const dragHandlers = isFirst ? panResponder.panHandlers : {};
            return (
              <Card
                modal={setModalVisible}
                key={obj._id}
                name={obj.name}
                source={obj.source}
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
            <View></View>
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
