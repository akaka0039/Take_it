import {
  StyleSheet,
  View,
  Text,
  Alert,
  ImageBackground,
  Keyboard,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import Button from "./Button";
import React, { useCallback, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import setImage from "../../assets/image/Game_back.png";

export default function Setting({ db }) {
  const navigation = useNavigation();
  const [record, setRecord] = useState([0, 0, 0]);

  const removeRecordsAlert = () => {
    Alert.alert(
      "Remove all Score",
      "Once you delete all records, it cannot be undone",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK", onPress: () => clearRecords() },
      ]
    );
  };

  useFocusEffect(
    useCallback(() => {
      db.transaction((tx) => {
        tx.executeSql(`select * from Record;`, [], (_, { rows }) => {
          setRecord(rows._array);
        });
      });
    }, [])
  );

  const clearRecords = () => {
    db.transaction((tx) => {
      tx.executeSql(`DELETE FROM Record;`);
      tx.executeSql(
        `insert into Record (_id,game, win,lose) values (?,?,?,?);`,
        [1, 0, 0, 0]
      );
    });
    db.transaction((tx) => {
      tx.executeSql(`select * from Record;`, [], (_, { rows }) => {
        setRecord(rows._array);
      });
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={setImage}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.container}>
            <Text style={styles.titleText}>Score</Text>
            <View style={styles.scoreTitleBox}>
              <View style={styles.titleOutlineWin}>
                <View>
                  <Text style={styles.scoreTitle}>Win</Text>
                </View>
              </View>

              <View style={styles.titleOutlineGame}>
                <Text style={styles.scoreTitleGame}>Game</Text>
              </View>
              <View style={styles.titleOutlineLose}>
                <Text style={styles.scoreTitle}>Take it!!!</Text>
              </View>
            </View>

            <View style={styles.scoreNumberBox}>
              <View style={styles.numberOutlineWin}>
                <Text style={styles.numberScore}>{record[0]["win"]}</Text>
              </View>
              <View style={styles.numberOutlineGame}>
                <Text style={styles.numberScore}>{record[0]["game"]}</Text>
              </View>

              <View style={styles.numberOutlineLose}>
                <Text style={styles.numberScore}>{record[0]["lose"]}</Text>
              </View>
            </View>

            <View style={styles.cardBox}>
              <Pressable onPress={() => removeRecordsAlert()}>
                <View style={styles.cardBoxReset}>
                  <Text style={styles.resetText}>Reset</Text>
                </View>
              </Pressable>
            </View>

            {/* <Button
              text="Home"
              numberOfLines={1}
              ellipsizeMode="tail"
              onPress={() => {
                navigation.navigate("Home");
              }}
            /> */}

            <View style={styles.cardBox}>
              <Pressable onPress={() => navigation.navigate("Home")}>
                <View style={styles.cardBoxHome}>
                  <Text style={styles.homeText}>Home</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  titleText: {
    paddingTop: 50,
    paddingLeft: 30,
    fontSize: 60,
    textAlign: "left",
  },
  scoreTitleBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  titleOutlineGame: {
    backgroundColor: "#FFF",
    height: 110,
    width: 130,
    borderRadius: 200,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  titleOutlineWin: {
    backgroundColor: "#FF9E9E",
    height: 90,
    width: 120,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  titleOutlineLose: {
    backgroundColor: "#9DD7F7",
    height: 90,
    width: 120,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreTitleGame: {
    fontSize: 40,
  },
  scoreTitle: {
    fontSize: 26,
  },
  scoreNumberBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20,
    paddingHorizontal: 10,
  },
  numberOutlineWin: {
    backgroundColor: "#FF9E9E",
    height: 80,
    width: 110,
    borderRadius: 360,
    justifyContent: "center",
    alignItems: "center",
  },
  numberOutlineGame: {
    backgroundColor: "#FFF",
    height: 100,
    width: 140,
    borderRadius: 360,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  numberOutlineLose: {
    backgroundColor: "#9DD7F7",
    height: 80,
    width: 110,
    borderRadius: 360,
    justifyContent: "center",
    alignItems: "center",
  },
  numberScore: {
    fontSize: 20,
  },
  cardBox: {
    alignItems: "center",
    padding: 10,
    paddingBottom: 20,
  },
  cardBoxReset: {
    borderRadius: 10,
    borderWidth: 5,
    height: 70,
    width: 240,
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  resetText: {
    fontSize: 36,
    textAlign: "center",
  },
  cardBoxHome: {
    borderRadius: 10,
    borderWidth: 2,
    height: 70,
    width: 200,
    justifyContent: "center",
    backgroundColor: "#5DB075",
  },
  homeText: {
    fontSize: 36,
    textAlign: "center",
  },
});
