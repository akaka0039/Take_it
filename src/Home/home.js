import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import homeImage from "../../assets/image/Home_back.png";

export default function Home({ db }) {
  const navigation = useNavigation();
  const [recordHome, setRecordHome] = useState();

  useEffect(() => {
    navigation.addListener("focus", () => {
      db.transaction((tx) => {
        tx.executeSql(
          `select * from Record;`,
          [],
          (_, { rows }) => {
            setRecordHome(rows._array);
          },
          (tx, error) => {
            setRecordHome("select failed" + error);
          }
        );
      });
    });
  }, [navigation]);
  return (
    <ImageBackground
      source={homeImage}
      resizeMode="cover"
      style={styles.backImage}
    >
      <View style={styles.container}>
        <Text style={styles.titleText}>Take it!!!</Text>
        <View style={styles.Box}>
          <View style={styles.outline}>
            <View style={styles.image}>
              <Text style={styles.loseText}>
                {recordHome && recordHome[0]["lose"]}
              </Text>
            </View>
          </View>
        </View>
        <Pressable onPress={() => navigation.navigate("Set")}>
          <View style={styles.cardBoxStart}>
            <Text style={styles.startText}>Start</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Setting")}>
          <View style={styles.cardBoxSetting}>
            <Text style={styles.settingText}>Setting</Text>
          </View>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backImage: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  titleText: {
    paddingTop: 50,
    fontSize: 36,
    textAlign: "center",
  },
  Box: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  outline: {
    backgroundColor: "#FFF",
    height: 120,
    width: 210,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 360,
  },
  loseText: {
    paddingTop: 10,
    fontSize: 55,
    textAlign: "center",
  },
  cardBoxStart: {
    borderRadius: 10,
    borderLeftWidth: 5,
    marginVertical: 10,
    marginHorizontal: 90,
    height: 120,
    backgroundColor: "#F39800",
    paddingBottom: 30,
  },
  startText: {
    paddingTop: 25,
    fontSize: 50,
    textAlign: "center",
  },
  cardBoxSetting: {
    borderRadius: 10,
    borderRightWidth: 5,
    borderRightColor: "#fff",
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
