import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { BoxModel } from "../../components/BoxModel";
import { Link, router, useNavigation } from 'expo-router';
import { getUserData } from "../../storage/userData/getUserData";
import { useEffect, useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { userStorage } from "../../storage/zustand/store";

export default function Home(){

  // const [user, setUser] = useState()


  const user = userStorage((state) => state.user)
  // useEffect(()=>{
  //   loadUserData()
  // }, [user])

  // async function loadUserData(){
  //   const userData = await getUserData()

  //   setUser(userData)
  // }
  const pan = Gesture.Pan().runOnJS(true).onEnd((e) => {
    if(e.translationX > 0){
      router.navigate("../post")
    }
  })

  function navigateToWorkout(){
    router.navigate("../subWorkout")
  }

  return(
    
    <GestureDetector gesture={pan}>
      <SafeAreaView style={{flex: 1}}>
        <View className="bg-gray-950 flex-1">
            <HeaderHome user={user} link="../subWorkouts"/>
          <View className="mt-8 mx-4 border-b-2 pb-12 border-gray-400">
            <BoxModel title="Pendências" desc="Resolva suas pendências"/>
            <BoxModel title="Atendimento" desc="Fale com um de nossos especialistas da academia" bgColor/>
          </View>
        </View>
      </SafeAreaView>
    </GestureDetector>
  )
}