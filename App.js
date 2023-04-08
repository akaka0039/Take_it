import { StyleSheet, Text, View } from "react-native";
import Home from "./src/Home/home";
import Set from "./src/Set/set";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Set" component={Set} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
