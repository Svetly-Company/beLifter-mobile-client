import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderHome } from "../../components/HeaderHome";
import { CheckDay } from "../../components/CheckDay";
import { ArrowCircleRight, ClipboardText, CheckFat } from "phosphor-react-native";
import { getDates } from "../../classes/WeekDays/WeekDays";

export function Treino(){
    const week = getDates();
    return(
      <SafeAreaView style={{flex: 1}}>
        <View className="bg-gray-950 flex-1">
          <HeaderHome />
          <View className="mt-8 px-8">
            <View className="flex gap-2 flex-col">
                <View className="flex flex-row">
                  <Text className="flex-1 font-ibmRegular text-white text-x">Frequência de Treino</Text>
                  <TouchableOpacity>
                      <ArrowCircleRight color="white" size={15}/>
                  </TouchableOpacity>
                </View>
                <View className="flex gap-4 mt-2 flex-row justify-center">
                  <CheckDay date={week[1]} checked="unchecked">DOM</CheckDay>
                  <CheckDay date={week[1]} checked="unchecked">SEG</CheckDay>
                  <CheckDay date={week[2]} checked="unchecked">TER</CheckDay>
                  <CheckDay date={week[3]} checked="unchecked">QUA</CheckDay>
                  <CheckDay date={week[4]} checked="unchecked">QUI</CheckDay>
                  <CheckDay date={week[5]} checked="unchecked">SEX</CheckDay>
                  <CheckDay date={week[6]} checked="unchecked">SAB</CheckDay>
                </View>
            </View>
          </View>

        </View>
        
      </SafeAreaView>
    )
  }