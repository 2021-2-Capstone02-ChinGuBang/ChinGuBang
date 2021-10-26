import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,StyleSheet, Text, View, Image } from 'react-native';

export default function OptionButton({content,img}) {
    const colours = ['#D84315', '#C4C4C4'];
    let i = 1;
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount+i);
  return (
    <View style = {styles.container}>
      <TouchableOpacity style = {[styles.button,{borderColor:colours[count], borderWidth:1}]} onpress={onPress}>
        <Image style={styles.image} source={img} ></Image>
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
    flexDirection:"row",
  },
  image:{
    margin:15,
    flex:1,
    resizeMode:"stretch"
  },
  text : {
    color:"#000",
    fontWeight:"500",
    fontSize:15,
    flex:4,
  }
})