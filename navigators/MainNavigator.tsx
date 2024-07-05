import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import LoginScreen from '../screens/LoginScreen';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Screen1" component={Screen1} />
          <Tab.Screen name="Screen2" component={Screen2} />
          <Tab.Screen name="Screen3" component={Screen3} />
          <Tab.Screen name="Screen4 " component={Screen4} />
      </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
function MyStack() {
  return (
      <Stack.Navigator >
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
          <Stack.Screen name="Scree1" component={Screen1} />
          <Stack.Screen name="BottomTap" component={MyTabs}options={{headerShown:false}} />
      </Stack.Navigator>
  );
}

export default function Navegador() {
  return (
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  
})