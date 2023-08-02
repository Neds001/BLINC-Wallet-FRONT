import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable,TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles1";

const Send = () => {
  const navigation = useNavigation();
  const backButton = () =>{
    navigation.navigate("Footbar")
  }


  return (
    <View style={styles.sendMoney04}>
      <LinearGradient
        style={[styles.sendMoney04Child, styles.pressableBg]}
        locations={[0, 0.5, 1]}
        colors={["#fff", "#ffeff5", "#fff"]}
        useAngle={true}
        angle={180}
      />
      
      <Image
        style={styles.subtractIcon}
        resizeMode="cover"
        source={require("../assets/subtract.png")}
      />
      <View style={[styles.totalTransfer, styles.totalLayout]}>
        <Text style={styles.totalTransfer1}>Total transfer</Text>
        <Text style={[styles.text, styles.textTypo1]}>$230.00</Text>
      </View>
      <View style={[styles.transferCharge, styles.totalLayout]}>
        <Text style={styles.totalTransfer1}>Transfer Charge</Text>
        <Text style={[styles.text1, styles.textTypo]}>$1.00</Text>
      </View>
      <View style={[styles.total, styles.totalLayout]}>
        <Text style={[styles.totalFees, styles.textTypo1]}>Total fees</Text>
        <Text style={[styles.text2, styles.textTypo]}>$230.00</Text>
      </View>
      <View style={[styles.sendMoney04Item, styles.sendLayout]} />
      <View style={[styles.sendMoney04Inner, styles.sendLayout]} />
      <View style={[styles.totalTransfer2, styles.totalLayout]}>
        <Text style={styles.totalTransfer1}>Date:</Text>
        <Text style={[styles.december2022, styles.textTypo]}>
          03 December 2022
        </Text>
      </View>
      <View style={[styles.totalTransfer3, styles.totalLayout]}>
        <Text style={styles.totalTransfer1}>Sender</Text>
        <Text style={[styles.johnDoe, styles.johnDoeTypo]}>John Doe</Text>
      </View>
      <View style={[styles.transferCharge2, styles.totalLayout]}>
        <Text style={styles.totalTransfer1}>Reference Num</Text>
        <Text style={[styles.text3, styles.textTypo]}>#54463873456</Text>
      </View>
      <View style={[styles.transferCharge3, styles.totalLayout]}>
        <Text style={styles.totalTransfer1}>Receiver</Text>
        <Text style={[styles.jackoLYami, styles.johnDoeTypo]}>
          Jacko L. Yami
        </Text>
      </View>
      <Text style={[styles.sendFunds, styles.sendFundsTypo]}>Send Funds</Text>
      <Image
        style={[styles.ellipseIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.sendMoney04Child1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/ellipse-22.png")}
      />
      <Image
        style={styles.homeIcon}
        resizeMode="cover"
        source={require("../assets/home.png")}
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
          onPress={backButton}
        >
          <Text style={[styles.backToHome, styles.sendFundsTypo]}>
            Back To home
          </Text>
        </Pressable>
      </LinearGradient>
      <Text style={styles.backToHome1}>Back To Home</Text>
      
      <TouchableOpacity style={styles.vector} onPress={() => {}}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableBg: {
    backgroundColor: "transparent",
    width: "100%",
  },
  batteryPosition: {
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  totalLayout: {
    width: 257,
    left: 59,
    height: 22,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.darkerGrotesqueSemiBold,
    fontWeight: "600",
    top: 0,
    lineHeight: 22,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.darkerGrotesqueSemiBold,
    fontWeight: "600",
    top: 0,
    lineHeight: 22,
    position: "absolute",
  },
  sendLayout: {
    height: 0,
    width: 272,
    borderTopWidth: 1,
    borderRadius: 0.001,
    borderColor: "#e3e3e3",
    borderStyle: "dashed",
    left: 52,
    position: "absolute",
  },
  johnDoeTypo: {
    color: Color.dimgray,
    fontSize: FontSize.size_mini,
    textAlign: "right",
    fontFamily: FontFamily.darkerGrotesqueSemiBold,
    fontWeight: "600",
    top: 0,
    lineHeight: 22,
    position: "absolute",
  },
  sendFundsTypo: {
    fontFamily: FontFamily.darkerGrotesqueBold,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 22,
  },
  sendMoney04Child: {
    top: 10,
    bottom: 100,
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    left: "0%",
    backgroundColor: "transparent",
    right: "0%",
    height: "100%",
    position: "absolute",
  },
  border: {
    width: "91.82%",
    right: "8.18%",
    bottom: "0%",
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    opacity: 0.35,
    top: "0%",
    left: "0%",
    height: "100%",
    position: "absolute",
  },
  capIcon: {
    height: "30.77%",
    width: "4.88%",
    top: "35.9%",
    bottom: "33.33%",
    left: "95.12%",
    opacity: 0.4,
    right: "0%",
    position: "absolute",
  },
  capacity: {
    height: "69.23%",
    width: "77.13%",
    top: "15.38%",
    right: "16.26%",
    bottom: "15.38%",
    left: "6.61%",
    borderRadius: 3,
    backgroundColor: Color.black,
    position: "absolute",
  },
  battery: {
    height: "59.09%",
    width: "7.97%",
    top: "20.91%",
    bottom: "20%",
    left: "92.03%",
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
    color: Color.black,
    lineHeight: 22,
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  statusBar: {
    top: 9,
    left: 10,
    width: 341,
    height: 22,
    position: "absolute",
  },
  subtractIcon: {
    width: 417,
    height: 525,
    top: 80,
    right: 25,
  },
  totalTransfer1: {
    fontSize: FontSize.size_smi,
    color: Color.gray_100,
    textAlign: "left",
    fontFamily: FontFamily.darkerGrotesqueSemiBold,
    fontWeight: "600",
    top: 0,
    left: 0,
    lineHeight: 22,
    position: "absolute",
  },
  text: {
    color: Color.gray_200,
    left: 210,
  },
  totalTransfer: {
    top: 430,
  },
  text1: {
    left: 226,
    color: Color.gray_200,
  },
  transferCharge: {
    top: 454,
  },
  totalFees: {
    color: "#373737",
    left: 0,
    fontSize: FontSize.size_sm,
  },
  text2: {
    color: "#f00055",
    left: 210,
  },
  total: {
    top: 478,
  },
  sendMoney04Item: {
    top: 336,
  },
  sendMoney04Inner: {
    top: 417,
  },
  december2022: {
    left: 152,
    color: Color.gray_200,
  },
  totalTransfer2: {
    top: 265,
  },
  johnDoe: {
    left: 203,
  },
  totalTransfer3: {
    top: 348,
  },
  text3: {
    left: 167,
    color: Color.gray_200,
  },
  transferCharge2: {
    top: 289,
  },
  jackoLYami: {
    left: 180,
  },
  transferCharge3: {
    top: 372,
  },
  sendFunds: {
    top: 224,
    left: 142,
    fontSize: 20,
    textTransform: "capitalize",
    color: "#3a160e",
    position: "absolute",
  },
  ellipseIcon: {
    height: "13.18%",
    width: "28.53%",
    top: "19%",
    right: "35.73%",
    bottom: "70.81%",
    left: "38%",
    position: "absolute",
  },
  sendMoney04Child1: {
    height: "14.9%",
    width: "32.27%",
    top: "18%",
    right: "33.87%",
    bottom: "69.95%",
    left: "36%",
    position: "absolute",
  },
  homeIcon: {
    top: 137,
    left: 141,
    width: 93,
    height: 93,
    position: "absolute",
  },
  backToHome: {
    fontSize: 16,
    color: Color.white,
  },
  pressable: {
    borderRadius: 10,
    shadowColor: "rgba(252, 134, 169, 0.15)",
    shadowOffset: {
      width: 1,
      height: 23,
      
    },
    shadowRadius: 33,
    elevation: 33,
    shadowOpacity: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    left: 28,
    top: 542,
    width: 303,
    position: "absolute",
    borderRadius: 10
  },
  backToHome1: {
    top: 52,
    left: 147,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.darkerGrotesqueSemiBold,
    fontWeight: "600",
    color: Color.black,
    lineHeight: 22,
    position: "absolute",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    width: "100%",
  },
  vector: {
    left: "9.07%",
    top: "8%",
    right: "87.98%",
    bottom: "91.61%",
    width: "2.96%",
    height: "1.37%",
    position: "absolute",
  },
  sendMoney04: {
    backgroundColor: Color.white,
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Send;