import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Modal, Button } from "react-native";
import { GestureDetector, State, HandlerStateChangeEvent, GestureEvent, Gesture } from "react-native-gesture-handler";
import { Barbell, CaretRight, Timer, Upload } from "phosphor-react-native";
import * as ImagePicker from 'expo-image-picker'

import Animated from "react-native-reanimated";
export default function PostForm() {

  const [changeEvent, setChangeEvent] = useState<boolean>(false)
  const [hours, setHours] = useState('')
  const [weight, setWeight] = useState('0')
  const [modalVisible, setModalVisible] = useState(false)
  const [image, setImage] = useState('')
  async function pickImage() {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [20, 20],
      quality: 1
    })

    if (!res.canceled) {
      setImage(res.assets[0].uri)
    }
  }

  const pan = Gesture.Pan()
    .runOnJS(true)
    .onEnd((e) => {
      if (e.translationX < 0) {
        router.navigate("/home")
      }
    })

  function handleSentModal() {
    setModalVisible(false)
  }

  function handleChangeTimer(time : boolean) {

    setChangeEvent(time)

    setModalVisible(true)

  }

  function handleChangeInput(text : string){
    const numericVal = text.replace(/[^0-9]/g, "")
    changeEvent ? setHours(numericVal) : setWeight(numericVal)
  }

  return (
    <>
      <StatusBar translucent style="light" />
      <GestureDetector
        gesture={pan}

      >
        <View className="bg-gray-950 flex-1 items-center">
          <Text className="text-slate-100 ml-6 mt-20 font-regular text-xl">Nome Treino - Partes Treinadas</Text>
          <View className="flex-row px-6 gap-6 mt-8">
            <View className="flex-1">
              <TouchableOpacity onPress={pickImage}>
                <View className="border border-gray-400 flex-2 border-dashed rounded-xl justify-center items-center h-52">
                  <Upload size={40} color="white" />
                </View>
              </TouchableOpacity>

              <Text className="text-neutral-600 text-sm">Adicione uma foto ou vídeo.</Text>
            </View>

            {
              image ? <Image source={{ uri: image }} className="flex-1 h-52 border rounded-xl" /> :
                <Image className="flex-1 h-52 border-white border rounded-xl" />
            }
          </View>
          <View className="flex-row justify-center gap-12 mt-4 bg-neutral-900 w-4/5 rounded-full h-16">
            <ExerciseInfo title="Duração" desc={`${Math.floor(Number(hours)/60)}h ${Math.round(Number(hours)%60)} min`} time={true} changeTimer={handleChangeTimer} />

            <ExerciseInfo title="Volume" desc={`${weight} Kg`} time={false} changeTimer={handleChangeTimer} />
          </View>

          <View className="w-full px-8 pt-8 pb-4">
            <TextInput className="w-full border-b border-white font-regular text-neutral-400"
              placeholder="Escreva uma legenda..."
              placeholderTextColor={"#d8d8d86a"}
            />
          </View>
          <View className="w-full px-8 flex-row justify-between items-center">
            <Text className="text-neutral-400 font-light">Visibilidade</Text>
            <TouchableOpacity>
              <View className="flex-row items-center gap-4">
                <Text className="text-neutral-400 font-thin">Para todos</Text>
                <CaretRight size={16} color="gray" />
              </View>

            </TouchableOpacity>
          </View>

          <Text className="text-red-600 mt-4 font-medium" onPress={()=> router.back()}>
            Descartar treino
          </Text>

          <View className="flex-row w-full items-end justify-center flex-1">
            <View className="h-44 w-full items-center justify-center">
              <TouchableOpacity>
                <View className="w-52 h-12 rounded-3xl bg-green-450 items-center justify-center">
                  <Text className="text-white font-regular">Salvar treino</Text>
                </View>
              </TouchableOpacity>
            </View>
            
          </View>
          
        </View>
      </GestureDetector>
      

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View
            className="w-80 p-5 rounded-lg">
            <TextInput
              className="h-10 border-green-700 rounded-md border mb-5 px-3 text-neutral-400"
              keyboardType="numeric"
              placeholderTextColor={"#fafafaa4"}
              placeholder={changeEvent ? "Insira o valor em minutos" : 'Insira o valor em KG'}
              value={changeEvent ? hours : weight}
              onChangeText={handleChangeInput}
            />
            <TouchableOpacity style={{backgroundColor: '#00BF63', width: 240, height: 40, borderRadius: 4, alignItems: "center", justifyContent: 'center'}} onPress={handleSentModal}>
              <Text className="font-ibmMedium font-bold text-white">Concluido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}

interface ExerciseProps {
  title: string
  desc: string,
  time: boolean,
  changeTimer: (arg : boolean) => void
}

function ExerciseInfo({ title, desc, time, changeTimer }: ExerciseProps) {

  function modalHandler(){
    changeTimer(time)
  }

  return (
    <View className="flex-row items-center gap-2">
      <TouchableOpacity onPress={modalHandler}>
        {
          time ? <Timer size={32} color="white" /> : <Barbell size={32} color="white" />
        }
      </TouchableOpacity>


      <View className="items-center">
        <Text className="font-thin text-white">{title}</Text>
        <Text className="font-ibmRegular text-white">{desc}</Text>
      </View>
    </View>
  )

}