import { StyleSheet, View } from "react-native";
import React from "react";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

export function AdBannerComponent() {
  const adUnitId = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-9876134681726293/7609224561";

  return (
    <View style={styles.BannerBox}>
      <BannerAd
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        unitId={adUnitId}
        servePersonalizedAds
      />
    </View>
  );
}

const styles = StyleSheet.create({
  BannerBox: {
    height: 100,
    paddingTop: 35,
    paddingVertical: 8,
  },
});
