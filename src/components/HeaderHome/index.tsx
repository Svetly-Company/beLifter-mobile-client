import { Image, Text, View } from "react-native";
import {Bell} from "phosphor-react-native"

export function HeaderHome(){
  return(
    <View className="p-6 flex-row justify-around items-top">
      <Image source={require('../../assets/moca.jpg')} className="w-14 h-14 rounded-full" />
      <View className="">
        <Text className="text-white text-2xl">Olá <Text className="text-green-400 font-medium">Graciane Barbosa,</Text></Text>
        <Text className="text-white text-lg font-regular font-thin" >Bom dia.</Text>
      </View>
      <Bell color="white" weight="bold" size={28}/>

    </View>
  )
}