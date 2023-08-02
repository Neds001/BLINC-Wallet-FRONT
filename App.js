import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Footbar from './screens/Footbar';
import Profile from './screens/Profile';
import Request from './screens/Request';
import Details from './screens/Details';
import SendFunds from './screens/SendFunds';
import ErrorScreen from './screens/ErrorScreen';
import Send from './screens/Send';


export default function App() {

  const Stack = createNativeStackNavigator();
  const [fontsLoaded, error] = useFonts({ 
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Lato_regular: require("./assets/fonts/Lato_regular.ttf"),
    Lato_semibold: require("./assets/fonts/Lato_semibold.ttf"),
    josefinSansMedium: require("./assets/fonts/Josefin_Sans_medium.ttf"),
  });





  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Footbar" component={Footbar} />
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
        <Stack.Screen options={{ headerShown: false }} name="Request" component={Request} />
        <Stack.Screen options={{ headerShown: false }} name="Details" component={Details} />
        <Stack.Screen options={{ headerShown: false }} name="SendFunds" component={SendFunds} />
        <Stack.Screen options={{ headerShown: false }} name="ErrorScreen" component={ErrorScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Send" component={Send} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
