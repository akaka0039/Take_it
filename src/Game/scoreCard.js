import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { Dummydata } from "../../assets/data/Dummydata";

export default function scoreCard() {
  return (
    <View style={styles.scoreBox}>
      <View style={styles.cardBox}>
        {Dummydata &&
          Dummydata.map((u) => {
            if (u.score !== "null" || u.score == 0) {
              return (
                <View key={u.id} style={styles.cardBoxScore}>
                  <Text
                    style={styles.nameText}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {u.members}
                  </Text>
                  <Text style={styles.scoreText}>{u.score}</Text>
                </View>
              );
            }
            return null;
          })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
