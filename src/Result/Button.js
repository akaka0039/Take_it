import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

export default function Button({ text, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#5DB075",
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
  },
});
