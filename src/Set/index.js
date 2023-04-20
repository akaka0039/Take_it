import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import Buttom from "./Button";
import { useNavigation } from "@react-navigation/native";
import Input from "./inputs";
import LeftAllow from "../../assets/svg/left-arrow.svg";
import RightAllow from "../../assets/svg/right-arrow.svg";

export default function Set() {
  const [number, setNumber] = useState(2);
  const [texts, setTexts] = useState([...Array(number)].map(() => ""));
  const navigation = useNavigation();

  const pullNumber = () => {
    if (number > 2) {
      var temNum = number - 1;
      setNumber(temNum);
    }
    return;
  };

  const addNumber = () => {
    if (number < 8) {
      var temNum = number + 1;
      setNumber(temNum);
    }
    return;
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.titleText}>2~8 people</Text>
          <View style={styles.header}>
            <Pressable onPress={pullNumber}>
              <LeftAllow height={50} width={50} />
            </Pressable>

            <Text style={styles.numberText}>{number}</Text>
            <Pressable onPress={addNumber}>
              <RightAllow height={50} width={50} />
            </Pressable>
          </View>

          <Input number={number} />

          <View style={styles.button}>
            <Buttom
              text="Back"
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
            <Buttom text="Start" onPress={() => navigation.navigate("Game")} />
          </View>
          {/* <LeftArrow height={100} width={100} /> */}
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
    paddingTop: 50,
    fontSize: 36,
    textAlign: "center",
    paddingBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  numberText: {
    paddingTop: 5,
    fontSize: 60,
    textAlign: "center",
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
