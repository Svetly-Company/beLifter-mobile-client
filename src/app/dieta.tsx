import { CaretLeft, CaretRight, Fire } from "phosphor-react-native";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Link } from "expo-router";

export default function Dieta() {

    const days = [["DOM", 1], ["SEG", 1], ["TER", 0], ["QUA", 0], ["QUI", 0], ["SEX", 0], ["SAB", 0]]

    return <View className="bg-[#1E1E1E] flex-1 flex gap-16">
        <View className="bg-[#151415] p-8 flex flex-col rounded-b-3xl">
            <View className="flex h-min flex-row items-center text-center gap-4">
                <View className="">
                    <View className="bg-[#302C30] p-2 rounded-full">
                        <TouchableOpacity className="">
                            <Link href={"/estatistica"}>
                                <CaretLeft size={16} color="#fff" />
                            </Link>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View className="flex flex-row">
                    <View className="">
                        <Text className="font-ibmMedium text-xl text-white">Minha dieta</Text>
                    </View>
                </View>
            </View>
            <View className="mt-8">
                <View className="flex flex-row justify-between items-center">
                    <Text className="text-white text-xl">Frequência de dieta</Text>
                    <View className="bg-[#302C30] rounded-full p-2">
                        <CaretRight size={12} color="#fff" />
                    </View>
                </View>
                <View className="flex flex-row justify-around py-4">
                    {
                        days.map((d, i) => (
                            <View className="flex flex-col justify-center items-center gap-2" key={i}>
                                <Text className="text-white text-lg">{d[0]}</Text>
                                {d[1] ? <View className="bg-[#00592E] p-2 rounded-full">
                                    <Fire weight="fill" size={24} color="#FFB300" />
                                </View> : <View className="bg-[#3E3E3E] flex items-center justify-center w-10 h-10 rounded-full">
                                    <Text className="text-white">{3+i}</Text>
                                </View>}
                                
                            </View>
                        ))
                    }
                </View>
            </View>
        </View>
    </View>
}