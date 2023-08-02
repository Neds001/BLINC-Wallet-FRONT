import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable, TouchableOpacity, StatusBar} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles1";

const SendFunds = () => {
  const navigation = useNavigation();

  const errorScreen = () =>{
    navigation.navigate("ErrorScreen")
  }

  const doneButton = () =>{
    navigation.navigate("Send")
  }

  return (
    <View style={styles.reviewWithLabelAndTags}>
        <StatusBar backgroundColor="#141414" />
      <LinearGradient
        style={[styles.reviewWithLabelAndTagsChild, styles.pressableBg]}
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
          onPress={doneButton}
        >
          <Text style={[styles.backToHome, styles.sendFundsTypo]}>
            Done
          </Text>
        </Pressable>
      </LinearGradient>
      
 
      <View style={styles.basicMobileScreenHeaderParent}>
        <View style={styles.basicMobileScreenHeader}>
        <TouchableOpacity onPress={errorScreen}>
        <Text>If error</Text>
      </TouchableOpacity>
          <View style={styles.circleArrowUp}>
            
            <Image
              style={styles.iconshare}
              resizeMode="cover"
              source={require("../assets/iconshare.png")}
            />
          </View>
          
          <View style={styles.titleWrapper}>
            <Text style={[styles.title, styles.timeFlexBox]}>Sent!</Text>
          </View>
        </View>
        <View style={styles.listItemdividerParent}>
          <View style={styles.listItemdivider} />
          <View style={styles.amountItem}>
            <View style={[styles.item, styles.itemSpaceBlock]}>
              <View style={styles.itemLeftContent}>
                <View style={styles.amountItem}>
                  <Text style={styles.label}>Amount</Text>
                  <Text
                    style={[styles.description, styles.label1Typo]}
                  >{`2,000 `}</Text>
                </View>
              </View>
              <View style={styles.itemRightContent}>
                <Text style={[styles.label1, styles.label1Typo]}>PHP</Text>
              </View>
            </View>
          </View>
          <View style={styles.listItemdivider} />
          <View style={styles.recipientItem}>
            <View style={[styles.item1, styles.itemSpaceBlock]}>
              <View style={styles.itemLeftAccessory}>
                <Image
                  style={styles.avatarsPosition}
                  resizeMode="cover"
                  source={require("../assets/ellipse-1.png")}
                />
                <View style={[styles.avatars, styles.avatarsPosition]}>
                  <Image
                    style={[styles.image3Icon, styles.iconLayout]}
                    resizeMode="cover"
                    source={require("../assets/image-3.png")}
                  />
                </View>
              </View>
              <View style={styles.itemLeftContent1}>
                <View style={styles.amountItem}>
                  <Text style={styles.label}>To</Text>
                  <Text style={[styles.description, styles.label1Typo]}>
                    Jane Richardson
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.listItemdivider} />
          <View style={styles.amountItem}>
            <View style={[styles.item, styles.itemSpaceBlock]}>
              <View style={styles.itemLeftContent}>
                <View style={styles.amountItem}>
                  <Text style={[styles.description, styles.label1Typo]}>
                    Fee
                  </Text>
                </View>
              </View>
              <View style={styles.itemRightContent}>
                <Text style={[styles.label1, styles.label1Typo]}>5 PHP</Text>
                <Image
                  style={styles.iconshare}
                  resizeMode="cover"
                  source={require("../assets/iconlightning.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.listItemdivider} />
          <View style={styles.smallIconTextButtonParent}>
            <View style={styles.smallIconTextButton}>
              <Image
                style={styles.iconshare}
                resizeMode="cover"
                source={require("../assets/iconedit.png")}
              />
              <Text style={styles.labelTypo}>Add note</Text>
            </View>
            <View style={[styles.smallIconTextButton1, styles.buttonFlexBox]}>
              <Image
                style={styles.iconshare}
                resizeMode="cover"
                source={require("../assets/icontag.png")}
              />
              <Text style={styles.labelTypo}>Add tags</Text>
            </View>
            <View style={[styles.button, styles.buttonFlexBox]}>
              <View style={styles.iconinfoWrapper}>
                <Image
                  style={styles.iconinfo}
                  resizeMode="cover"
                  source={require("../assets/iconinfo.png")}
                />
              </View>
              <Text style={[styles.label7, styles.labelTypo1]}>Details</Text>
            </View>
            
     
          </View>
          
        </View>
        
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  pressableBg: {
    backgroundColor: "transparent",
    width: "100%",
  },
  borderPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    color: Color.lightForeground,
  },
  itemSpaceBlock: {
    paddingVertical: Padding.p_mini,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  label1Typo: {
    lineHeight: 25,
    fontSize: FontSize.body318Numbers_size,
    fontFamily: FontFamily.body318Numbers,
  },
  avatarsPosition: {
    top: 0,
    height: 40,
    width: 40,
    left: 0,
    position: "absolute",
  },
  buttonFlexBox: {
    marginTop: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  labelTypo: {
    color: Color.lightNeutral699148,
    lineHeight: 18,
    fontSize: FontSize.body318Numbers_size,
    fontFamily: FontFamily.body318Numbers,
    textAlign: "left",
  },
  labelTypo1: {
    color: Color.lightNeutral699148,
    lineHeight: 18,
    fontSize: FontSize.body318Numbers_size,
    fontFamily: FontFamily.body318Numbers,
    textAlign: "left",
    right: 255  
  },
  reviewWithLabelAndTagsChild: {
    height: "53.94%",
    top: 5,
    bottom: "-7.88%",
    borderBottomLeftRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    left: "0%",
    backgroundColor: "transparent",
    right: "0%",
    position: "absolute",
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
  border: {
    width: "91.82%",
    right: "8.18%",
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    opacity: 0.35,
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
    lineHeight: 22,
    top: "0%",
    textAlign: "center",
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
  vectorIcon: {
    height: "1.32%",
    width: "2.93%",
    top: "7.02%",
    right: "90.93%",
    bottom: "91.66%",
    left: "6.13%",
  },
  done: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: FontFamily.darkerGrotesqueBold,
    color: Color.white,
    textAlign: "left",
    lineHeight: 22,
  },
  pressable1: {
    borderRadius: 10,
    shadowColor: "rgba(252, 134, 169, 0.15)",
    shadowOffset: {
      width: 1,
      height: 23,
    },
    shadowRadius: 33,
    elevation: 33,
    shadowOpacity: 1,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  wrapper1: {
    left: 23,
    top: 732,
    width: 333,
    position: "absolute",
  },
  iconshare: {
    width: 30,
    height: 30,
    overflow: "hidden",
  },
  circleArrowUp: {
    backgroundColor: Color.lightGreen,
    padding: Padding.p_mini,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    overflow: "hidden",
  },
  title: {
    fontSize: FontSize.title421_size,
    lineHeight: 29,
    fontWeight: "600",
    fontFamily: FontFamily.title421,
    alignSelf: "stretch",
  },
  titleWrapper: {
    marginTop: 25,
    alignSelf: "stretch",
    alignItems: "center",
  },
  basicMobileScreenHeader: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  listItemdivider: {
    backgroundColor: Color.lightNeutral4DE92,
    height: 1,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  label: {
    fontSize: FontSize.body415_size,
    lineHeight: 21,
    color: Color.lightNeutral777176,
    fontFamily: FontFamily.body318Numbers,
    alignSelf: "stretch",
    textAlign: "left",
  },
  description: {
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.lightForeground,
    fontSize: FontSize.body318Numbers_size,
  },
  amountItem: {
    alignSelf: "stretch",
  },
  itemLeftContent: {
    alignSelf: "stretch",
    flex: 1,
  },
  label1: {
    color: Color.lightNeutral840CC,
    textAlign: "right",
  },
  itemRightContent: {
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  item: {
    alignSelf: "stretch",
  },
  image3Icon: {
    borderRadius: Border.br_81xl,
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  avatars: {
    borderRadius: Border.br_81xl,
  },
  itemLeftAccessory: {
    borderRadius: Border.br_xl,
    height: 40,
    width: 40,
    overflow: "hidden",
  },
  itemLeftContent1: {
    marginLeft: 10,
    alignSelf: "stretch",
    flex: 1,
  },
  item1: {
    flex: 1,
  },
  recipientItem: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  smallIconTextButton: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  smallIconTextButton1: {
    alignSelf: "stretch",
  },
  iconinfo: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  iconinfoWrapper: {
    backgroundColor: Color.lightNeutral699148,
    borderRadius: Border.br_81xl,
    flexDirection: "row",
    right: 250,
    top: -2,
  },
  label7: {
    marginLeft: 8,
  },
  button: {
    paddingLeft: 4,
    paddingTop: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    justifyContent: "flex-end",
  },
  smallIconTextButtonParent: {
    alignSelf: "stretch",
    paddingTop: Padding.p_3xs,
    justifyContent: "center",
  },
  listItemdividerParent: {
    marginTop: 20,
    alignSelf: "stretch",
    alignItems: "center",
  },
  basicMobileScreenHeaderParent: {
    top: 100,
    width: 375,
    height: 534,
    paddingHorizontal: 20,
    paddingTop: Padding.p_3xs,
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  reviewWithLabelAndTags: {
    backgroundColor: Color.white,
    height: 812,
    width: "100%",
    flex: 1,
  },
});

export default SendFunds;