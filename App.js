import React from 'react';
import Home from './src/screens/Home';

import AppLoading from 'expo-app-loading';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_400Regular_Italic, 
  Roboto_700Bold,
  Roboto_700Bold_Italic
} from '@expo-google-fonts/roboto';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_400Regular_Italic, 
    Roboto_700Bold,
    Roboto_700Bold_Italic
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }else{
    return <Home />
  }
}