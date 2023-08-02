import * as React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles1";
import { Image } from "expo-image";
import { AntDesign, MaterialCommunityIcons, Ionicons, Feather, EvilIcons } from "@expo/vector-icons"

const Details = () => {

    const navigation = useNavigation()
    const backButton = () =>{
      navigation.navigate("Footbar")
    }
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#141414" />

        <View style={{justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: 10}}>
            <TouchableOpacity onPress={backButton}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Done</Text>
            </TouchableOpacity>
            <Text style={{marginLeft: '63%', fontWeight: 'bold', fontSize: 20}}>Details</Text>
            <EvilIcons name="chevron-right" size={40}/>
        </View>

        <View style={{alignItems: 'center', padding: 20, marginTop: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Share payment request</Text>
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
                source={require('../assets/qrdetails.png')}
                style={{width: '80%', height: '61%'}}
            />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: -70}}>
        <Text style={{fontWeight: '600', fontSize: 18}}>Add payment details</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 100}}>
            <ImageBackground 
                source={require('../assets/btn.png')}
                style={{width: 180, height: 90}}
            >
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
                    <Image
                        source={require('../assets/share.png')}
                        style={{width: 40, height: 30}}
                    />
                    <Text style={{color: '#fff', fontWeight: 'bold', letterSpacing: 1}}>Share</Text>
                </View>

            </ImageBackground>

            <ImageBackground 
                source={require('../assets/btn.png')}
                style={{width: 180, height: 90}}
            >
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
                    <Image
                        source={require('../assets/iconcopy.png')}
                        style={{width: 40, height: 30}}
                    />
                    <Text style={{color: '#fff', fontWeight: 'bold', letterSpacing: 1}}>Copy</Text>
                </View>

            </ImageBackground>

        </View>
      
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
})