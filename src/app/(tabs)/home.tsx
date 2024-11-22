import { ImageBackground, Text, TouchableOpacity, View, ScrollView } from "react-native";
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
    if(e.translationY > 0){
      router.navigate("../post")
    }
  })

  function navigateToWorkout(){
    router.navigate("../subWorkout")
  }

  function navigateToAgenda(){
    router.navigate("../agenda")
  }

  function navigateToAtendimento(){
    router.navigate("../atendimento")
  }

  return(

//    <GestureDetector gesture={pan}>
      <ScrollView style={{flex: 1, paddingBottom: 50}}>
          <View className="bg-gray-950 flex-1 mt-6">
              <HeaderHome user={user} link="../subWorkouts"/>
            <View className="mt-4 mx-4 border-b-2 pb-24 ">
              <BoxModel title="Pendências" desc="Resolva suas pendências" type="pendencias"/>
              <TouchableOpacity onPress={navigateToAgenda}>
                <BoxModel title="Agenda" desc="Veja sua agenda pessoal personalizada de treinos." type="agenda" bgColor/>
              </TouchableOpacity>
              <View className="border-GrayBar mt-4 mx-4 border"></View>
              <TouchableOpacity onPress={navigateToAtendimento}>
                <BoxModel title="Atendimento" desc="Fale com um de nossos especialistas da academia" type="atendimento" bgColor/>
              </TouchableOpacity>
            </View>
          </View>
      </ScrollView>
//    </GestureDetector>
      )
}