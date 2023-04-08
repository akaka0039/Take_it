import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import Buttom from "./Button";
import { useNavigation } from "@react-navigation/native";

export default function Set() {
  const [text, onChangeText] = React.useState("Name");
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.titleText}>2~8 people</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
          </View>
          <View style={styles.inputBox}>
            <TextInput style={styles.input} />
          </View>
          <View style={styles.addButtonContainer}>
            <View style={styles.addButtonBox}>
              <Text style={styles.addButton}>Add</Text>
            </View>
          </View>
          <View style={styles.button}>
            <Buttom
              text="Back"
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
            <Buttom text="Start" onPress={() => Alert.alert("Game page")} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBox: {
    height: 50,
  },
  titleText: {
    paddingTop: 70,
    fontSize: 36,
    textAlign: "center",
    paddingBottom: 30,
  },
  inputBox: {
    padding: 10,
    paddingHorizontal: 20,
  },
  input: {
    height: 50,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
  addButtonContainer: {
    paddingLeft: 30,
  },
  addButtonBox: {
    borderRadius: 360,
    backgroundColor: "#AAAAAA",
    height: 50,
    width: 70,
  },
  addButton: {
    paddingTop: 15,
    textAlign: "center",
  },
  button: {
    paddingTop: 100,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
