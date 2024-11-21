import { useState } from 'react';
import { Image, StyleSheet, Platform, View, Text, ImageBackground, ImageComponent, TouchableOpacity, Button, ScrollView, Modal, TextInput } from 'react-native';
import { Barbell, Circle, PencilLine, PencilSimple, Repeat, Timer } from 'phosphor-react-native'
import { router, useLocalSearchParams } from 'expo-router';
import Slider from '@react-native-community/slider';

export default function editWorkout() {
  const {title, desc} = useLocalSearchParams();
  const [height, setHeight] = useState(90)
  const [weight, setWeight] = useState(0)
  const [reps, setReps] = useState('0')
  var [maxHeight, setMaxHeight] = useState(35)

  function handleChangeInput(text : string){
    const numericVal = text.replace(/[^0-9]/g, "")
    setReps(numericVal)
  }

  const [openModal, setOpenModal] = useState(false);

  function renderModal() {


    return (
      <Modal visible={openModal} animationType='slide' transparent={true}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: 'transparent'}}>
          <View style={{ backgroundColor: '#151415', width: '100%', borderRadius: 30, height: '60%', display: 'flex', alignItems: 'center', justifyContent:'space-between' }}>
            <TouchableOpacity onPress={() => setOpenModal(false)}>
              <View style={{ backgroundColor: '#322E33', height: 5, width: 100, borderRadius: 30, marginTop: 10 }}></View>
            </TouchableOpacity>

            <View className='flex-1 w-full items-center'>
              <Text className='p-4 border-b-2 border-[#322E33] w-full text-[#DADADA] font-ibmMedium text-center text-2xl'>Editar Série</Text>
              <View className='flex-row items-center justify-center mt-8'>
                <PencilLine size={28} color='#FFF'/>
                <Text className='font-ibmMedium text-4xl text-[#DADADA]'>{weight}</Text>
                <Text className='font-ibmMedium text-2xl text-[#646464]'>kg</Text>
              </View>
              <Slider
                  style={{width: 300, height: 80}}
                  minimumValue={0}
                  maximumValue={250}
                  minimumTrackTintColor="#00BF63"
                  maximumTrackTintColor="#FFFFFF"
                  thumbTintColor='#00BF63'
                  onValueChange={value => setWeight(Math.round(value))}
              />
              <View className='flex-row px-6 py-4 m-8 w-5/6 bg-[#0C0C0C] items-center justify-center gap-2 rounded-3xl'>
                <Text className='font-ibmMedium text-2xl text-[#DADADA]'>Repetições</Text>
                <TextInput className='bg-[#151415] font-ibmMedium text-xl border-2 border-[#3E3E3E] px-8 py-2 rounded-full text-white' placeholder='15-12-10-8' placeholderTextColor={"#3E3E3E"} onChangeText={handleChangeInput} value={reps}></TextInput>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  return (
    <View style={styles.fullDiv}>
      <View>
        <ImageBackground source={require("../../../../assets/homemTreinando.webp")} style={[styles.Image]}>

          <View style={styles.topSpace}>

          </View>

          <View style={styles.bottomDiv}>

            <Text style={styles.topText}>
              Treino B - Peito e biceps
            </Text>

            <Text style={styles.bottomText}>
              Criado por username
            </Text>

          </View>

        </ImageBackground>
      </View>

      <ScrollView style={styles.scroll}>
        <View style={[styles.content]}>
          <View style={[styles.box, { height }]}>
            <View style={styles.topContent}>
              <View style={styles.left}>
                <Image source={require("../../../../assets/moca.jpg")} style={styles.boxImg}>
                </Image>
              </View>

              <View style={styles.right}>

                <View >
                  <Text style={[styles.boxText]}>{title}</Text>
                  <Text style={[styles.subBoxText]}>{desc}</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => height == 90 ? setHeight(240) : setHeight(90)}>
                    <Circle size={23} color='#00BF63' />
                  </TouchableOpacity>
                </View>

              </View>
            </View>

            <ScrollView>
              <View style={[styles.bottomContent]}>
                <View style={[styles.infoBox, { maxHeight }]}>

                  <View style={[styles.upPart]}>
                    <Text style={[styles.textOne]}>1</Text>

                    <View style={styles.subInfo}>

                      <Text style={styles.textSubInfo}>{reps} repetições</Text>

                    </View>

                    <View style={styles.subInfo}>
                      <Text style={styles.textSubInfo}>{weight} Kg </Text>
                    </View>

                    <View style={styles.subInfo}>
                      <Text style={styles.textSubInfo}>0</Text>
                    </View>

                    <TouchableOpacity onPress={() => maxHeight == 35 ? setMaxHeight(70) : setMaxHeight(35)}>
                      <Image source={require("../../../../assets/circle.png")} style={[styles.subInfoImage]}>
                      </Image>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.downPart}>

                    <TouchableOpacity onPress={() => setOpenModal(true)}>
                      <Image source={require("../../../../assets/circle.png")} style={styles.img}></Image>
                    </TouchableOpacity>

                    <Text style={styles.text}>Editar serie</Text>

                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomButton]}>
        <TouchableOpacity style={[styles.Button]} onPress={() => router.back()}>
          <Text style={[styles.textButton]}>Finalizar treino</Text>
        </TouchableOpacity>
      </View>
      {renderModal()}
    </View>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  Image: {
    width: '100%',
    height: 250
  },
  topSpace: {
    height: '80%',
  },
  bottomDiv: {
    marginLeft: '5%',
  },
  topText: {
    fontWeight: 'bold',
    color: 'white'
  },
  bottomText: {
    fontWeight: 'thin',
    color: 'white'
  },
  content: {
    height: '55%',
    backgroundColor: 'rgba(9,9,9,255)',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
  },
  fullDiv: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#090909',
  },
  box: {
    width: '90%',
    backgroundColor: 'rgb(24,20,20)',
    borderRadius: 25,
    alignContent: 'center',
    gap: 5,
    textAlign: 'center',
    margin: 12,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  boxImg: {
    height: 43,
    width: 80,
    borderRadius: 10,
  },
  left: {
    width: '40%',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  right: {
    alignContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center'
  },
  boxText: {
    color: 'white'
  },
  subBoxText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'light'
  },
  boxCheck: {
    height: 15,
    width: 15,
  },
  overRight: {
  },
  bottomButton: {
    backgroundColor: 'rgb(24,20,20)',
    height: 120,
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
  },
  Button: {
    height: 40,
    width: 170,
    backgroundColor: 'rgb(8,180,92)',
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  textButton: {
    marginTop: '6%',
    color: 'rgb(255,255,255)',
  },
  topContent: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 80,
    alignContent: 'center',
    alignItems: 'center',
  },
  bottomContent: {
    height: 80,
    display: 'flex',

  },
  infoBox: {
    display: 'flex',
    backgroundColor: 'rgb(12,12,12)',
    maxHeight: 35,
    width: 310,
    borderRadius: 20,
    gap: 2,
    alignItems: 'center',
    marginTop: 5,
    overflow: 'hidden',
  },
  subInfo: {
    backgroundColor: '#302C30',
    height: 20,
    borderRadius: 7,
    color: 'white',
    marginLeft: 10,
  },
  textSubInfo: {
    color: 'white',
    fontWeight: 'ultralight',
    paddingLeft: 7,
    paddingRight: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  subInfoImage: {
    height: 15,
    width: 15,
    marginLeft: 12,
  },
  textOne: {
    color: 'white',
    marginLeft: 15,
    fontSize: 15
  },
  scroll: {
    backgroundColor: 'rgb(12,12,12)',
  },
  textGroup: {
    alignItems: 'flex-start',
    width: '100%',
    marginLeft: '15%',
    gap: 4,
    marginTop: '7%',
    marginBottom: '7%',
  },
  upPart: {
    display: 'flex',
    flexDirection: 'row',
    height: 35,
    width: 290,
    borderRadius: 20,
    gap: 2,
    alignItems: 'center'
  },
  downPart: {
    backgroundColor: '#2B272C',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 35,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    alignContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 15,
    width: 15,
    marginLeft: 20
  },
  text: {
    color: 'white',
  }
});