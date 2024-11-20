import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Style from './components/Style';
import { useFonts } from 'expo-font';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoadingScreen from './screens/LoadingScreen';
import LocationScreen from './screens/LocationScreen';
import CityScreen from './screens/CityScreen'


export default function App() {
  const [fontsLoaded] = useFonts({
    'spartan-bold': require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    'spartan-light': require("./assets/fonts/LeagueSpartan-Light.ttf"),
  })

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Loading'>
        <Stack.Screen name='Loading' component={LoadingScreen} options={{
          headerShown: false,
        }} />
        <Stack.Screen name='Location' component={LocationScreen} 
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name='CityScreen' component={CityScreen}
        options={{
          headerShown: false,
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

