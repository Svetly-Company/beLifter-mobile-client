import {Text, View, ImageBackground, TouchableOpacity, StyleSheet  } from "react-native";
import { Image } from "expo-image";
import {Bell, CaretRight} from "phosphor-react-native"
import { Link, router } from "expo-router";

interface userProps{
  id: number,
  name: string
  email: string,
  exp: number,
  iat: number,
  token: string,
  profilePicture: string
}

interface identify{
  link: string
}

interface HeaderHomeParams{
  user?: userProps | undefined
  link?: string
}

export default function HeaderHome({user, link} : HeaderHomeParams){


  function handleNavigate(){
    router.navigate(link ? link : '/comunidade')
  }

  return(
    <View className="bg-neutral-900 pb-4" style={styles.borderStyle}>
        {
          user ? 
          <View className="py-6 flex-row justify-around items-center">
          <TouchableOpacity onPress={() => router.navigate("../academyProfile")}>
            <Image source={user.profilePicture} style={{width: 48, height: 48, borderRadius: 100}} />
          </TouchableOpacity>
          <View className="items-center">
            <Text className="text-[#C6C6C6] font-ibmRegular">Bem vindo(a),</Text>
            <Text className="text-[#00BF63] text-xl font-ibmMedium font-semibold tracking-wide capitalize">{user.name}</Text>
          </View>
          <Bell size={28} color="#f5f5f5" />

        </View>
        :
        <View className="p-6 flex-row justify-between items-center">
          
            <Image source={require('../../assets/moca.jpg')} className="w-14 h-14 rounded-full" />

            <Bell size={28} color="#f5f5f5" />

        </View>
        }
        
        <View className="mt-8 mb-2">
        <View className="flex-row px-8 mb-2 justify-between">
          <Text className="text-xl mb-2 text-gray-300 font-ibmMedium">É hora de treinar!</Text>
          <Text className="text-xl mb-2 text-white font-ibmMedium">1/4</Text>
        </View>
        <View className="w-max h-52 px-6 border-box ">
          <ImageBackground className="flex-1 justify-end rounded-3xl p-4
          " source={require('../../assets/mulherTreinando.webp')} resizeMode="cover" imageStyle={{borderRadius: 20}}>
            <View className="flex flex-row justify-between px-2">
              <View >
                <Text className="text-white text-xl font-ibmMedium drop-shadow-lg">Treino de Hoje(B)</Text>
                <Text className="text-slate-200 font-ibmRegular font-thin drop-shadow-lg">Abdomen, Peito e Biceps</Text>
              </View>     

              <TouchableOpacity onPress={handleNavigate}> 
                  <View className="bg-GrayButton p-2 rounded-full"><CaretRight color="white" size={35}/></View>
              </TouchableOpacity>
            </View>

          </ImageBackground>
        </View>           
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  borderStyle: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});