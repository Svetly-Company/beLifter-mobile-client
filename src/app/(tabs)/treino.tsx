import { Text, View, ScrollView, TouchableHighlight, Image, ImageSourcePropType } from "react-native";
import { CaretDown, CaretUp } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome  from "../../components/HeaderHome";
import { Frequency } from "../../components/Frequency";
import { Workouts } from "../../components/Workouts";
import { useEffect, useState } from "react";
import { userStorage } from "../../storage/zustand/store";
import axios from "axios";
import { useQuery } from "react-query";
import { FlatList } from "react-native-gesture-handler";

const date = new Date()
const dayOfWeek = date.getDay()

interface exercisesModel {
  name: string,
  description: string,
  idExercise: number,
  image: ImageSourcePropType
}

interface scheduleModel {
  idWorkout: number,
  name: string,
  description: string
  image: ImageSourcePropType,
  image2: ImageSourcePropType,
  exercises: exercisesModel[]
}

export default function Treino(){
    let [status, setStatus] = useState(false);
    const user = userStorage((state) => state.user)
    const [schedule, setSchedule] = useState<scheduleModel[]>()
    const [scheduleExercises, setScheduleExercises] = useState<exercisesModel[]>()


    const {data : userSchedule, refetch} = useQuery('workouts/all', async()=> {
      return await axios.get('https://belifter-server.onrender.com/workout',
          {
              headers: {
                  'Authorization': `Bearer ${user.token}`
              }
          })
    })

  useEffect(() => {
    if(userSchedule){
      setSchedule(userSchedule.data)
      setScheduleExercises(userSchedule.data[0].exercises)
    }
  }, [])

    function toggleStatus(){
      setStatus(!status)
      console.log(scheduleExercises)
    }
    return(
        <SafeAreaView style={{flex: 1}}>
          <ScrollView className="bg-gray-950 flex-1">
          <HeaderHome/>
          <Frequency />
          <View className="flex gap-2 flex-col mt-8">
            <Text className=" px-8 lex-1 font-ibmRegular text-white text-x">Fichas de Treino</Text>
            {
              schedule && scheduleExercises ? <FlatList data={schedule} renderItem={({item}) => <Workouts source={item.image} text={item.name} description={item.description} id={item.idWorkout} exerciseInfo={item.exercises} bodyPart={item.image2}></Workouts>} keyExtractor={item => item.idWorkout.toString()} horizontal/> : <View></View>
            }
            
            <View className="flex gap-2 flex-col mt-8 px-8 pb-24">
              <View className="flex flex-row justify-between">
                <Text className="text-gray-300 font-ibmMedium">Criada por:</Text>
                <View className="flex flex-row">
                  <Text className="font-ibmMedium text-gray-300">Ver histórico</Text>
                  <TouchableHighlight onPress={() =>toggleStatus()}>
                    { status ? <CaretUp color="white" size={18} weight="fill"/> : <CaretDown color="white" size={19} weight="fill"/>}
                  </TouchableHighlight>
                </View>
              </View>
              <View>
              {
                status ?
                <View className="flex flex-col my-2">
                  <View className="flex-row justify-between items-center px-5">
                    <View className="flex flex-row gap-5 items-center">
                      <Image source={require('../../assets/moca.jpg')} className="w-10 h-10 rounded-full" />
                      <Text className="text-gray-300 font-ibmRegular">Haulices Dalberto Solza</Text>
                    </View>
                    <Text className="text-gray-300 font-ibmRegular">01/05</Text>
                  </View>
                </View>
                :
                <View/>
              }
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}