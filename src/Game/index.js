import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Logo from "./logo";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Set")}>
        <View style={styles.scoreBox}>
          <View style={styles.cardBox}>
            <View style={styles.cardBoxScore}>
              <Text
                style={styles.nameText}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                Akakadsafad
              </Text>
              <Text style={styles.scoreText}>9</Text>
            </View>
            <View style={styles.cardBoxScore}>
              <Text style={styles.nameText}>Akaka2</Text>
              <Text style={styles.scoreText}>9</Text>
            </View>
            <View style={styles.cardBoxScore}>
              <Text style={styles.nameText}>Akaka3</Text>
              <Text style={styles.scoreText}>9</Text>
            </View>
            <View style={styles.cardBoxScore}>
              <Text style={styles.nameText}>Akaka4</Text>
              <Text style={styles.scoreText}>9</Text>
            </View>
            <View style={styles.cardBoxScore}>
              <Text style={styles.nameText}>Akaka5</Text>
              <Text style={styles.scoreText}>9</Text>
            </View>
            <View style={styles.cardBoxScore}>
              <Text style={styles.nameText}>Akaka</Text>
              <Text style={styles.scoreText}>9</Text>
            </View>
            <View style={styles.cardBoxScore}>
              <Text style={styles.nameText}>Akaka</Text>
              <Text style={styles.scoreText}>9</Text>
            </View>
          </View>
        </View>
      </Pressable>
      <Logo />
      {/* <Text style={styles.numberText}></Text> */}
      <View style={styles.Box}>
        <Pressable onPress={() => navigation.navigate("Result")}>
          <View style={styles.buttonBox}>
            <Text
              style={styles.buttonText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Alicedafodjfoa
            </Text>
          </View>
        </Pressable>
      </View>
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
