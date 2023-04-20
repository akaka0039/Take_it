import {
  StyleSheet,
  View,
  Text,
  Alert,
  Pressable,
  TextInput,
  onChangeText,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import Button from "./Button";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Setting() {
  const [text, onChangeText] = React.useState("Name");
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <Pressable onPress={() => Alert.alert("Reset Bottom")}>
              <Text style={styles.resetText}>Reset</Text>
            </Pressable>
          </View>
          <Button
            text="Home"
            numberOfLines={1}
            ellipsizeMode="tail"
            onPress={() => {
              navigation.navigate("Home");
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
