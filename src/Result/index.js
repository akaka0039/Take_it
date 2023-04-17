import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";
import { Props } from "../Game/Dummydata";

export default function Result() {
  const loser = Props.reduce((accumulator, currentValue) =>
    currentValue.score < accumulator.score ? currentValue : accumulator
  );

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Take it!!!</Text>
      <Pressable onPress={() => navigation.navigate("Set")}>
        <View style={styles.cardBoxStart}>
          <Text style={styles.startText}>{loser.members}</Text>
        </View>
      </Pressable>
      <View style={styles.button}>
        <Button
          text="Again"
          numberOfLines={1}
          ellipsizeMode="tail"
          onPress={() => {
            navigation.navigate("Game");
          }}
        />
        <Button text="Finish" onPress={() => navigation.navigate("Home")} />
      </View>
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
  button: {
    paddingTop: 100,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
