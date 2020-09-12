import React from "react";
import { StyleSheet, Button, TouchableOpacity, View, Text } from "react-native";
import Colors from '../constants/colors';
import colors from "../constants/colors";

function MainButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={{...styles.button, ...props.style}}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    button:{
        backgroundColor: '#4472C4',
        paddingVertical: 12,
        paddingHorizontal: 30,
        
        

    },
    buttonText:{
        color:'white',
        fontFamily: 'arial-black-bold',
        fontSize: 25,
        
    }
});

export default MainButton;
