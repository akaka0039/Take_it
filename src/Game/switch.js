import { StyleSheet, View, Text, Pressable, Alert } from "react-native";
import React from "react";
import { Dummydata } from "../../assets/data/Dummydata";

export default function Switch(props) {
  var number = props.number;
  var count = props.count;
  var name = "";
  if (number == count) {
    name = "Result";
  } else {
    name = Dummydata[props.count]["members"];
  }
  return (
    <View style={styles.buttonBox}>
      <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scoreBox: {
    paddingTop: 10,
    height: 440,
  },
  cardBox: {
    paddingLeft: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  cardBoxScore: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 5,
    height: 90,
    width: 140,
    backgroundColor: "#5DB075",
  },
  nameText: {
    paddingTop: 20,
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#5DB075",
  },
  scoreText: {
    paddingTop: 20,
    padding: 20,
    fontSize: 36,
  },
  numberText: {
    paddingTop: 5,
    fontSize: 60,
    textAlign: "center",
  },
  Box: {
    padding: 10,
    alignItems: "center",
  },
  buttonBox: {
    borderRadius: 50,
    justifyContent: "center",
    height: 110,
    width: 110,
    backgroundColor: "#B2ABAB",
    transform: [{ scaleX: 2 }],
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowColor: "#000000",
    // for android
    elevation: 5,
  },
  buttonText: {
    paddingTop: 5,
    padding: 10,
    fontSize: 20,
    textAlign: "center",
  },
});
