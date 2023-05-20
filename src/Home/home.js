import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import homeImage from "../../assets/image/Home_back.png";
import { AdBannerComponent } from "../Ad/ad_banners";

export default function Home({ db }) {
  const navigation = useNavigation();
  const [recordHome, setRecordHome] = useState();

  useFocusEffect(
    useCallback(() => {
      db.transaction((tx) => {
        tx.executeSql(
          `create table if not exists Record (_id integer primary key not null, game integer not null, win integer not null, lose integer not null);`
        );
        tx.executeSql(
          `insert into Record (_id,game, win,lose) values (?,?,?,?);`,
          [1, 0, 0, 0]
        );
      });
      db.transaction((tx) => {
        tx.executeSql(`select * from Record;`, [], (_, { rows }) => {
          setRecordHome(rows._array);
        });
      });
    }, [])
  );

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
            <Text style={styles.settingText}>Score</Text>
          </View>
        </Pressable>
      </View>
      <AdBannerComponent />
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
  BannerBox: {
    height: 100,
    paddingTop: 35,
    paddingVertical: 8,
  },
});
