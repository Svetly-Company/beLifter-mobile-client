import { ImageBackground, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { BoxModel } from "../../components/BoxModel";
import { Link, router, useNavigation } from 'expo-router';
import { getUserData } from "../../storage/userData/getUserData";
import { useEffect, useState } from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { CaretLeft, UploadSimple, DotsThree, CaretDown, Fire, Footprints, Gauge, CalendarBlank } from "phosphor-react-native";


export default function Profile() {
  return (
    <View className="flex-1 bg-black">

      <View className="h-2/5 rounded-b-3xl flex w-screen flex-col bg-neutral-900">

        <View className="h-12"></View>

        <View className=" flex h-min flex-row mt-3 items-center">

          <View className="h-2/4 mb-2 w-4/12">
            <CaretLeft size={32} color="#00BF63" />
          </View>

          <View className="flex flex-row gap-8">
            <View className="w-3/6">
              <Text className="font-ibmMedium text-xl mt-2 text-white">NomeDeUsuario</Text>
            </View>

            <View className="w-2/6 flex-row gap-3 mt-2">
              <UploadSimple size={28} color="#00BF63" />
              <DotsThree size={28} color="#00BF63" />
            </View>
          </View>



        </View>

        <View className="flex mt-3 h-4/6 gap-3">

          <View className="flex flex-row">
            <View className=" items-center w-2/6 ">
              <Image source={require('../../assets/moca.jpg')} className="w-24 h-24 rounded-full mr-5" />
            </View>

            <View className="flex flex-row gap-5 py-4">

              <View className="flex gap-2">

                <View>
                  <Text className="font-ibmMedium text-white font-extralight">Treinamentos</Text>
                </View>

                <View className="items-center">
                  <Text className="font-ibmMedium text-white">130</Text>
                </View>

              </View>


              <View className="flex gap-2">

                <View>
                  <Text className="font-ibmMedium text-white font-extralight">Seguidores</Text>
                </View>

                <View className="items-center">
                  <Text className="font-ibmMedium text-white">2K</Text>
                </View>

              </View>

              <View className="flex gap-2">
                <View>
                  <Text className="font-ibmMedium text-white font-extralight">Seguindo</Text>
                </View>

                <View className="items-center">
                  <Text className="font-ibmMedium text-white">200</Text>
                </View>
              </View>

            </View>

          </View>

          <View className="flex flex-1 gap-1">

            <View className="ml-8 flex gap-2">

              <View>
                <Text className="font-ibmMedium text-lg text-white">Luís Ricarda</Text>
              </View>

              <View>
                <Text className="font-ibmRegular text-lg text-white">Em briga de saci, todo chute é voadora!  </Text>
              </View>


            </View>

            <View className="items-center flex w-full">

              <TouchableOpacity style={{ backgroundColor: "#00BF63", height: 46, width: 360, alignItems: "center", justifyContent: "center", marginTop: 28, borderRadius: 40, }}>
                <Text className="text-white">Editar perfil</Text>
              </TouchableOpacity>

            </View>


          </View>
        </View>

      </View>


      <ScrollView className=" bg-black flex flex-1 ">

        

          <View className="flex flex-row h-1/12 ">

            <View className="w-2/6 items-center py-4">
              <Text className="text-white text-xl font-ibmMedium">Estatísticas</Text>
            </View>

            <View className="w-5/12">

            </View>

            <View className=" flex flex-row py-4 flex-1 gap-3">
              <Text className="text-white text-xl font-ibmMedium">Mês</Text>
              <CaretDown size={32} color="#00BF63" />
            </View>

          </View>

          <View className="flex h-full">

            <View className="items-center h-28">

              <View className="bg-neutral-900 flex flex-1 flex-row rounded-2xl w-5/6">

                <View className="w-2/6 items-center flex py-4">

                  <View>
                    <Gauge size={32} color="#00BF63" />
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
                    <Footprints size={32} color="#00BF63" />
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
                    <Fire size={32} color="#00BF63" />
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

            <View className="gap-4">

              <View className="ml-10 mt-3">

                <Text className="text-white text-xl font-ibmMedium">Painel</Text>

              </View>

              <View className="flex gap-5 items-center">

                <View className="flex flex-row gap-5">

                  <View className="bg-neutral-900 w-5/12 h-14 items-center rounded-2xl ">

                    <Text className="font-ibmRegular text-base text-white py-4">Estatísticas</Text>

                  </View>

                  <View className="bg-neutral-900 w-5/12 h-14 items-center rounded-2xl ">

                    <Text className="font-ibmRegular text-base text-white py-4">Exercícios</Text>

                  </View>

                </View>

                <View className="flex flex-row gap-5">

                  <View className="bg-neutral-900 w-5/12 h-14 items-center rounded-2xl ">

                    <Text className="font-ibmRegular text-base text-white py-4">Medições</Text>

                  </View>

                  <View className="bg-neutral-900 w-5/12 h-14 items-center rounded-2xl ">

                    <Text className="font-ibmRegular text-base text-white py-4">Calendários</Text>

                  </View>

                </View>

                

              </View>

            </View>


          </View>

          <View>

          </View>
        




      </ScrollView>

    </View>
  )
}
