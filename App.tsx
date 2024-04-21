import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './src/styles/global.css'
import { Home } from './src/pages/Home';

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium
 } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontsLoaded] = useFonts(
    {
      Montserrat_400Regular,
      Montserrat_500Medium
    }
  )
  return (
    <>
    <StatusBar backgroundColor={'#111112'} style="light" translucent/>
    {
      fontsLoaded? <Home /> : ''
    }
    
    </>
  );
}
