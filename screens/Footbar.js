import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomTab from '../components/CustomBottomTabs';
import Settings from './Settings';
import ScanQR from './ScanQR';
import MainDashboard from './MainDashboard';

const Footbar = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props}/>}>
            <Tab.Group
              screenOptions={{
                headerShown: false,
              }}>
                <Tab.Screen 
                options={{tabBarLabel: 'Home'}}
                name="Home" 
                component={MainDashboard}
                />
                <Tab.Screen 
                options={{tabBarLabel: 'Scan'}}
                name="ScanQR" 
                component={ScanQR}
                />
                <Tab.Screen 
                options={{tabBarLabel: 'Settings'}}
                name="Settings" 
                component={Settings}
                />
            </Tab.Group>
        </Tab.Navigator>
  
  )
}

export default Footbar

const styles = StyleSheet.create({

})