import * as React from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles1";
import { Image } from "expo-image";
import { AntDesign, MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons"

const Request = () => {

    const navigation = useNavigation()
    const backButton = () =>{
      navigation.navigate("Footbar")
    }
    const detailsButton = () =>{
        navigation.navigate("Details")
      }

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="#141414" />
        <ImageBackground 
            source={require('../assets/bg.png')}
            style={{flex: 1}}
        >
        
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
        <Text style={{fontSize: 23, fontFamily: FontFamily.poppinsMedium, color: '#fff'}}>Request Funds</Text>
        </View>
            <TouchableOpacity 
            onPress={backButton}
            style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, marginTop: -25}}>
                <Image source={require('../assets/close.png')} style={{width: 25, height: 25}}/>
            </TouchableOpacity>

            <View style={{flexDirection: 'column', alignItems: 'center', marginTop: '20%'}}>
                <Text style={{color: '#fff', fontSize: 20}}>AMOUNT</Text>
                <Text style={{color: '#fff', fontSize: 60, fontWeight: 'bold'}}>666.00</Text>
                <Text style={{color: '#fff'}}>_________________________________________________</Text>
            </View>

            <View style={{alignItems:'center', marginTop: 60}}>
                <View style={styles.numpadContainer}>
                    <View style={{marginTop: 20}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text style={{color: '#fff', fontSize: 50}}>1</Text>
                        <Text style={{color: '#fff', fontSize: 50}}>2</Text>
                        <Text style={{color: '#fff', fontSize: 50}}>3</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text style={{color: '#fff', fontSize: 50}}>4</Text>
                        <Text style={{color: '#fff', fontSize: 50}}>5</Text>
                        <Text style={{color: '#fff', fontSize: 50}}>6</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text style={{color: '#fff', fontSize: 50}}>7</Text>
                        <Text style={{color: '#fff', fontSize: 50}}>8</Text>
                        <Text style={{color: '#fff', fontSize: 50}}>9</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <Text style={{color: 'rgba(255,255,255,0)', fontSize: 50}}>0</Text>
                        <Text style={{color: '#fff', fontSize: 50}}>0</Text>
                        <Feather
                            name="delete" size={30}
                            style={{color: '#fff', marginTop: 20}}
                        />
                    </View>
                    </View>

                    <TouchableOpacity 
                    onPress={detailsButton}
                    style={styles.buttonContainer}>
                        <Text style={{fontWeight: 'bold', fontSize: 15}}>PROCEED</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </ImageBackground>
    </View>
  )
}

export default Request

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    numpadContainer:{
        backgroundColor: 'rgba(255,255,255,0.2)',
        width: '100%',
        height: '100%',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginHorizontal: 40,
        marginTop: 30
    },

})