import { StyleSheet, View, Text, Alert, Pressable } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Take it!!!</Text>
      <Pressable onPress={() => Alert.alert("Start page")}>
        <View style={styles.cardBoxStart}>
          <Text style={styles.startText}>Start</Text>
        </View>
      </Pressable>
      <Pressable onPress={() => Alert.alert("Q&A page")}>
        <View style={styles.cardBoxSetting}>
          <Text style={styles.settingText}>Q&A</Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleBox: {
    height: 100,
  },
  titleText: {
    paddingVertical: 100,
    fontSize: 36,
    textAlign: "center",
  },
  cardBoxStart: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 90,
    height: 120,
    backgroundColor: "#5DB075",
    paddingBottom: 30,
  },
  startText: {
    paddingTop: 30,
    fontSize: 36,
    textAlign: "center",
  },
  cardBoxSetting: {
    borderRadius: 10,
    marginVertical: 50,
    marginHorizontal: 90,
    height: 120,
    backgroundColor: "#5DB075",
  },
  settingText: {
    paddingTop: 30,
    fontSize: 36,
    textAlign: "center",
  },
});
