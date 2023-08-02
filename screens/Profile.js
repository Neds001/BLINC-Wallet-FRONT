import * as React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles1";
import { Image } from "expo-image";
import { AntDesign, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"

const Profile = () => {

    const navigation = useNavigation()
    const backButton = () =>{
      navigation.navigate("Footbar")
    }

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#141414" />
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
        <Text style={{fontSize: 23, fontFamily: FontFamily.poppinsMedium, color: 'black'}}>Profile</Text>
      </View>
    <TouchableOpacity 
    onPress={backButton}
    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: -25}}>
        <AntDesign name="left" size={30}/>
    </TouchableOpacity>

    <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 20, paddingVertical: 10}}>
        <Image
            source={require('../assets/thumb.png')}
            style={{width:'45%', height: '40%', marginBottom: 10}}
        />
        <Text style={{fontFamily: FontFamily.poppinsMedium, fontSize: 30}}>Juan Dela Cruz</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
                source={require('../assets/icon5.png')}
                style={{width: 10, height: 13}}
            />
            <Text style={{color: '#FD8FB0', marginLeft: 10}}>Baguio, Philippines</Text>
        </View>
    <ImageBackground
        source={require('../assets/btn.png')}
        style={{width: 80, height: 80, alignItems: 'center', justifyContent: 'center'}}
    >
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: -20}}>
            <Image
                source={require('../assets/icon4.png')}
                style={{width: 10, height: 10}}
            />
            <Text style={{letterSpacing: 2, color: '#fff', marginLeft: 5}}>EDIT</Text>
        </View>

    </ImageBackground>
    </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ImageBackground
            source={require('../assets/bgprofile.png')}
            style={{marginTop: -130, height: 440, width: 400}}
        >

        <View style={{flexDirection: 'row', padding: 40}}>
          <Image 
            source={require('../assets/icon3.png')}
            style={{width: 30, height: 20}}
          />
          <Text style={{color: '#fff', fontSize: 17}}>   Switch Accounts</Text>
          <Image 
            source={require('../assets/arrow.png')}
            style={{width: 10, height: 20, marginLeft: '39%'}}
          />
        </View>
        <View style={{justifyContent:'center', alignItems: 'center', marginTop: -40}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>    _____________________________</Text>
        </View>

        <View style={{flexDirection: 'row', padding: 40, marginTop: -10}}>
          <Image 
            source={require('../assets/location.png')}
            style={{width: 20, height: 30}}
          />
          <Text style={{color: '#fff', fontSize: 17}}>     Address</Text>
          <Image  
            source={require('../assets/arrow.png')}
            style={{width: 10, height: 20, marginLeft: '60%'}}
          />
        </View>
        <View style={{justifyContent:'center', alignItems: 'center', marginTop: -40}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>    _____________________________</Text>
        </View>

        <View style={{flexDirection: 'row', padding: 40, marginTop: -10}}>
          <Image 
            source={require('../assets/help.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={{color: '#fff', fontSize: 17}}>    Help Center</Text>
          <Image 
            source={require('../assets/arrow.png')}
            style={{width: 10, height: 20, marginLeft: '50%'}}
          />
        </View>
        <View style={{justifyContent:'center', alignItems: 'center', marginTop: -40}}>
        <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>    _____________________________</Text>
        </View>

        <View style={{flexDirection: 'row', padding: 40, marginTop: -10}}>
          <Image 
            source={require('../assets/settings.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={{color: '#fff', fontSize: 17}}>    Settings</Text>
          <Image 
            source={require('../assets/arrow.png')}
            style={{width: 10, height: 20, marginLeft: '59%'}}
          />
        </View>


            
        </ImageBackground>
        </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff'
    },
})