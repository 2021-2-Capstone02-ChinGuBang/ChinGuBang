import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';


export default function RedButton({content}) {
    const colours = ['#D84315', '#C4C4C4'];
    let i = 1;
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount+i);
  return (
    <View style = {styles.container}>
      <TouchableOpacity style = {[styles.button,{backgroundColor:colours[count]}]} onpress={onPress}>
        <Text style = {styles.text}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button : {
    width:150,
    height:50,
    marginRight:5,
    marginLeft:5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5,
  },
  text : {
    color:"#FFF",
    fontWeight:"700",
    fontSize:20,
  }
})