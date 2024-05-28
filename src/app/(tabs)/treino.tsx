import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { CheckDay } from "../../components/CheckDay";
import { ArrowCircleRight, ClipboardText, CheckFat } from "phosphor-react-native";

export default function Treino(){
    return(
      <SafeAreaView style={{flex: 1}}>
        <View className="bg-gray-950 flex-1">
          <HeaderHome />
          <View className="mt-8 px-8">
            <View className="flex gap-2 flex-col">
                <View className="flex flex-row">
                <Text className="flex-1 font-ibmRegular text-white text-xl">Frequência de Treino</Text>
                    <TouchableOpacity>
                        <ArrowCircleRight color="white" size={15}/>
                    </TouchableOpacity>
                </View>
                <View className="flex gap-4 mt-2 flex-row justify-start">
                    <CheckDay checked={true}>DOM</CheckDay>
                </View>
            </View>
          </View>

        </View>
        
      </SafeAreaView>
    )
  }