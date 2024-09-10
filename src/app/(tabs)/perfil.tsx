import { ImageBackground, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { BoxModel } from "../../components/BoxModel";
import { Link, router, useNavigation } from 'expo-router';
import { getUserData } from "../../storage/userData/getUserData";
import { useEffect, useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { CaretLeft, UploadSimple, DotsThree, CaretDown, Fire, Footprints, Gauge  } from "phosphor-react-native";

export default function Profile(){
    return(
        <View className="flex-1 bg-black">

            <View className="h-2/5 rounded-b-3xl flex w-screen flex-col bg-neutral-900">

                <View className="h-min  flex flex-row mt-3 h-1/6 items-center">

                    <View className="h-2/4 w-4/12">
                        <CaretLeft size={32} color="green" />
                    </View>

                    <View className="flex flex-row gap-8">
                        <View className="">
                            <Text className="font-ibmMedium text-xl mt-2 text-white">NomeDeUsuario</Text>
                        </View>

                        <View className="w-2/6 flex-row gap-7 mt-2">
                            <UploadSimple size={28} color="green"/>
                            <DotsThree size={28} color="green"/>
                        </View>
                    </View>

                    
                    
                </View>
                
                <View className="flex h-min flex-row ">

                    <View className=" items-center w-32 "> 
                        <Image source={require('../../assets/moca.jpg')} className="w-24 h-24 rounded-full mr-5" />
                    </View>

                    <View className="flex flex-row gap-5 py-4">

                        <View className="flex">

                            <View>
                                <Text className="font-ibmMedium text-white font-extralight">Treinamentos</Text>
                            </View>

                            <View className="items-center">
                                <Text className="font-ibmMedium text-white">130</Text>
                            </View>
                            
                        </View>


                        <View className="flex">

                            <View>
                                <Text className="font-ibmMedium text-white font-extralight">Seguidores</Text>
                            </View>

                            <View className="items-center">
                                <Text className="font-ibmMedium text-white">130</Text>
                            </View>
                            
                        </View>

                        <View className="flex">
                                <View>
                                    <Text className="font-ibmMedium text-white font-extralight">Seguindo</Text>
                                </View>

                                <View className="items-center">
                                    <Text className="font-ibmMedium text-white">130</Text>
                                </View>
                        </View>
                        
                        
                        
                    </View>

                    
                    
                </View>

            </View>

            
            <ScrollView className=" bg-black flex flex-1">

                <View className="flex flex-row h-1/12">

                    <View className="w-2/6 items-center py-4">
                        <Text className="text-white text-xl font-ibmMedium">Estatísticas</Text>
                    </View>
                    
                    <View className="w-5/12">

                    </View>

                    <View className=" flex flex-row py-4 flex-1 gap-3">
                        <Text className="text-white text-xl font-ibmMedium">Mês</Text>
                        <CaretDown size={32} color="green" />
                    </View>

                </View>

                <View className="flex">

                    <View className="bg-neutral-900 h-32 flex flex-1 flex-row rounded-2xl">

                        <View className="w-2/6 items-center flex py-4">

                            <View>
                                <Gauge size={32} color="green" />
                            </View>

                            <View>
                                <Text className="text-white font-ibmRegular">Distância</Text>
                            </View>

                            <View>
                                <Text className="text-white font-ibmRegular">20km</Text>
                            </View>
                            
                        </View>

                        <View className="w-2/6 items-center flex py-4">
                            
                            <View>
                                <Footprints size={32} color="green" />
                            </View>

                            <View>
                                <Text className="text-white font-ibmRegular">Passos</Text>
                            </View>

                            <View>
                                <Text className="text-white font-ibmRegular">20km</Text>
                            </View>
                            
                        </View>

                        <View className="w-2/6 items-center flex py-4">
                            <View>
                                <Fire size={32} color="green" />
                            </View>

                            <View>
                                <Text className="text-white font-ibmRegular">Kcal</Text>
                            </View>

                            <View>
                                <Text className="text-white font-ibmRegular">20km</Text>
                            </View>
                        </View>


                    </View>
                </View>

                

            </ScrollView>


        </View>
    )  
}