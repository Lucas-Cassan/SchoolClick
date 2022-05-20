import React from "react";
import { Text, View } from 'react-native';
import stylesChoice from "../styles/StylesChoice";
import { COLOR } from '../utils/constants'

export default function Choice({type}: {type?: string}){

    return (
        <View style={stylesChoice.container}>
            <Text style={stylesChoice.text}>{type}</Text>
        </View>
    )
}