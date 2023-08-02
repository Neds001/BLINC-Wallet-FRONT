import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"
import { FontFamily } from '../GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'

const ScanQR = () => {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 20}}>
      <Text style={{fontSize: 23, fontFamily: FontFamily.poppinsMedium}}>Scan QR Code</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, marginTop: -40}}>
        <Ionicons name='arrow-back-sharp' size={30}/>
      </View>
      <LinearGradient
      style={styles.gradientBackG}
      locations={[0, 0.5, 1]}
      colors={["#fff", "#ffeff5", "#fafaff"]}
      useAngle={true}
      angle={180}
      >
      
         <Image
          source={require('../assets/qr-code.png')}
          style={{
            width: '60%',
            height: '60%',
            marginLeft: '20%',
            marginTop: -30
          }}
        />
     
      </LinearGradient>

      <View style={{justifyContent: 'center',
            alignItems:'center', 
            flexDirection: 'row',
            backgroundColor: 'rbga(255,255,255,1)',
            borderRadius: 10,
            marginHorizontal: 100,
            marginTop: -20,
            padding: 3,
            }}>
        <Image
          source={require('../assets/iconqr.png')}
          style={{width: 20, height: 20}}
        />
        <Text style={{marginLeft: 5}}>Scanning QR Code...</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image
          source={require('../assets/flash.png')}
          style={{height: '32%', width: '20%'}}
        />
      </View>
     
     <TouchableOpacity style={styles.nextContainer}>
          <Text style={styles.nextText}>Next</Text>
     </TouchableOpacity>

      
    </View>
  )
}

export default ScanQR

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  gradientBackG: {
    width: '100%',
    justifyContent: 'center',
    height: "53.94%",
    top: "10%",
    bottom: "34.73%",  
  },
  nextContainer: {
    marginTop: -130,
    backgroundColor: '#FD8FB0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 20
  },
  nextText:{
    color: '#fff',
    fontSize: 20,
    padding: 10
  }
})