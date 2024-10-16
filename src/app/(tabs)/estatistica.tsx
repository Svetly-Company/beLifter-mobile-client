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

const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527612,
    color: "#afa",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];


export default function Stats() {
  const [statsData, setStatsData] = useState<StatsModel[]>([])

  const user = userStorage((state) => state.user)

  let week = getWeek();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0D0D0D' }}>
      <View className="flex-row h-40 w-full items-center justify-between p-6 ">
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
        <CircularChart />
      </View>
      <View className="bg-[#151415] h-20 rounded-b-3xl flex-row items-center justify-around">
        <View className="items-center">
          <View className="flex-row items-center">
            <Circle color="#00BF63" weight="fill" size={18}></Circle>
            <Text className="text-white font-medium">Proteínas</Text>
          </View>
          <Text className="text-white font-medium">75g | 100%</Text>
        </View>

        <View className="items-center">
          <View className="flex-row items-center">
            <Circle color="#FFC107" weight="fill" size={18}></Circle>
            <Text className="text-white font-medium">Carbidratos</Text>
          </View>
          <Text className="text-white font-medium">0g | 0kcal</Text>
        </View>

        <View className="items-center">
          <View className="flex-row items-center">
            <Circle color="#FF3D00" weight="fill" size={18}></Circle>
            <Text className="text-white font-medium">Gorduras</Text>
          </View>
          <Text className="text-white font-medium">0g | 0%</Text>
        </View>
      </View>
      
      <BoxModel title="Minha dieta" type="dieta" desc="Monitore sua dieta"/>


    </SafeAreaView>
  )
}


