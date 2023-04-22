import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import ScoreCard from "./scoreCard";
import Switch from "./switch";
import { Dummydata } from "../../assets/data/Dummydata";
import gameImage from "../../assets/image/Game_back.png";

export default function Game() {
  const route = useRoute();
  var number = route.params.number;
  const navigation = useNavigation();
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  const ClickBottom = () => {
    if (count == number) {
      return navigation.navigate("Result", {
        number: number,
      });
    } else {
      const random = Math.floor(Math.random() * 10);
      setScore(random);
      Dummydata[count]["score"] = random;
      setCount(count + 1);
    }
  };

  useEffect(() => {
    navigation.addListener("focus", () => {
      setScore(0);
      setCount(0);
    });
  }, [navigation]);

  return (
    <ImageBackground source={gameImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.scoreBox}>
          <View style={styles.cardBox}>
            <ScoreCard data={Dummydata} />
          </View>
        </View>
        <Text style={styles.numberText}>{score}</Text>
        <View style={styles.Box}>
          <Pressable onPress={() => ClickBottom()}>
            <Switch count={count} number={number} />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
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
