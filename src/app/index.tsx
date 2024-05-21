import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderHome } from "../components/HeaderHome";
import { BoxModel } from "../components/BoxModel";
import { CaretRight, ChatCenteredDots } from "phosphor-react-native";
import { Link } from 'expo-router';

export function Home(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <View className="bg-gray-950 flex-1">
        <HeaderHome />
        <Link href={"../Main"}>proxima</Link>
        <View className="mt-8 mx-4 border-b-2 pb-12 border-gray-400">
          <BoxModel title="Pendências" desc="Resolva suas pendências"/>
          <BoxModel title="Atendimento" desc="Fale com um de nossos especialistas da academia" bgColor/>
        </View>
      </View>
      c
    </SafeAreaView>
  )
}