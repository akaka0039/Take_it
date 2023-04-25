import Home from "./src/Home/home";
import Set from "./src/Set/index";
import Setting from "./src/Setting/index";
import Game from "./src/Game/index";
import Result from "./src/Result/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SQLite from "expo-sqlite";
import { useState, useEffect } from "react";
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
  const [record, setRecord] = useState();

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `create table if not exists Record (_id integer primary key AUTOINCREMENT, game integer not null, win integer not null, lose integer not null);`
      );
      // tx.executeSql("select * FROM Record", [], (tx, results) => {
      //   const len = results.rows.length;
      //   if (len === 0) {
      //     insertData();
      //   }
      // });
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home">
          {() => <Home db={db} record={record} />}
        </Stack.Screen>
        <Stack.Screen name="Set" component={Set} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Result">{() => <Result db={db} />}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
