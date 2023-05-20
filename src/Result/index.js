import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Button from "./Button";
import { Dummydata } from "../../assets/data/Dummydata";
import resultImage from "../../assets/image/Result_back.png";
import { AdBannerComponent } from "../Ad/ad_banners";

export default function Result({ db }) {
  const route = useRoute();
  var number = route.params.number;
  const navigation = useNavigation();
  const handleNavigation = (k) => {
    for (var i = 0; i < number; i++) {
      Dummydata[i]["score"] = "null";
    }
    if (k == 1) {
      navigation.navigate("Game", {
        number: number,
      });
    } else {
      navigation.navigate("Home");
    }
  };

  useEffect(() => {
    gameCounter();
  }, []);

  const gameCounter = () => {
    db.transaction((tx) => {
      if (loser.id == 0) {
        tx.executeSql(
          `UPDATE Record SET game = game + 1, lose = lose + 1 where _id = 1;`
        );
      } else {
        tx.executeSql(
          `update Record set game = game + 1, win = win + 1 where _id = 1;`
        );
      }
    });
  };

  const loser = Dummydata.reduce((accumulator, currentValue) =>
    currentValue.score < accumulator.score ? currentValue : accumulator
  );

  return (
    <ImageBackground
      source={resultImage}
      resizeMode="cover"
      style={styles.image}
    >
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
            onPress={() => handleNavigation(1)}
          />
          <Button text="Finish" onPress={() => handleNavigation(0)} />
        </View>
      </View>
      <AdBannerComponent />
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
