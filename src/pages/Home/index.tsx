import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderHome } from "../../components/HeaderHome";
import { ArrowCircleRight, ClipboardText } from "phosphor-react-native";

export function Home(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <View className="bg-gray-800 flex-1">
        <HeaderHome />
        <View className="mt-8">
          <View className="flex-row px-12 justify-between">
            <Text className="text-xl text-white font-medium">É hora de treinar!</Text>
            <Text className="text-xl text-white font-medium">1/4</Text>
          </View>
          <View className="w-max h-64 px-8 border-box">
            <ImageBackground className="flex-1 flex justify-end rounded-sm p-4" source={require('../../assets/mulherTreinando.jpg')} resizeMode="cover" imageStyle={{borderRadius: 20}}>
              <View className="flex flex-row justify-between px-2">
                <View >
                  <Text className="text-white text-xl font-medium">Treino de Hoje(B)</Text>
                  <Text className="text-slate-200 font-regular font-thin">Abdomen, Peito e Biceps</Text>
                </View>     

                <TouchableOpacity><ArrowCircleRight color="white" size={42}/></TouchableOpacity>
              </View>

            </ImageBackground>
          </View>           
        </View>
        <View className="mt-8 px-8">
          <Text className="text-xl text-white font-medium">Pendências</Text>
          <View className="flex bg-zinc-800 py-8 px-2 rounded-2xl gap-2">
            <View className="flex-row items-center">
              <ClipboardText color="white" size={64}/>
              <View className="flex gap-1">
                <Text className="font-medium text-white text-lg">Matricula proxima ao vencimento!</Text>
                <Text className="font-regular font-thin text-base text-white">vencimento: 28/09</Text>
              </View>
            </View>
            <View className="-mt-8 flex justify-start items-end">
              <TouchableOpacity>
                <ArrowCircleRight color="white" size={42}/>
              </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </View>
      
    </SafeAreaView>
  )
}