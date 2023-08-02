import { StyleSheet, Text, View, StatusBar, TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Image } from 'expo-image'
import { AntDesign, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons"
import { FontFamily } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/core'

const MainDashboard = () => {

  const navigation = useNavigation()
  const profileButton = () =>{
    navigation.navigate("Profile")
  }

  const requestButton = () =>{
    navigation.navigate("Request")
  }

  const sendButton = () =>{
    navigation.navigate("SendFunds")
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141414" />
        <LinearGradient
        start={{ x: 0, y: 0,}}
        end={{ x: 1, y: 1 }} 
        colors={['#c26c14','#b92b27','#e31a97','#a032b0','#2b2ba7','#0492af']} 
        style={styles.upperGradientContainer}
        >
          <View style={styles.headerContainer}>
          <TouchableOpacity onPress={profileButton}>
          <Image
            source={require('../assets/john.png')}
            style={{height: 50, width: 50}}
          />
          </TouchableOpacity>
            <View style={{flexDirection: 'column', marginLeft: 10, justifyContent: 'center'}}>
              <Text style={{color: '#fff'}}>Hello!</Text>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 15}}>Juan Dela Cruz</Text>
            </View>
            <TouchableOpacity>
                <Image
                  source={require('../assets/notif.png')}
                  style={styles.notifImg}
                />
            </TouchableOpacity>
          </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: '#fff'}}>Active balance</Text>
              <Text style={{color: '#fff', fontSize: 35}}>$ 10,000.00</Text>
            </View>

          <View style={styles.boxContainer}>
            <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: -25}}>
              <TouchableOpacity style={{backgroundColor: '#FD8FB0', borderRadius: 50, padding: 20}}>
              <AntDesign name='wallet' size={25} color={'#fff'}/>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={sendButton}
              style={{backgroundColor: '#B14FFF', borderRadius: 50, padding: 20}}>
              <MaterialCommunityIcons name='email-send' size={25} color={'#fff'}/>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={requestButton}
              style={{backgroundColor: '#6DC0FC', borderRadius: 50, padding: 20}}>
              <AntDesign name='wallet' size={25} color={'#fff'}/>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor: '#FF8800', borderRadius: 50, padding: 20}}>
              <Ionicons name='grid' size={25} color={'#fff'}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 15, marginTop: -30, marginRight:20}}>
              <Text style={{color: 'black', fontFamily: FontFamily.poppinsMedium}}>Top-up</Text>
              <Text style={{color: 'black', fontFamily: FontFamily.poppinsMedium}}>Transfer</Text>
              <Text style={{color: 'black', fontFamily: FontFamily.poppinsMedium}}>Request</Text>
              <Text style={{color: 'black', fontFamily: FontFamily.poppinsMedium}}>More</Text>
          </View>
        </LinearGradient>

        <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 15, marginTop: 160}}>
          <Text style={{fontSize: 20, fontFamily: FontFamily.poppinsMedium}}>Transactions</Text>
          <TouchableOpacity><Text style={{color: 'rgba(0,0,0,.5)'}}>Sort by ˅</Text></TouchableOpacity>
        </View>

        <View style={styles.transactionContainer}>
          <View style={{backgroundColor: '#FFF3F7', borderRadius: 100, justifyContent: 'center', paddingHorizontal: 10}}>
          <Image
            source={require('../assets/sendfunds.png')}
            style={{width: 30, height: 30, backgroundColor: '#FFF3F7', borderRadius: 50}}
          />
          </View>
          <View style={{flexDirection: 'column', padding: 10, justifyContent:'center', marginTop: -10}}>
            <Text style={{color: '#51382F', fontFamily: FontFamily.poppinsMedium}}>Neds Pogi</Text>
            <Text style={{color: 'rgba(0,0,0,.5)'}}>Send Funds</Text>
          </View>
          <View style={{flexDirection: 'column', padding: 10, justifyContent:'center', marginTop: -10}}>
            <Text style={{color: '#F00055', fontFamily: FontFamily.poppinsMedium}}>                           -499.00</Text>
            <Text style={{color: 'rgba(0,0,0,.5)'}}>                           4 Aug 2023</Text>
          </View>
        </View>

        <View style={styles.transactionContainer}>
          <View style={{backgroundColor: '#EFECFF', borderRadius: 100, justifyContent: 'center', paddingHorizontal: 10}}>
          <Image
            source={require('../assets/bank.png')}
            style={{width: 30, height: 30, backgroundColor: '#FFF3F7', borderRadius: 50}}
          />
          </View>
          <View style={{flexDirection: 'column', padding: 10, justifyContent:'center', marginTop: -10}}>
            <Text style={{color: '#51382F', fontFamily: FontFamily.poppinsMedium}}>Cash In</Text>
            <Text style={{color: 'rgba(0,0,0,.5)'}}>Bank</Text>
          </View>
          <View style={{flexDirection: 'column', padding: 10, justifyContent:'center', marginTop: -10}}>
            <Text style={{color: '#489000', fontFamily: FontFamily.poppinsMedium}}>                                 +250.00</Text>
            <Text style={{color: 'rgba(0,0,0,.5)'}}>                                 4 Aug 2023</Text>
          </View>
        </View>
        
        <View style={styles.transactionContainer}>
          <View style={{backgroundColor: '#FFF3F7', borderRadius: 100, justifyContent: 'center', paddingHorizontal: 10}}>
          <Image
            source={require('../assets/withdraw.png')}
            style={{width: 30, height: 30, backgroundColor: '#FFF3F7', borderRadius: 50}}
          />
          </View>
          <View style={{flexDirection: 'column', padding: 10, justifyContent:'center', marginTop: -10}}>
            <Text style={{color: '#51382F', fontFamily: FontFamily.poppinsMedium}}>Withdraw</Text>
            <Text style={{color: 'rgba(0,0,0,.5)'}}>Credit Card</Text>
          </View>
          <View style={{flexDirection: 'column', padding: 10, justifyContent:'center', marginTop: -10}}>
            <Text style={{color: '#F00055', fontFamily: FontFamily.poppinsMedium}}>                           -500.00</Text>
            <Text style={{color: 'rgba(0,0,0,.5)'}}>                           4 Aug 2023</Text>
          </View>
        </View>
        
        
    </View>
  )
}

export default MainDashboard

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column'
  },
  upperGradientContainer:{
    height: '30%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 4,
   
  },
  headerContainer:{
    flexDirection: 'row',
    padding: 20,
  },
  notifImg:{
    height: 50,
    width: 50,
    marginLeft: '55%'
  },
  boxContainer:{
    backgroundColor: '#fff',
    padding: 20,
    height: '60%',
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 20, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  transactionContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    padding: 10,
    marginTop: 10,
  },
})