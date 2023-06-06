import { firebase } from "@react-native-firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { AppRegistry } from "react-native";
import ClassDetailsScreen from "../screens/class-details.screen";
import MainScreen from "./src/screens/main.screen";
const firebaseConfig = {
  apiKey: "AIzaSyBeFzayi_niCDY3WqBXZYqR_Pyk0osl868",
  authDomain: "customer-management-6f127.firebaseapp.com",
  projectId: "customer-management-6f127",
  storageBucket: "customer-management-6f127.appspot.com",
  messagingSenderId: "925942846141",
  appId: "1:925942846141:web:0d403698ab478636a21dd4",
  measurementId: "G-F8JM7NRY1N",
};

firebase.initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="ClassDetails" component={ClassDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("GoFit", () => App);

export default App;
