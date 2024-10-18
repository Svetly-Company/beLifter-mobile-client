import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Contacts } from "../../components/Contacts";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { getUserData } from "../../storage/userData/getUserData";
import axios from "axios";
import { Bell } from "phosphor-react-native";

export default function Mensagens(){
  
  const [cont, setCont] = useState<propContatos[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
    loadUserData()
  }, [])

  async function loadUserData(){
    try{
      const userData = await getUserData()
      const val:propContatos[] = await axios.get("https://belifter-server.onrender.com/chat", { 
        headers: { 'Authorization': `Bearer ${userData.token}`} 
      }).then((res) => {
        if(res.data.status){
          throw new Error(String(res.data.message))
        }
        return res.data;
      }).catch((err) => {throw err})
      setCont(val)
      setLoading(false)
    }catch(err){throw err}
  }

  type propContatos = {
    id:number,
    lastMessageContent:string,
    mediaUrl: string,
    lastMessageDate:string,
    name:string
  }
  
  return(
    <SafeAreaView style={{flex: 1}}>
          <View className="bg-black flex-1 w-full">
            <ScrollView className="w-full">
              <View className="bg-neutral-900 pb-4" style={styles.borderStyle}>
                <View className="p-6 flex-row justify-around items-center">
                  <Image source={require('../../assets/moca.jpg')} className="w-14 h-14 rounded-full"/>
                    <View className="items-center">
                      <Text className="text-white text-xl font-ibmRegular">Bem-vindo,</Text>
                      <Text className="text-green-450 text-2xl font-ibmMedium font-semibold">Graciane Barbosa</Text>
                    </View>
                    <Bell color="white" weight="bold" size={28}/>
                </View>
              </View>
              <View className="flex px-5 mt-2 w-full">
                <Text className="text-white text-[22px] pt-5">Mensagens</Text>
                <View className="mt-2 justify-center items-center w-full">
                  {
                    loading ? 
                      <ActivityIndicator size="large" color="#00BF63" className="mt-72"/>
                    :
                    cont.map((x) => (
                      <Link href={{pathname: "(chat)/[chatid]", params: {chatid: x.id}}} asChild key={x.id}>
                      <TouchableOpacity>
                        <Contacts name={x.name} mediaUrl={x.mediaUrl} lastMessage={x.lastMessageContent} notify/>
                      </TouchableOpacity>
                      </Link>
                    )) 
                  }          
                </View>
              </View>
            </ScrollView>
          </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  borderStyle: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});