import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,StyleSheet, Text, View } from 'react-native';


export default function Confirm({content}) {

  return (
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.button}>
        <Text style = {styles.text}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button : {
    width:"100%",
    height:72.5,
    justifyContent: "center",
    marginTop:30,
    alignItems: "center",
    backgroundColor:"#D84315"
  },
  text : {
    color:"#FFF",
    fontWeight:"700",
    fontSize:20,
  }
})