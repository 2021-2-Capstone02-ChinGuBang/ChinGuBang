import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
//메인에 세팅할 네비게이션 도구들을 가져옵니다.
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator'
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="black" />
      <StackNavigator/>
    </NavigationContainer>);
}

