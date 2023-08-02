import * as React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles1";
import { Image } from "expo-image";
import { AntDesign, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"

const Settings = () => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg.png')}
        style={{flex: 1}}
      >
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
        <Text style={{fontSize: 23, fontFamily: FontFamily.poppinsMedium, color: '#fff'}}>Settings</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: -25}}>
        <Image source={require('../assets/arrow2.png')} style={{width: 20, height: 20}}/>
      </View>

      <View style={styles.baseContainer}>
      <ImageBackground
        source={require('../assets/base.png')}
        style={{width: '100%', height: '70%'}}
      >

        <View style={{flexDirection: 'row', padding: 40}}>
          <Image 
            source={require('../assets/circle1.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={{color: '#fff', fontSize: 17}}>   Language</Text>
          <Image 
            source={require('../assets/arrow.png')}
            style={{width: 10, height: 20, marginLeft: '55%'}}
          />
        </View>
        <View style={{justifyContent:'center', alignItems: 'center', marginTop: -40}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>     ___________________________</Text>
        </View>

        <View style={{flexDirection: 'row', padding: 40, marginTop: -30}}>
          <Image 
            source={require('../assets/currency.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={{color: '#fff', fontSize: 17}}>   Currency</Text>
          <Image 
            source={require('../assets/arrow.png')}
            style={{width: 10, height: 20, marginLeft: '58%'}}
          />
        </View>
        <View style={{justifyContent:'center', alignItems: 'center', marginTop: -40}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>     ___________________________</Text>
        </View>


        <View style={{flexDirection: 'row', padding: 40, marginTop: -30}}>
         
          <Text style={{color: '#fff', fontSize: 17, marginLeft: '13%'}}>Change PIN</Text>
          <Image 
            source={require('../assets/arrow.png')}
            style={{width: 10, height: 20, marginLeft: '50%'}}
          />
        </View>

      </ImageBackground>
      </View>

      <View style={styles.base1Container}>
      <ImageBackground
        source={require('../assets/base1.png')}
        style={{width: '100%', height: '50%'}}
      >
         <View style={{flexDirection: 'row', padding: 40, marginTop: 10}}>
          <Image 
            source={require('../assets/dark.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={{color: '#fff', fontSize: 17}}>   Dark Mode</Text>
          <Image 
            source={require('../assets/switch.png')}
            style={{width: 30, height: 40, marginLeft: '50%'}}
          />
        </View>
       
      </ImageBackground>
      </View>

      <View style={styles.base2Container}>
      <ImageBackground
        source={require('../assets/base2.png')}
        style={{width: '100%', height: '50%'}}
      >

      <View style={{flexDirection: 'row', padding: 40, marginTop: -20}}>
          <Image 
            source={require('../assets/circle1.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={{color: '#fff', fontSize: 17}}>   About us</Text>
          <Image 
            source={require('../assets/arrow.png')}
            style={{width: 10, height: 20, marginLeft: '58%'}}
          />
        </View>
        <View style={{justifyContent:'center', alignItems: 'center', marginTop: -40}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>     ___________________________</Text>
        </View>


        <View style={{flexDirection: 'row', padding: 40, marginTop: -30}}>
        <Image 
            source={require('../assets/off.png')}
            style={{width: 25, height: 25}}
          />
          <Text style={{color: '#FF6060', fontSize: 17, marginLeft: '5%'}}>Logout</Text>
          <Image 
            source={require('../assets/arrow.png')}
            style={{width: 10, height: 20, marginLeft: '63%'}}
          />
        </View>

      </ImageBackground>
      </View>

      



      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  baseContainer:{
    paddingHorizontal: 10,
    marginTop: 80
  },
  base1Container:{
    paddingHorizontal: 10,
    marginTop: -250
  },
  base2Container:{
    paddingHorizontal: 10,
    marginTop: '-95%'
  },

});

export default Settings;