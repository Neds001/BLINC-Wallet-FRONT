import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable, StatusBar} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles1";

const ErrorScreen = () => {
  return (
    
    <View style={styles.errorHandling}>
        <StatusBar backgroundColor="#141414" />
      <LinearGradient
        style={[styles.errorHandlingChild, styles.okWrapperBg]}
        locations={[0, 0.5, 1]}
        colors={["#fafaff", "#ffeff5", "#fff"]}
        useAngle={true}
        angle={180}
      />
   
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
     <LinearGradient
        style={styles.wrapper}
        locations={[0, 1]}
        colors={["#fd8fb0", "#f45b89"]}
        useAngle={true}
        angle={89.93}
      >
        <Pressable
          style={[styles.pressable, styles.pressableBg]}
          onPress={() => {}}
        >
          <Text style={[styles.backToHome, styles.sendFundsTypo]}>
            OK
          </Text>
        </Pressable>
      </LinearGradient>
      <View style={styles.errorHandlingInner}>
        <View style={styles.frameWrapper}>
          <View style={styles.basicMobileScreenHeaderParent}>
            <View style={styles.basicMobileScreenHeaderParent}>
              <View style={styles.circleArrowUp}>
                <Image
                  style={styles.iconalertLayout}
                  resizeMode="cover"
                  source={require("../assets/iconalert.png")}
                />
              </View>
              <View style={styles.titleParent}>
                <Text style={styles.title}>
                  The transaction could not be completed.
                </Text>
                <Text style={styles.description}>
                  <Text
                    style={styles.sorryTheProblem}
                  >{`Sorry, the problem could not be identified. Your funds remain 
securely in your wallet.

`}</Text>
                  <Text style={styles.aFewThings}>A few things to try</Text>
                </Text>
              </View>
            </View>
            <View style={styles.listItemdividerParent}>
              <View style={styles.listLayout} />
              <View style={styles.wait5MinutesAndTryAgainWrapper}>
                <Text style={[styles.wait5Minutes, styles.viewTypo]}>
                  Wait 5 minutes and try again
                </Text>
              </View>
              <View style={[styles.listItemdivider1, styles.listLayout]} />
              <View style={styles.wait5MinutesAndTryAgainWrapper}>
                <Text style={[styles.wait5Minutes, styles.viewTypo]}>
                  Ensure your Internet connection is stable
                </Text>
              </View>
              <View style={[styles.listItemdivider1, styles.listLayout]} />
              <View style={styles.wait5MinutesAndTryAgainWrapper}>
                <Text style={[styles.askForSupportContainer, styles.viewTypo]}>
                  <Text
                    style={styles.sorryTheProblem}
                  >{`Ask for support in our `}</Text>
                  <Text style={styles.telegramChannel}>Telegram channel</Text>
                </Text>
              </View>
              <View style={[styles.listItemdivider1, styles.listLayout]} />
              <View style={styles.wait5MinutesAndTryAgainWrapper}>
                <Text style={[styles.askForSupportContainer, styles.viewTypo]}>
                  <Text
                    style={styles.sorryTheProblem}
                  >{`If this problem persists, opening additional payment channels may help. `}</Text>
                  <Text style={styles.telegramChannel}>Learn more</Text>
                </Text>
              </View>
              <View style={[styles.listItemdivider1, styles.listLayout]} />
              <View style={styles.wait5MinutesAndTryAgainWrapper}>
                <Text style={[styles.viewErrorDetails, styles.viewTypo]}>
                  View error details
                </Text>
              </View>
              <View style={styles.viewErrorDetailsParent}>
                <Text style={[styles.viewErrorDetails1, styles.viewTypo]}>
                  View error details
                </Text>
                <Image
                  style={[styles.iconcaretRight, styles.iconalertLayout]}
                  resizeMode="cover"
                  source={require("../assets/iconcaret-right.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  okWrapperBg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  timePosition: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  viewTypo: {
    lineHeight: 21,
    fontSize: FontSize.body415_size,
    fontFamily: FontFamily.body415,
    flex: 1,
  },
  backToHome: {
    fontSize: 16,
    color: Color.white,
    left: 130,
    top: 8
    
  },
  sendFundsTypo: {
    fontFamily: FontFamily.darkerGrotesqueBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 22,
    shadowColor: "rgba(252, 134, 169, 0.15)",
  },
  wrapper: {
    left: 38,
    top: 650,
    width: 290,
    position: "absolute",
    shadowColor: "rgba(252, 134, 169, 0.15)",
    borderRadius: 10,
    height: 40,
  },
  pressable: {
    borderRadius: 10,
    shadowColor: "rgba(252, 134, 169, 0.15)",
    shadowOffset: {
      width: 0,
      height: 23,
    },
},
pressableBg: {
    backgroundColor: "transparent",
    width: "100%",
  },
  listLayout: {
    height: 1,
    backgroundColor: Color.lightNeutral4DE92,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  iconalertLayout: {
    height: 30,
    width: 30,
    overflow: "hidden",
  },
  errorHandlingChild: {
    height: "53.94%",
    top: 10,
    bottom: "-7.88%",   
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    left: "0%",
    backgroundColor: "transparent",
    right: "0%",
    width: "100%",
  },
  border: {
    height: "100%",
    width: "91.82%",
    right: "8.18%",
    bottom: "0%",
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    opacity: 0.35,
  },
  capIcon: {
    height: "30.77%",
    width: "4.88%",
    top: "35.9%",
    bottom: "33.33%",
    left: "95.12%",
    opacity: 0.4,
    right: "0%",
  },
  capacity: {
    height: "69.23%",
    width: "77.13%",
    top: "15.38%",
    right: "16.26%",
    bottom: "15.38%",
    left: "6.61%",
    borderRadius: 3,
    backgroundColor: Color.lightForeground,
    position: "absolute",
  },
  battery: {
    height: "59.09%",
    width: "7.97%",
    top: "20.91%",
    bottom: "20%",
    left: "92.03%",
    right: "0%",
    position: "absolute",
  },
  wifiIcon: {
    width: 17,
    height: 12,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 12,
  },
  time: {
    width: "15.82%",
    fontSize: 17,
    fontWeight: "500",
    fontFamily: FontFamily.darkerGrotesqueMedium,
    textAlign: "center",
    color: Color.lightForeground,
    lineHeight: 22,
  },
  statusBar: {
    top: 9,
    left: 10,
    width: 341,
    height: 22,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.32%",
    width: "2.93%",
    top: "7.02%",
    right: "90.93%",
    bottom: "91.66%",
    left: "6.13%",
  },
  ok: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.darkerGrotesqueBold,
    color: Color.white,
    textAlign: "left",
    lineHeight: 22,
  },
  okWrapper: {
    top: 732,
    left: 23,
    borderRadius: 10,
    shadowColor: "rgba(252, 134, 169, 0.15)",
    shadowOffset: {
      width: 1,
      height: 23,
    },
    shadowRadius: 33,
    elevation: 33,
    shadowOpacity: 1,
    width: 333,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  circleArrowUp: {
    borderRadius: 100,
    backgroundColor: Color.lightBlue,
    padding: 15,
    flexDirection: "row",
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.title421_size,
    lineHeight: 29,
    fontWeight: "600",
    fontFamily: FontFamily.title421,
    alignSelf: "stretch",
    textAlign: "center",
    color: Color.lightForeground,
  },
  sorryTheProblem: {
    color: Color.lightNeutral777176,
  },
  aFewThings: {
    color: Color.lightForeground,
  },
  description: {
    fontSize: FontSize.body318_size,
    lineHeight: 25,
    marginTop: 10,
    fontFamily: FontFamily.body415,
    alignSelf: "stretch",
    textAlign: "center",
  },
  titleParent: {
    marginTop: 25,
    alignSelf: "stretch",
    alignItems: "center",
  },
  basicMobileScreenHeaderParent: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  wait5Minutes: {
    color: Color.lightNeutral777176,
    textAlign: "center",
  },
  wait5MinutesAndTryAgainWrapper: {
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  listItemdivider1: {
    marginTop: 10,
  },
  telegramChannel: {
    color: Color.lightBlue,
  },
  askForSupportContainer: {
    textAlign: "center",
  },
  viewErrorDetails: {
    color: Color.lightBlue,
    textAlign: "center",
  },
  viewErrorDetails1: {
    color: Color.lightNeutral777176,
    textAlign: "left",
  },
  iconcaretRight: {
    marginLeft: 10,
  },
  viewErrorDetailsParent: {
    display: "none",
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  listItemdividerParent: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  frameWrapper: {
    height: 539,
    paddingBottom: 50,
    alignSelf: "stretch",
    alignItems: "center",
  },
  errorHandlingInner: {
    marginLeft: -187.5,
    top: 137,
    left: "50%",
    width: 375,
    height: 601,
    paddingHorizontal: 20,
    paddingBottom: 60,
    alignItems: "center",
    position: "absolute",
  },
  errorHandling: {
    backgroundColor: Color.white,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default ErrorScreen;