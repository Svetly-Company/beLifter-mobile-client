import { CaretLeft, CaretRight, Fire, Moon, Sun, X } from "phosphor-react-native";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Link } from "expo-router";

interface alimentoItems {
    name: string,
    weight: number,
    calories: number
} 

function AlimentoBox({ items, name, color } : { name: string, color: string, items: alimentoItems[] }) {

    function getTotalCalories(list : alimentoItems[]) {
        return list.reduce((total, item) => total + item.calories, 0);
    }

    return (
        <View className="bg-[#151415] p-8 flex flex-col rounded-3xl m-4">
            <View className="flex h-min flex-row justify-between items-center text-center gap-4 border-b-[1px] pb-4 border-[#322E33]">
                <View className="flex flex-row gap-2">
                    <View className="">
                        <Sun size={24} color={color} weight="fill" />
                    </View>
                    <View className="flex flex-row">
                        <View className="">
                            <Text className="font-ibmMedium text-xl text-white">{name}</Text>
                        </View>
                    </View>
                </View>
                <View className="flex flex-col items-center">
                    <Text className="text-white text-xl">{getTotalCalories(items)}</Text>
                    <Text className="text-[#909090] text-xl">Calorias</Text>
                </View>
            </View>
            <View className="p-4 mt-2 flex flex-col gap-6">
                {items.map(item => (<View key={item.name} className="flex flex-row justify-between items-center">
                    <View>
                        <Text className="text-white text-xl">{item.name}</Text>
                        <Text className="text-[#00BF63] text-base">1 unidade, {item.weight}g</Text>
                    </View>
                    <View>
                        <Text className="text-[#ADADAD] text-lg">{item.calories}kcal</Text>
                    </View>
                    <View>
                        <View className="bg-[#302C30] p-2 rounded-full">
                            <X size={12} color="#fff" />
                        </View>
                    </View>
                </View>))}
            </View>
        </View>
    )
}

export default function Dieta() {

    const days = [["DOM", 1], ["SEG", 1], ["TER", 0], ["QUA", 0], ["QUI", 0], ["SEX", 0], ["SAB", 0]]

    const cafeDaManha : alimentoItems[] = [
        {
            name: "Waffle de proteína",
            weight: 100,
            calories: 300
        }
    ]
    const almoco : alimentoItems[] = [
        {
            name: "Arroz",
            weight: 400,
            calories: 600
        },
        {
            name: "Feijão",
            weight: 300,
            calories: 400
        },
        {
            name: "Frango",
            weight: 200,
            calories: 700
        },
    ]
    const janta : alimentoItems[] = [
        {
            name: "Cuscuz",
            weight: 500,
            calories: 600
        },
        {
            name: "Picanha",
            weight: 400,
            calories: 700
        }
    ]

    return <ScrollView className="bg-[#1E1E1E] flex-1 flex flex-col gap-2">
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
        <AlimentoBox items={cafeDaManha} color="#FEDE7B" name="Café da manhã" />
        <AlimentoBox items={almoco} color="#DA6135" name="Almoço" />
        <AlimentoBox items={janta} color="#441055" name="Jantar" />
    </ScrollView>
}