import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { Link, useRouter } from "expo-router";
import { CaretLeft, CaretRight, Fire, MagnifyingGlass, Moon, Plus, Sun, X } from "phosphor-react-native";
import { useState } from "react";
import { alimentosStorage } from "../storage/zustand/store";

export interface IAlimento {
    name: string,
    kcal: number,
    weight: number,
    imageUrl?: string
}

function AlimentoContainer({ name, kcal, weight, imageUrl } : IAlimento) {

    const alimentosDB = alimentosStorage()
    const router = useRouter();

    function addAlimento() {
        if(!alimentosDB.cafe.find((a : IAlimento) => { return a.name == name })) alimentosDB.addCafe({name, kcal, weight})
        router.push('/dieta');
    }

    return (<View className="flex flex-row justify-between items-center flex-1 bg-[#151415] w-full p-4 rounded-2xl">
        <Image src={imageUrl} className="w-16 h-16 rounded-full" />
        <View className="flex flex-row gap-2 flex-1 px-6 justify-between">
            <Text className="text-xl text-white">{name}</Text>
            <Text className="text-lg text-white">{kcal}Kcal</Text>
        </View>
        <TouchableOpacity onPress={addAlimento}>
            <View className="bg-[#302C30] rounded-full p-2">
                <Plus size={20} color="#fff" />
            </View>
        </TouchableOpacity>
    </View>)
}

export default function Alimentos() {

    const alimentos : IAlimento[] = [
        {
            name: "Filé de frango",
            imageUrl: "https://espetinhodesucesso.com/wp-content/uploads/2022/06/como-se-tempera-file-de-frango.jpg",
            weight: 200,
            kcal: 200
        },
        {
            name: "Arroz",
            imageUrl: "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2021/02/04/1572294240-aprenda-como-fazer-um-arroz-dos-deuses-fonte-pinterest-500x500.jpg",
            weight: 500,
            kcal: 400
        },
        {
            name: "Cuscuz",
            imageUrl: "https://i.panelinha.com.br/i1/bk-6690-cuscuz-de-milho-receita.webp",
            kcal: 300,
            weight: 200
        },
        {
            name: "Waffles",
            imageUrl: "https://www.allrecipes.com/thmb/almzQC6_QEQfJL6xTrhaZxYpRfc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/233920-Tender-Easy-Buttermilk-Waffles-DDMFS-Step2x1-0126-432e212a342e4cf4ab7c15313bd14a15.jpg",
            kcal: 100,
            weight: 50
        },
        {
            name: "Picanha",
            imageUrl: "https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/picanha-aa0c51c6-640w.jpg",
            kcal: 600,
            weight: 150
        },
        {
            name: "Salada",
            imageUrl: "https://img.band.uol.com.br/image/2023/09/25/salada-1549.png",
            kcal: 50,
            weight: 100
        },
        {
            name: "Feijão",
            imageUrl: "https://saude.mpu.mp.br/nutricao/receitas/imagens/Feijaonutritivo.png",
            kcal: 200,
            weight: 400
        },
        {
            name: "Ovo cozido",
            imageUrl: "https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2023/10/01/622097146-ovo-cozido.jpg",
            kcal: 100,
            weight: 40
        }
    ]

    const [searchFilter, setSearchFilter] = useState("");

    return (
        <ScrollView className="bg-[#1E1E1E] flex-1 flex flex-col gap-2">
            <View className="p-8 flex flex-col rounded-b-3xl">
                <View className="flex h-min flex-row items-center text-center gap-4">
                    <View className="">
                        <View className="bg-[#302C30] p-2 rounded-full">
                            <TouchableOpacity className="z-20">
                                <Link href={"/dieta"}>
                                    <CaretLeft size={16} color="#fff" />
                                </Link>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View className="flex flex-row">
                        <View className="">
                            <Text className="font-ibmMedium text-xl text-white">Adicionar alimento</Text>
                        </View>
                    </View>
                </View>
                <View className="mt-8">
                    <View className="flex flex-row border-2 border-[#322E33] rounded-full px-4 py-2 items-center gap-4">
                        <MagnifyingGlass size={20} color="#fff" />
                        <TextInput placeholder="Pesquisar"
                        placeholderTextColor="#fff" className="text-white text-xl" value={searchFilter} onChangeText={(t) => setSearchFilter(t)} />
                    </View>
                </View>
                <View className="flex flex-col mt-12 gap-4">
                    {
                        alimentos.filter(a => a.name.toLowerCase().includes(searchFilter.toLowerCase())).map(a => (<AlimentoContainer weight={a.weight} key={a.name} name={a.name} imageUrl={a.imageUrl} kcal={a.kcal} />)) 
                    }
                </View>
            </View>
        </ScrollView>
    )
}