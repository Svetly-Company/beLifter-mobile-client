import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderHome } from "../../components/HeaderHome";
import { ArrowCircleRight, ClipboardText } from "phosphor-react-native";

export function Home(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <View className="bg-gray-950 flex-1">
        <HeaderHome />

        <View className="mt-8 px-8">
          <View className="flex bg-zinc-800 py-8 px-2 rounded-2xl gap-2">
            <View className="flex-row justify-between items-center">
              <ClipboardText color="white" size={64}/>
              <View className="flex gap-1">
                <Text className="font-ibmRegular text-white text-xl">Pendências</Text>
                <Text className="font-regular font-thin text-base text-gray-300">Resolva suas pendencias</Text>
              </View>

              <View className="flex-row bg-gray-800 p-1 rounded-full">
                <TouchableOpacity className="">
                  <ArrowCircleRight color="white" size={42}/>
                </TouchableOpacity>
              </View>
            </View>

            
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  )
}