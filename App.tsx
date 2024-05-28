import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './src/styles/global.css'
import { Home } from './src/pages/Home';
<<<<<<< HEAD
import { Treino } from './src/pages/Treino';
=======
>>>>>>> 2f741ecaed913149172d24145e0e55a053e2ccb3

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium
 } from '@expo-google-fonts/montserrat';

<<<<<<< HEAD
 import {
  IBMPlexSans_100Thin,
  IBMPlexSans_100Thin_Italic,
  IBMPlexSans_200ExtraLight,
  IBMPlexSans_200ExtraLight_Italic,
  IBMPlexSans_300Light,
  IBMPlexSans_300Light_Italic,
  IBMPlexSans_400Regular,
  IBMPlexSans_400Regular_Italic,
  IBMPlexSans_500Medium,
  IBMPlexSans_500Medium_Italic,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_600SemiBold_Italic,
  IBMPlexSans_700Bold,
  IBMPlexSans_700Bold_Italic,
} from '@expo-google-fonts/ibm-plex-sans';

=======
>>>>>>> 2f741ecaed913149172d24145e0e55a053e2ccb3
export default function App() {
  const [fontsLoaded] = useFonts(
    {
      Montserrat_400Regular,
<<<<<<< HEAD
      Montserrat_500Medium,
      IBMPlexSans_400Regular,
      IBMPlexSans_500Medium
=======
      Montserrat_500Medium
>>>>>>> 2f741ecaed913149172d24145e0e55a053e2ccb3
    }
  )
  return (
    <>
    <StatusBar backgroundColor={'#111112'} style="light" translucent/>
    {
<<<<<<< HEAD
      fontsLoaded? <Treino/> : ''
=======
      fontsLoaded? <Home /> : ''
>>>>>>> 2f741ecaed913149172d24145e0e55a053e2ccb3
    }
    
    </>
  );
}
