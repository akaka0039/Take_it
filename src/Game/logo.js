import * as React from "react";
import { StyleSheet, View } from "react-native";

export default function logo() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, styles.a]} />
      <View style={[styles.square, styles.b]} />
      <View style={[styles.square, styles.c]} />
      <View style={[styles.square, styles.d]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    flexDirection: "row",
    flexWrap: "wrap",
    transform: [{ rotate: "45deg" }],
  },
  square: {
    width: 100 / 2,
    height: 100 / 2,
    borderRadius: 200 * 0.1,
    borderWidth: 5,
    borderColor: "white",
  },
  a: {
    backgroundColor: "#e1d0b3",
  },
  b: {
    backgroundColor: "#e7c651",
  },
  c: {
    backgroundColor: "#cfe1d1",
  },
  d: {
    backgroundColor: "#bfd4e4",
  },
});
