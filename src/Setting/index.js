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
import React from "react";

export default function Setting() {
  const [text, onChangeText] = React.useState("Name");
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
          <Pressable onPress={() => Alert.alert("Reset Bottom")}>
            <View style={styles.cardBoxReset}>
              <Text style={styles.resetText}>Reset</Text>
            </View>
          </Pressable>
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
    marginVertical: 220,
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
