import { StyleSheet, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function Inputs(number) {
  const [texts, setTexts] = useState([
    "Alice",
    "Bob",
    "Charlotte",
    "Dag",
    "Easton",
    "Faina",
    "Genesis",
    "Hana",
  ]);

  const handleTextChange = (text, i) => {
    const newText = [...texts];
    newText[i] = text;
    setTexts(newText);
  };

  var Cards = [];

  Cards.push(
    texts.map(
      (text, index) =>
        index < number.number && (
          <View style={styles.Box}>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                key={index}
                onChangeText={(text) => handleTextChange(text, index)}
                value={text}
                placeholder={`Type something for box ${index + 1}...`}
              />
            </View>
          </View>
        )
    )
  );

  return <View style={styles.Box}>{Cards}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Box: {
    paddingLeft: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  inputBox: {
    padding: 10,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  input: {
    height: 50,
    fontSize: 20,
    width: 150,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fff",
  },
});
