import { StyleSheet, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Dummydata } from "../../assets/data/Dummydata";

export default function Inputs(props) {
  const [texts, setTexts] = useState(Dummydata);

  const handleTextChange = (text, i) => {
    const newText = [...texts];
    newText[i].members = text;
    setTexts(newText);
  };

  return (
    <View style={styles.Box}>
      {texts &&
        texts.map(
          (t) =>
            t.id < props.number && (
              <View key={t.id} style={styles.Box}>
                <View style={styles.inputBox}>
                  <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleTextChange(text, t.id)}
                    value={t.members}
                  />
                </View>
              </View>
            )
        )}
    </View>
  );
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
