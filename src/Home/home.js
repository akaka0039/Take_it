import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import homeImage from "../../assets/image/Home_back.png";

export default function Home() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={homeImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Take it!!!</Text>
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
});
