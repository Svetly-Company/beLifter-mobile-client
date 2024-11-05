import { Image } from "expo-image";
import { Text, View } from "react-native";
import { Bell, Circle } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CheckDay } from "../../components/CheckDay";
import { getWeek } from "../../classes/WeekDays/WeekDays";
import { getDayOfWeek } from "../../classes/WeekDays/WeekDays";
import {PolarChart, Pie} from 'victory-native'
import { useState } from "react";
import { userStorage } from "../../storage/zustand/store";
import CircularChart from "../../components/PieChart";
import { BoxModel } from "../../components/BoxModel";
import { useQuery } from "react-query"
import axios from "axios"



interface selectProps {
  status: 'checked' | 'unchecked'
  children?: React.ReactNode,
  date: Number;
}

interface StatsModel{
  carbo: number,
  gordu: number,
  protein: number,
  calories:  number
}


function SelectDay({ status, children, date }: selectProps) {
  return (
    <View className="flex flex-col items-center">
      <View className={`flex flex-col justify-center items-center h-12 w-12 rounded-full 
        ${{
          'checked': "bg-green-800",
          'unchecked': "bg-gray-1000"
        }[status]
        } p-1`}>
        <Text className="font-ibmRegular text-white font-bold">{children}</Text>
        <Text className="text-white font-light">{date.toString()}</Text>

      </View>

    </View>
  )
}

export default function Stats() {
  const [statsData, setStatsData] = useState<StatsModel[]>([])

  const user = userStorage((state) => state.user)

  const {data, refetch} = useQuery('stats', async()=> {
    return await axios.get('https://belifter-server.onrender.com/workout/stats',
        {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
})
  const dt = data?.data || {"carbo": 32, gordu: 32, prot: 21, calori: 52}
  const apiValues = Object.values(dt)
  const calories = apiValues.pop()

  let week = getWeek();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0D0D0D' }}>
      <View className="flex-row h-32 w-full items-center justify-between p-6 ">
        <Image style={{ height: 50, width: 100 }} source={require("../../assets/beLiftSvg.svg")}></Image>
        <View className="flex-row gap-3 items-center">
          <Bell color="#fff" size={32} />
          <Image style={{ height: 38, width: 38 }} source={require("../../assets/uil_message.svg")}></Image>
        </View>
      </View>
 
      <View className="flex gap-3 mt-2 flex-row justify-center">
        <SelectDay date={week[0]} status="unchecked">D</SelectDay>
        <SelectDay date={week[1]} status="unchecked">S</SelectDay>
        <SelectDay date={week[2]} status="checked">T</SelectDay>
        <SelectDay date={week[3]} status="unchecked">Q</SelectDay>
        <SelectDay date={week[4]} status="unchecked">Q</SelectDay>
        <SelectDay date={week[5]} status="unchecked">S</SelectDay>
        <SelectDay date={week[6]} status="unchecked">S</SelectDay>

      </View>


      <View className="w-full items-center justify-center mt-20 mb-4">
        <CircularChart apiValues={apiValues}/>
      </View>
      <View className="bg-[#151415] h-20 rounded-b-3xl flex-row items-center justify-around">
        <View className="items-center">
          <View className="flex-row items-center">
            <Circle color="#00BF63" weight="fill" size={18}></Circle>
            <Text className="text-white font-medium">Proteínas</Text>
          </View>
          <Text className="text-white font-medium">{String(apiValues[2])}g | 100%</Text>
        </View>

        <View className="items-center">
          <View className="flex-row items-center">
            <Circle color="#FFC107" weight="fill" size={18}></Circle>
            <Text className="text-white font-medium">Carbidratos</Text>
          </View>
          <Text className="text-white font-medium">{String(apiValues[0])}g | 0kcal</Text>
        </View>

        <View className="items-center">
          <View className="flex-row items-center">
            <Circle color="#FF3D00" weight="fill" size={18}></Circle>
            <Text className="text-white font-medium">Gorduras</Text>
          </View>
          <Text className="text-white font-medium">{String(apiValues[1])}g | 0%</Text>
        </View>
      </View>
      
      <BoxModel title="Minha dieta" type="dieta" desc="Monitore sua dieta"/>


    </SafeAreaView>
  )
}


