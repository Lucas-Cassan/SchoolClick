import React, { useCallback, useRef } from 'react';
import { Animated, TouchableWithoutFeedback} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {styles} from '../styles/StylesRoundButton';

export default function Footer({ name, size, color, onPress }: {name?: any, size?: number, color?: string, onPress?: any }){

    const scale = useRef(new Animated.Value(1)).current;

    const animatedScale = useCallback((newValue) => {
        Animated.spring(scale, {
            toValue: newValue,
            friction: 4,
            useNativeDriver: true,
        }).start()
    }, [scale])

    return (
        <TouchableWithoutFeedback onPressIn={() => animatedScale(0.8)} delayPressIn={0} 
            onPressOut={() => 
                {animatedScale(1);
                onPress();}
            } delayPressOut={110}>
            <Animated.View style={[styles.container, { transform: [{scale}] }]}>
                <FontAwesome name={name} size={size} color={color}/>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}