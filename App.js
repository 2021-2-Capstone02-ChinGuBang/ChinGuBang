import * as React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import Home from './assets/CapstoneHome.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={{
          marginTop:43,
          marginLeft:15,
          flex:1,
          width:40,
          height:40,
        }}source={Home}></Image>
        <Text style={{
          marginTop:60,
          marginLeft:10,
          color:"#000",
          fontSize:20,
          fontWeight:"700",
          flex:6,
        }}>친구방</Text>
      </View>
      <MapView style={styles.map} 
      provider={PROVIDER_GOOGLE} 
      initialRegion={{
        latitude: 37.50519,
        longitude: 126.95709,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <Marker
        coordinate={{latitude: 37.50519, longitude: 126.95709}}
        title="this is a marker"
        description="this is a marker example"
      />
    </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',

  },
  top:{
    backgroundColor: '#fff',
    width:"100%",
    height:90,
    flexDirection:"row",

  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});