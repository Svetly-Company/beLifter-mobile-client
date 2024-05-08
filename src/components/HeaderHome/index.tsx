import { Image, Text, View, ImageBackground, TouchableOpacity,  } from "react-native";
import {Bell, ArrowCircleRight} from "phosphor-react-native"

export function HeaderHome(){
  return(
    <View className="bg-neutral-900 pb-4 rounded-b-3xl">
        <View className="p-6 flex-row justify-around items-center">
          <Image source={require('../../assets/moca.jpg')} className="w-14 h-14 rounded-full" />
          <View className="items-center">
            <Text className="text-white text-xl font-ibmRegular">Bem-vindo</Text>
            <Text className="text-green-400  text-2xl font-ibmMedium font-semibold">Graciane Barbosa,</Text>
          </View>
          <Bell color="white" weight="bold" size={28}/>

        </View>
        
        <View className="mt-8 mb-2">
        <View className="flex-row px-8 mb-2 justify-between">
          <Text className="text-xl mb-2 text-gray-300 font-ibmMedium">É hora de treinar!</Text>
          <Text className="text-xl mb-2 text-white font-ibmMedium">1/4</Text>
        </View>
        <View className="w-max h-52 px-6 border-box ">
          <ImageBackground className="flex-1 justify-end rounded-3xl p-4
          " source={require('../../assets/mulherTreinando.jpg')} resizeMode="cover" imageStyle={{borderRadius: 20}}>
            <View className="flex flex-row justify-between px-2">
              <View >
                <Text className="text-white text-xl font-ibmMedium drop-shadow-lg">Treino de Hoje(B)</Text>
                <Text className="text-slate-200 font-ibmRegular font-thin drop-shadow-lg">Abdomen, Peito e Biceps</Text>
              </View>     

              <TouchableOpacity><ArrowCircleRight color="white" size={42}/></TouchableOpacity>
            </View>

          </ImageBackground>
        </View>           
      </View>
    </View>
    
  )
}