import Home from "./src/Home/home";
import Set from "./src/Set/index";
import Setting from "./src/Setting/index";
import Game from "./src/Game/index";
import Result from "./src/Result/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";
import { Platform } from "react-native";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }
  const db = SQLite.openDatabase("Record.db");
  return db;
}
const db = openDatabase();

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home">{() => <Home db={db} />}</Stack.Screen>
        <Stack.Screen name="Set" component={Set} />
        <Stack.Screen name="Setting">{() => <Setting db={db} />}</Stack.Screen>
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Result">{() => <Result db={db} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
