import {
  StyleSheet,
  View,
  Text,
  Alert,
  Pressable,
  TextInput,
  onChangeText,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import Button from "./Button";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import setImage from "../../assets/image/Game_back.png";

export default function Setting({ db }) {
  const [text, onChangeText] = React.useState("Name");
  const navigation = useNavigation();

  const removeRecordsAlert = () => {
    Alert.alert(
      "Remove all records",
      "Once you delete all records, it cannot be undone",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => clearRecords() },
      ]
    );
  };

  // for developer
  // const dropTable = () => {
  //   Alert.alert(
  //     "Remove all records",
  //     "Once you delete all records, it cannot be undone",
  //     [
  //       {
  //         text: "Cancel",
  //         style: "cancel",
  //       },
  //       {
  //         text: "OK",
  //         onPress: () =>
  //           db.transaction((tx) => {
  //             tx.executeSql(`DROP table Record;`);
  //             // tx.executeSql(
  //             //   `create table if not exists Record (_id integer primary key not null, game integer not null, win integer not null, lose integer not null);`
  //             // );
  //             // tx.executeSql(
  //             //   `insert into Record (_id,game, win,lose) values (?,?,?,?);`,
  //             //   [1, 0, 0, 0]
  //             // );
  //           }),
  //       },
  //     ]
  //   );
  // };

  const clearRecords = () => {
    db.transaction((tx) => {
      tx.executeSql(`DELETE FROM Record;`);
      tx.executeSql(
        `insert into Record (_id,game, win,lose) values (?,?,?,?);`,
        [1, 0, 0, 0]
      );
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={setImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.container}>
            <Text style={styles.nameText}>Name</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.nameInput}
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View style={styles.cardBoxReset}>
              <Pressable onPress={() => removeRecordsAlert()}>
                <Text style={styles.resetText}>Reset</Text>
              </Pressable>
            </View>

            {/* <Pressable onPress={() => dropTable()}>
              <Text style={styles.resetText}>Drop</Text>
            </Pressable> */}

            <Button
              text="Home"
              numberOfLines={1}
              ellipsizeMode="tail"
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  nameText: {
    paddingTop: 50,
    paddingLeft: 30,
    fontSize: 36,
    textAlign: "left",
  },
  inputBox: {
    padding: 5,
    paddingHorizontal: 10,
  },
  nameInput: {
    height: 50,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  cardBoxReset: {
    borderRadius: 10,
    marginVertical: 100,
    marginHorizontal: 90,
    height: 120,
    backgroundColor: "#5DB075",
  },
  resetText: {
    paddingTop: 30,
    fontSize: 36,
    textAlign: "center",
  },
});
